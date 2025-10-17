import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Calendar, Users, DollarSign, Sparkles } from 'lucide-react';

interface ProjectsProps {
  onProjectSelect?: (projectId: number) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showNewProjectModal, setShowNewProjectModal] = useState(false);

  const projects = [
    {
      id: 1,
      name: 'E-commerce Website Redesign',
      client: 'TechCorp Inc.',
      status: 'In Progress',
      dueDate: '2024-02-15',
      budget: '$15,000',
      team: 3,
      gradient: 'from-brand-500 to-brand-600'
    },
    {
      id: 2,
      name: 'Mobile App Development',
      client: 'StartupXYZ',
      status: 'In Progress',
      dueDate: '2024-03-20',
      budget: '$25,000',
      team: 4,
      gradient: 'from-success-500 to-success-600'
    },
    {
      id: 3,
      name: 'Brand Identity Package',
      client: 'Creative Studios',
      status: 'Review',
      dueDate: '2024-01-30',
      budget: '$8,000',
      team: 2,
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      id: 4,
      name: 'Marketing Campaign',
      client: 'RetailBrand Co.',
      status: 'Planning',
      dueDate: '2024-04-10',
      budget: '$12,000',
      team: 5,
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      id: 5,
      name: 'Website Maintenance',
      client: 'LocalBusiness',
      status: 'Completed',
      dueDate: '2024-01-15',
      budget: '$3,000',
      team: 1,
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 6,
      name: 'Social Media Strategy',
      client: 'InfluencerHub',
      status: 'On Hold',
      dueDate: '2024-05-01',
      budget: '$7,500',
      team: 2,
      gradient: 'from-danger-500 to-danger-600'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      'In Progress': 'bg-brand-100 text-brand-700 border-brand-200',
      'Review': 'bg-warning-100 text-warning-700 border-warning-200',
      'Planning': 'bg-neutral-100 text-neutral-700 border-neutral-200',
      'Completed': 'bg-success-100 text-success-700 border-success-200',
      'On Hold': 'bg-danger-100 text-danger-700 border-danger-200'
    };
    return styles[status as keyof typeof styles] || 'bg-neutral-100 text-neutral-700';
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || project.status.toLowerCase().replace(' ', '') === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Projects</h1>
          <p className="text-neutral-600 text-lg">Manage and track all your client projects</p>
        </div>
        <button
          onClick={() => setShowNewProjectModal(true)}
          className="btn-primary flex items-center space-x-2 group"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          <span>New Project</span>
        </button>
      </div>

      <div className="card-premium p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search projects or clients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 bg-white"
            />
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="pl-10 pr-8 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white appearance-none cursor-pointer min-w-[160px] font-medium"
              >
                <option value="all">All Status</option>
                <option value="inprogress">In Progress</option>
                <option value="review">Review</option>
                <option value="planning">Planning</option>
                <option value="completed">Completed</option>
                <option value="onhold">On Hold</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="card-premium p-6 group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} shadow-medium flex items-center justify-center`}>
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
                  <MoreHorizontal
                    className="w-5 h-5 text-neutral-400 hover:text-neutral-600"
                    onClick={() => alert(`Options for ${project.name}`)}
                  />
                </button>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-lg text-neutral-900 mb-1.5 line-clamp-2">{project.name}</h3>
                <p className="text-sm text-neutral-600 font-medium">{project.client}</p>
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-100">
                <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusBadge(project.status)}`}>
                  {project.status}
                </span>
                <span className="text-lg font-bold text-neutral-900">{project.budget}</span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Calendar className="w-4 h-4" />
                    <span className="font-medium">{new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-neutral-600">
                    <Users className="w-4 h-4" />
                    <span className="font-medium">{project.team} members</span>
                  </div>
                </div>
                <button
                  onClick={() => onProjectSelect ? onProjectSelect(project.id) : alert(`Viewing details for ${project.name}`)}
                  className="w-full text-brand-600 hover:text-brand-700 text-sm font-semibold py-2.5 hover:bg-brand-50 rounded-lg transition-all duration-200"
                >
                  View Details →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 card-premium">
          <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-neutral-400" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">No projects found</h3>
          <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {showNewProjectModal && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-large max-w-lg w-full p-8 animate-scale-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
                <Plus className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">Create New Project</h3>
                <p className="text-sm text-neutral-600">Start a new client project</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Project Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-200"
                  placeholder="Enter project name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">Client</label>
                <select className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer">
                  <option>Select a client</option>
                  <option>TechCorp Inc.</option>
                  <option>StartupXYZ</option>
                  <option>Creative Studios</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Budget</label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                      placeholder="0.00"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Due Date</label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>
            </div>
            <div className="flex space-x-3 mt-8">
              <button
                onClick={() => setShowNewProjectModal(false)}
                className="flex-1 px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 font-semibold transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Project created successfully!');
                  setShowNewProjectModal(false);
                }}
                className="flex-1 btn-primary"
              >
                Create Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;

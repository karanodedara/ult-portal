import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Users,
  DollarSign,
  Clock,
  FileText,
  Download,
  Upload,
  MoreHorizontal,
  CheckCircle2,
  Circle,
  AlertCircle,
  TrendingUp,
  Target,
  Sparkles,
  Edit3,
  Trash2
} from 'lucide-react';

interface ProjectDetailsProps {
  projectId: number;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectId, onBack }) => {
  const [showUploadModal, setShowUploadModal] = useState(false);

  const project = {
    id: projectId,
    name: 'E-commerce Website Redesign',
    client: 'TechCorp Inc.',
    status: 'In Progress',
    budget: '$15,000',
    spent: '$11,250',
    startDate: '2024-01-01',
    dueDate: '2024-02-15',
    team: [
      { name: 'Sarah Chen', role: 'Lead Designer', avatar: 'SC' },
      { name: 'Mike Johnson', role: 'Developer', avatar: 'MJ' },
      { name: 'Emma Davis', role: 'UX Designer', avatar: 'ED' }
    ],
    description: 'Complete redesign of the e-commerce platform with focus on user experience, mobile responsiveness, and conversion optimization.',
    progress: 75
  };

  const documents = [
    {
      id: 1,
      name: 'Project Brief.pdf',
      size: '2.4 MB',
      uploadedBy: 'Sarah Chen',
      uploadedDate: '2024-01-05',
      type: 'document'
    },
    {
      id: 2,
      name: 'Design Mockups.fig',
      size: '8.7 MB',
      uploadedBy: 'Emma Davis',
      uploadedDate: '2024-01-12',
      type: 'design'
    },
    {
      id: 3,
      name: 'Technical Specs.docx',
      size: '1.2 MB',
      uploadedBy: 'Mike Johnson',
      uploadedDate: '2024-01-18',
      type: 'document'
    },
    {
      id: 4,
      name: 'Brand Assets.zip',
      size: '15.3 MB',
      uploadedBy: 'TechCorp Inc.',
      uploadedDate: '2024-01-08',
      type: 'archive'
    }
  ];

  const sprints = [
    {
      id: 1,
      week: 'Week of Jan 15 - Jan 21',
      status: 'completed',
      pastWeek: [
        { id: 1, task: 'Completed homepage design mockups', completed: true },
        { id: 2, task: 'Client review and feedback session', completed: true },
        { id: 3, task: 'Revised color palette based on feedback', completed: true },
        { id: 4, task: 'Started product page layouts', completed: true }
      ],
      nextWeek: [
        { id: 1, task: 'Finalize product page designs' },
        { id: 2, task: 'Begin checkout flow wireframes' },
        { id: 3, task: 'Mobile responsive breakpoints' }
      ]
    },
    {
      id: 2,
      week: 'Week of Jan 22 - Jan 28',
      status: 'current',
      pastWeek: [
        { id: 1, task: 'Completed product page designs', completed: true },
        { id: 2, task: 'Started checkout flow implementation', completed: true },
        { id: 3, task: 'Mobile optimization for homepage', completed: false }
      ],
      nextWeek: [
        { id: 1, task: 'Complete checkout flow design' },
        { id: 2, task: 'User testing session scheduled' },
        { id: 3, task: 'Performance optimization review' },
        { id: 4, task: 'Prepare client presentation deck' }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'In Progress':
        return 'bg-brand-100 text-brand-700 border-brand-200';
      case 'Completed':
        return 'bg-success-100 text-success-700 border-success-200';
      case 'On Hold':
        return 'bg-warning-100 text-warning-700 border-warning-200';
      default:
        return 'bg-neutral-100 text-neutral-700 border-neutral-200';
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neutral-600 hover:text-neutral-900 transition-colors group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>
        <div className="flex items-center space-x-3">
          <button className="p-2.5 rounded-lg border border-neutral-300 hover:border-brand-400 hover:bg-brand-50 transition-all duration-200">
            <Edit3 className="w-5 h-5 text-neutral-600" />
          </button>
          <button className="p-2.5 rounded-lg border border-neutral-300 hover:border-danger-400 hover:bg-danger-50 transition-all duration-200">
            <Trash2 className="w-5 h-5 text-neutral-600" />
          </button>
        </div>
      </div>

      <div className="card-premium p-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-14 h-14 gradient-brand rounded-xl flex items-center justify-center shadow-medium">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-neutral-900">{project.name}</h1>
                <p className="text-lg text-neutral-600 mt-1">{project.client}</p>
              </div>
            </div>
            <p className="text-neutral-700 leading-relaxed">{project.description}</p>
          </div>
          <span className={`px-4 py-2 rounded-xl text-sm font-semibold border ${getStatusColor(project.status)} whitespace-nowrap`}>
            {project.status}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-brand-100">
                <DollarSign className="w-5 h-5 text-brand-600" />
              </div>
              <span className="text-sm font-medium text-neutral-600">Budget</span>
            </div>
            <div className="text-2xl font-bold text-neutral-900">{project.budget}</div>
            <div className="text-sm text-neutral-600 mt-1">Spent: {project.spent}</div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-success-100">
                <Target className="w-5 h-5 text-success-600" />
              </div>
              <span className="text-sm font-medium text-neutral-600">Progress</span>
            </div>
            <div className="text-2xl font-bold text-neutral-900">{project.progress}%</div>
            <div className="w-full bg-neutral-200 rounded-full h-2 mt-3">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-success-500 to-success-600 transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-accent-100">
                <Calendar className="w-5 h-5 text-accent-600" />
              </div>
              <span className="text-sm font-medium text-neutral-600">Timeline</span>
            </div>
            <div className="text-sm font-semibold text-neutral-900 mt-1">
              {new Date(project.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
            <div className="text-sm text-neutral-600">
              Due: {new Date(project.dueDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 rounded-lg bg-brand-100">
                <Users className="w-5 h-5 text-brand-600" />
              </div>
              <span className="text-sm font-medium text-neutral-600">Team</span>
            </div>
            <div className="flex -space-x-2 mt-3">
              {project.team.map((member, index) => (
                <div
                  key={index}
                  className="w-9 h-9 rounded-full bg-gradient-to-br from-brand-500 to-brand-600 border-2 border-white flex items-center justify-center text-white text-xs font-semibold shadow-soft"
                  title={`${member.name} - ${member.role}`}
                >
                  {member.avatar}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6">
          <h3 className="text-sm font-semibold text-neutral-700 mb-3">Team Members</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {project.team.map((member, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-neutral-50 border border-neutral-200">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-sm font-semibold shadow-soft">
                  {member.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-neutral-900">{member.name}</div>
                  <div className="text-xs text-neutral-600">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card-premium p-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-1">Project Documents</h2>
            <p className="text-neutral-600">Files and resources for this project</p>
          </div>
          <button
            onClick={() => setShowUploadModal(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Upload className="w-5 h-5" />
            <span>Upload File</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="p-5 rounded-xl border border-neutral-200 hover:border-brand-300 hover:shadow-soft transition-all duration-200 bg-gradient-to-br from-white to-neutral-50/50 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start space-x-3 flex-1 min-w-0">
                  <div className="p-2.5 rounded-lg bg-brand-100 flex-shrink-0">
                    <FileText className="w-5 h-5 text-brand-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-neutral-900 truncate">{doc.name}</h3>
                    <p className="text-sm text-neutral-600">{doc.size}</p>
                  </div>
                </div>
                <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                  <MoreHorizontal className="w-5 h-5 text-neutral-400" />
                </button>
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
                <div className="text-xs text-neutral-600">
                  <div>Uploaded by {doc.uploadedBy}</div>
                  <div className="mt-0.5">{new Date(doc.uploadedDate).toLocaleDateString()}</div>
                </div>
                <button className="p-2 rounded-lg hover:bg-brand-50 text-brand-600 transition-colors">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card-premium p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-neutral-900 mb-1">Weekly Sprints</h2>
          <p className="text-neutral-600">Track progress and plan upcoming work</p>
        </div>

        <div className="space-y-6">
          {sprints.map((sprint) => (
            <div
              key={sprint.id}
              className={`p-6 rounded-xl border-2 ${
                sprint.status === 'current'
                  ? 'border-brand-300 bg-gradient-to-br from-brand-50 to-white'
                  : 'border-neutral-200 bg-white'
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${sprint.status === 'current' ? 'bg-brand-100' : 'bg-neutral-100'}`}>
                    <Clock className={`w-5 h-5 ${sprint.status === 'current' ? 'text-brand-600' : 'text-neutral-600'}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900">{sprint.week}</h3>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      sprint.status === 'current'
                        ? 'bg-brand-100 text-brand-700'
                        : 'bg-success-100 text-success-700'
                    }`}>
                      {sprint.status === 'current' ? 'Current Sprint' : 'Completed'}
                    </span>
                  </div>
                </div>
                {sprint.status === 'current' && (
                  <button className="text-brand-600 hover:text-brand-700 font-medium text-sm">
                    Edit Sprint
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle2 className="w-5 h-5 text-success-600" />
                    <h4 className="font-semibold text-neutral-900">Past Week Updates</h4>
                  </div>
                  <div className="space-y-2">
                    {sprint.pastWeek.map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-start space-x-3 p-3 rounded-lg ${
                          task.completed ? 'bg-success-50 border border-success-100' : 'bg-warning-50 border border-warning-100'
                        }`}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-warning-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={`text-sm ${task.completed ? 'text-success-900' : 'text-warning-900'}`}>
                          {task.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-brand-600" />
                    <h4 className="font-semibold text-neutral-900">Next Week Plans</h4>
                  </div>
                  <div className="space-y-2">
                    {sprint.nextWeek.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-brand-50 border border-brand-100 hover:bg-brand-100 transition-colors"
                      >
                        <Circle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-brand-900">{task.task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showUploadModal && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-large max-w-lg w-full p-8 animate-scale-in">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-neutral-900">Upload Document</h3>
                <p className="text-sm text-neutral-600">Add files to this project</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-neutral-300 rounded-xl p-12 text-center hover:border-brand-400 hover:bg-brand-50/30 transition-all duration-200">
              <Upload className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <p className="text-neutral-600 mb-2 font-medium">Drag and drop files here</p>
              <p className="text-sm text-neutral-500 mb-4">or</p>
              <button className="btn-secondary">Choose Files</button>
            </div>
            <div className="flex space-x-3 mt-8">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 font-semibold transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Files uploaded successfully!');
                  setShowUploadModal(false);
                }}
                className="flex-1 btn-primary"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;

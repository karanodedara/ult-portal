import React from 'react';
import { TrendingUp, Users, Clock, DollarSign, Activity, AlertCircle, ArrowUpRight, Zap, Target } from 'lucide-react';

interface DashboardProps {
  onNavigate: (section: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  const stats = [
    { label: 'Active Projects', value: '12', change: '+3', icon: Activity, gradient: 'from-brand-500 to-brand-600' },
    { label: 'Total Clients', value: '8', change: '+2', icon: Users, gradient: 'from-success-500 to-success-600' },
    { label: 'Hours This Month', value: '142', change: '+18', icon: Clock, gradient: 'from-accent-500 to-accent-600' },
    { label: 'Revenue (YTD)', value: '$47,200', change: '+12%', icon: DollarSign, gradient: 'from-emerald-500 to-emerald-600' },
  ];

  const recentProjects = [
    { name: 'E-commerce Redesign', client: 'TechCorp Inc.', progress: 75, status: 'On Track', color: 'brand' },
    { name: 'Mobile App Development', client: 'StartupXYZ', progress: 40, status: 'In Progress', color: 'accent' },
    { name: 'Brand Identity Package', client: 'Creative Studios', progress: 90, status: 'Nearly Complete', color: 'success' },
  ];

  const upcomingDeadlines = [
    { task: 'Website mockups due', project: 'E-commerce Redesign', date: 'Today', urgent: true },
    { task: 'Client presentation', project: 'Mobile App', date: 'Tomorrow', urgent: true },
    { task: 'Final deliverables', project: 'Brand Identity', date: 'Friday', urgent: false },
  ];

  const recentActivity = [
    { message: 'New message from TechCorp Inc.', time: '2 hours ago', color: 'success' },
    { message: 'Project milestone completed: Mobile App Development', time: '5 hours ago', color: 'brand' },
    { message: 'Invoice #INV-2024-003 sent to Creative Studios', time: '1 day ago', color: 'accent' },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Dashboard</h1>
          <p className="text-neutral-600 text-lg">Welcome back, Sarah. Here's your project overview.</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg border border-neutral-200 shadow-soft">
            <div className="w-2 h-2 bg-success-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-neutral-600">Live</span>
          </div>
          <span className="text-sm text-neutral-500">Updated 2 min ago</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="card-premium group cursor-pointer overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"
                   style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />

              <div className="relative z-10 p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} shadow-medium`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex items-center space-x-1 text-success-600 text-sm font-semibold">
                    <ArrowUpRight className="w-4 h-4" />
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div>
                  <p className="text-neutral-600 text-sm font-medium mb-1">{stat.label}</p>
                  <p className="text-3xl font-bold text-neutral-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 card-premium p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-1">Active Projects</h2>
              <p className="text-neutral-600 text-sm">Track your ongoing work</p>
            </div>
            <button className="flex items-center space-x-2 text-brand-600 hover:text-brand-700 font-medium text-sm group">
              <Zap className="w-4 h-4" />
              <span>Quick Actions</span>
            </button>
          </div>

          <div className="space-y-4">
            {recentProjects.map((project, index) => (
              <div key={index} className="p-5 rounded-xl border border-neutral-200 hover:border-brand-300 hover:shadow-soft transition-all duration-200 bg-gradient-to-br from-white to-neutral-50/50">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">{project.name}</h3>
                    <p className="text-sm text-neutral-600">{project.client}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-neutral-900">{project.progress}%</div>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      project.progress >= 80 ? 'bg-success-100 text-success-700' :
                      project.progress >= 50 ? 'bg-accent-100 text-accent-700' :
                      'bg-brand-100 text-brand-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                <div className="relative w-full bg-neutral-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-2.5 rounded-full bg-gradient-to-r ${
                      project.color === 'brand' ? 'from-brand-500 to-brand-600' :
                      project.color === 'accent' ? 'from-accent-500 to-accent-600' :
                      'from-success-500 to-success-600'
                    } transition-all duration-500 shadow-sm`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
            <button
              onClick={() => onNavigate('projects')}
              className="w-full text-brand-600 hover:text-brand-700 text-sm font-semibold py-3 hover:bg-brand-50 rounded-xl transition-all duration-200 border-2 border-dashed border-neutral-300 hover:border-brand-400"
            >
              View All Projects →
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card-premium p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-danger-600" />
                <h2 className="text-lg font-bold text-neutral-900">Upcoming Deadlines</h2>
              </div>
            </div>

            <div className="space-y-3">
              {upcomingDeadlines.map((deadline, index) => (
                <div key={index} className={`p-4 rounded-xl border ${
                  deadline.urgent
                    ? 'bg-danger-50 border-danger-200'
                    : 'bg-warning-50 border-warning-200'
                } transition-all duration-200 hover:shadow-soft`}>
                  <div className="flex items-start space-x-3">
                    <div className={`w-2.5 h-2.5 rounded-full mt-1.5 ${deadline.urgent ? 'bg-danger-500 animate-pulse' : 'bg-warning-500'}`} />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-neutral-900 text-sm mb-1">{deadline.task}</h3>
                      <p className="text-xs text-neutral-600">{deadline.project}</p>
                    </div>
                    <span className={`text-xs font-bold whitespace-nowrap ${deadline.urgent ? 'text-danger-600' : 'text-warning-600'}`}>
                      {deadline.date}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-premium p-6">
            <h2 className="text-lg font-bold text-neutral-900 mb-6">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.color === 'success' ? 'bg-success-500' :
                    activity.color === 'brand' ? 'bg-brand-500' :
                    'bg-accent-500'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-neutral-900 font-medium mb-0.5">{activity.message}</p>
                    <p className="text-xs text-neutral-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

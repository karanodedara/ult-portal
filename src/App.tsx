import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Dashboard from './components/pages/Dashboard';
import Projects from './components/pages/Projects';
import ProjectDetails from './components/pages/ProjectDetails';
import Clients from './components/pages/Clients';
import UlticusLeads from './components/pages/UlticusLeads';
import Files from './components/pages/Files';
import Invoices from './components/pages/Invoices';
import Settings from './components/pages/Settings';
import WelcomeOnboard from './components/pages/WelcomeOnboard';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/welcome-onboard') {
      setActiveSection('welcome-onboard');
    }
  }, []);

  const handleProjectSelect = (projectId: number) => {
    setSelectedProjectId(projectId);
    setActiveSection('project-details');
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setActiveSection('projects');
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'welcome-onboard':
        return <WelcomeOnboard />;
      case 'dashboard':
        return <Dashboard onNavigate={setActiveSection} />;
      case 'projects':
        return <Projects onProjectSelect={handleProjectSelect} />;
      case 'project-details':
        return selectedProjectId ? (
          <ProjectDetails projectId={selectedProjectId} onBack={handleBackToProjects} />
        ) : (
          <Projects onProjectSelect={handleProjectSelect} />
        );
      case 'clients':
        return <Clients />;
      case 'ulticus-leads':
        return <UlticusLeads />;
      case 'files':
        return <Files />;
      case 'invoices':
        return <Invoices />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard onNavigate={setActiveSection} />;
    }
  };

  if (activeSection === 'welcome-onboard') {
    return <WelcomeOnboard />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={setActiveSection}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <main className="flex-1 lg:ml-72 pt-20">
          <div className="p-6 lg:p-10 gradient-mesh min-h-screen">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
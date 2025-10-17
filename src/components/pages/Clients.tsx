import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal, Mail, Phone, Building2, MapPin, Edit2, Trash2, X } from 'lucide-react';

interface Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  status: string;
  projects: number;
  revenue: string;
  gradient: string;
}

const Clients: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showModal, setShowModal] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [clients, setClients] = useState<Client[]>([
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah.j@techcorp.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      status: 'Active',
      projects: 3,
      revenue: '$45,000',
      gradient: 'from-brand-500 to-brand-600'
    },
    {
      id: 2,
      name: 'Michael Chen',
      email: 'michael@startupxyz.com',
      phone: '+1 (555) 234-5678',
      company: 'StartupXYZ',
      location: 'New York, NY',
      status: 'Active',
      projects: 2,
      revenue: '$28,000',
      gradient: 'from-success-500 to-success-600'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      email: 'emily@creativestudios.io',
      phone: '+1 (555) 345-6789',
      company: 'Creative Studios',
      location: 'Los Angeles, CA',
      status: 'Active',
      projects: 1,
      revenue: '$15,000',
      gradient: 'from-accent-500 to-accent-600'
    },
    {
      id: 4,
      name: 'David Park',
      email: 'david@retailbrand.com',
      phone: '+1 (555) 456-7890',
      company: 'RetailBrand Co.',
      location: 'Chicago, IL',
      status: 'Inactive',
      projects: 0,
      revenue: '$0',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      email: 'lisa@localbusiness.net',
      phone: '+1 (555) 567-8901',
      company: 'LocalBusiness',
      location: 'Austin, TX',
      status: 'Active',
      projects: 1,
      revenue: '$8,500',
      gradient: 'from-emerald-500 to-emerald-600'
    },
    {
      id: 6,
      name: 'James Wilson',
      email: 'james@influencerhub.co',
      phone: '+1 (555) 678-9012',
      company: 'InfluencerHub',
      location: 'Miami, FL',
      status: 'Pending',
      projects: 1,
      revenue: '$12,000',
      gradient: 'from-blue-500 to-blue-600'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    location: '',
    status: 'Active'
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      'Active': 'bg-success-100 text-success-700 border-success-200',
      'Inactive': 'bg-neutral-100 text-neutral-700 border-neutral-200',
      'Pending': 'bg-warning-100 text-warning-700 border-warning-200'
    };
    return styles[status as keyof typeof styles] || 'bg-neutral-100 text-neutral-700';
  };

  const filteredClients = clients.filter(client => {
    const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         client.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || client.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const handleOpenModal = (client?: Client) => {
    if (client) {
      setEditingClient(client);
      setFormData({
        name: client.name,
        email: client.email,
        phone: client.phone,
        company: client.company,
        location: client.location,
        status: client.status
      });
    } else {
      setEditingClient(null);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        location: '',
        status: 'Active'
      });
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingClient(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      location: '',
      status: 'Active'
    });
  };

  const handleSubmit = () => {
    if (editingClient) {
      setClients(clients.map(c =>
        c.id === editingClient.id
          ? { ...c, ...formData }
          : c
      ));
    } else {
      const newClient: Client = {
        id: Math.max(...clients.map(c => c.id)) + 1,
        ...formData,
        projects: 0,
        revenue: '$0',
        gradient: 'from-brand-500 to-brand-600'
      };
      setClients([...clients, newClient]);
    }
    handleCloseModal();
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this client?')) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Clients</h1>
          <p className="text-neutral-600 text-lg">Manage your client relationships</p>
        </div>
        <button
          onClick={() => handleOpenModal()}
          className="btn-primary flex items-center space-x-2 group"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-200" />
          <span>Add Client</span>
        </button>
      </div>

      <div className="card-premium p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search clients, companies, or emails..."
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
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="card-premium p-6 group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${client.gradient} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`} />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${client.gradient} shadow-medium flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{client.name.charAt(0)}</span>
                </div>
                <div className="flex space-x-1">
                  <button
                    onClick={() => handleOpenModal(client)}
                    className="p-2 hover:bg-brand-50 rounded-lg transition-colors"
                  >
                    <Edit2 className="w-4 h-4 text-brand-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(client.id)}
                    className="p-2 hover:bg-danger-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4 text-danger-600" />
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="font-bold text-lg text-neutral-900 mb-1">{client.name}</h3>
                <div className="flex items-center space-x-2 text-sm text-neutral-600 mb-2">
                  <Building2 className="w-4 h-4" />
                  <span className="font-medium">{client.company}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4 pb-4 border-b border-neutral-100">
                <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusBadge(client.status)}`}>
                  {client.status}
                </span>
                <div className="text-right">
                  <div className="text-xs text-neutral-500 font-medium">Revenue</div>
                  <div className="text-lg font-bold text-neutral-900">{client.revenue}</div>
                </div>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium truncate">{client.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">{client.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-neutral-600">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">{client.location}</span>
                </div>
                <div className="pt-2 mt-2 border-t border-neutral-100">
                  <div className="text-xs text-neutral-500 font-medium">Active Projects</div>
                  <div className="text-lg font-bold text-brand-600">{client.projects}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="text-center py-16 card-premium">
          <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-neutral-400" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">No clients found</h3>
          <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-large max-w-2xl w-full p-8 animate-scale-in max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 gradient-brand rounded-xl flex items-center justify-center">
                  {editingClient ? <Edit2 className="w-6 h-6 text-white" /> : <Plus className="w-6 h-6 text-white" />}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">
                    {editingClient ? 'Edit Client' : 'Add New Client'}
                  </h3>
                  <p className="text-sm text-neutral-600">
                    {editingClient ? 'Update client information' : 'Create a new client profile'}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-neutral-500" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-200"
                    placeholder="Enter full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-200"
                    placeholder="Enter company name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-200"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all duration-200"
                    placeholder="City, State"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-neutral-700 mb-2">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                    className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 appearance-none cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Pending">Pending</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex space-x-3 mt-8">
              <button
                onClick={handleCloseModal}
                className="flex-1 px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 font-semibold transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 btn-primary"
              >
                {editingClient ? 'Update Client' : 'Add Client'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clients;

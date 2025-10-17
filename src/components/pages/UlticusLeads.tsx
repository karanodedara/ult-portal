import React, { useState } from 'react';
import { Search, Filter, Mail, Phone, Calendar, TrendingUp, Building2, MapPin, ExternalLink } from 'lucide-react';

interface Lead {
  id: number;
  name: string;
  email: string;
  phone: string;
  company: string;
  location: string;
  source: string;
  status: string;
  value: string;
  date: string;
  gradient: string;
}

const UlticusLeads: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSource, setFilterSource] = useState('all');

  const leads: Lead[] = [
    {
      id: 1,
      name: 'Alexandra Martinez',
      email: 'alex.martinez@techventures.io',
      phone: '+1 (555) 789-0123',
      company: 'Tech Ventures Inc.',
      location: 'Seattle, WA',
      source: 'Website',
      status: 'Hot',
      value: '$75,000',
      date: '2024-01-28',
      gradient: 'from-danger-500 to-danger-600'
    },
    {
      id: 2,
      name: 'Robert Kim',
      email: 'robert@innovatesoft.com',
      phone: '+1 (555) 890-1234',
      company: 'InnovateSoft',
      location: 'Boston, MA',
      source: 'Referral',
      status: 'Warm',
      value: '$45,000',
      date: '2024-01-27',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      id: 3,
      name: 'Jennifer Lopez',
      email: 'jennifer@digitalflow.co',
      phone: '+1 (555) 901-2345',
      company: 'Digital Flow Co.',
      location: 'Denver, CO',
      source: 'LinkedIn',
      status: 'Hot',
      value: '$120,000',
      date: '2024-01-26',
      gradient: 'from-danger-500 to-danger-600'
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      email: 'marcus@cloudsynergy.net',
      phone: '+1 (555) 012-3456',
      company: 'Cloud Synergy',
      location: 'Portland, OR',
      source: 'Website',
      status: 'Cold',
      value: '$25,000',
      date: '2024-01-25',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 5,
      name: 'Sophia Patel',
      email: 'sophia@nexusdigital.com',
      phone: '+1 (555) 123-4567',
      company: 'Nexus Digital',
      location: 'Phoenix, AZ',
      source: 'Google Ads',
      status: 'Warm',
      value: '$60,000',
      date: '2024-01-24',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      id: 6,
      name: 'Daniel Wright',
      email: 'daniel@primetech.io',
      phone: '+1 (555) 234-5678',
      company: 'PrimeTech Solutions',
      location: 'Atlanta, GA',
      source: 'Referral',
      status: 'Hot',
      value: '$95,000',
      date: '2024-01-23',
      gradient: 'from-danger-500 to-danger-600'
    },
    {
      id: 7,
      name: 'Olivia Chen',
      email: 'olivia@futurewave.tech',
      phone: '+1 (555) 345-6789',
      company: 'FutureWave Tech',
      location: 'San Diego, CA',
      source: 'Website',
      status: 'Warm',
      value: '$52,000',
      date: '2024-01-22',
      gradient: 'from-warning-500 to-warning-600'
    },
    {
      id: 8,
      name: 'Ethan Brown',
      email: 'ethan@strategicops.com',
      phone: '+1 (555) 456-7890',
      company: 'Strategic Ops',
      location: 'Nashville, TN',
      source: 'LinkedIn',
      status: 'Cold',
      value: '$18,000',
      date: '2024-01-21',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 9,
      name: 'Isabella Garcia',
      email: 'isabella@velocitygroup.co',
      phone: '+1 (555) 567-8901',
      company: 'Velocity Group',
      location: 'Dallas, TX',
      source: 'Google Ads',
      status: 'Hot',
      value: '$88,000',
      date: '2024-01-20',
      gradient: 'from-danger-500 to-danger-600'
    },
    {
      id: 10,
      name: 'Nathan Taylor',
      email: 'nathan@apexsystems.io',
      phone: '+1 (555) 678-9012',
      company: 'Apex Systems',
      location: 'Charlotte, NC',
      source: 'Referral',
      status: 'Warm',
      value: '$42,000',
      date: '2024-01-19',
      gradient: 'from-warning-500 to-warning-600'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      'Hot': 'bg-danger-100 text-danger-700 border-danger-200',
      'Warm': 'bg-warning-100 text-warning-700 border-warning-200',
      'Cold': 'bg-blue-100 text-blue-700 border-blue-200'
    };
    return styles[status as keyof typeof styles] || 'bg-neutral-100 text-neutral-700';
  };

  const getSourceBadge = (source: string) => {
    const styles = {
      'Website': 'bg-brand-100 text-brand-700',
      'LinkedIn': 'bg-blue-100 text-blue-700',
      'Referral': 'bg-success-100 text-success-700',
      'Google Ads': 'bg-accent-100 text-accent-700'
    };
    return styles[source as keyof typeof styles] || 'bg-neutral-100 text-neutral-700';
  };

  const filteredLeads = leads.filter(lead => {
    const matchesSearch = lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         lead.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || lead.status.toLowerCase() === filterStatus;
    const matchesSource = filterSource === 'all' || lead.source.toLowerCase().replace(' ', '') === filterSource;
    return matchesSearch && matchesStatus && matchesSource;
  });

  const stats = {
    total: leads.length,
    hot: leads.filter(l => l.status === 'Hot').length,
    warm: leads.filter(l => l.status === 'Warm').length,
    cold: leads.filter(l => l.status === 'Cold').length,
    totalValue: leads.reduce((sum, lead) => sum + parseInt(lead.value.replace(/[$,]/g, '')), 0)
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Ulticus Leads</h1>
          <p className="text-neutral-600 text-lg">Track and manage your sales pipeline</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card-premium p-6 bg-gradient-to-br from-brand-500 to-brand-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-brand-100 font-semibold text-sm">Total Leads</span>
            <TrendingUp className="w-5 h-5 text-brand-200" />
          </div>
          <div className="text-3xl font-bold">{stats.total}</div>
          <div className="text-brand-100 text-sm mt-1">Active prospects</div>
        </div>

        <div className="card-premium p-6 bg-gradient-to-br from-danger-500 to-danger-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-danger-100 font-semibold text-sm">Hot Leads</span>
            <TrendingUp className="w-5 h-5 text-danger-200" />
          </div>
          <div className="text-3xl font-bold">{stats.hot}</div>
          <div className="text-danger-100 text-sm mt-1">High priority</div>
        </div>

        <div className="card-premium p-6 bg-gradient-to-br from-warning-500 to-warning-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-warning-100 font-semibold text-sm">Warm Leads</span>
            <TrendingUp className="w-5 h-5 text-warning-200" />
          </div>
          <div className="text-3xl font-bold">{stats.warm}</div>
          <div className="text-warning-100 text-sm mt-1">Medium priority</div>
        </div>

        <div className="card-premium p-6 bg-gradient-to-br from-success-500 to-success-600 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-success-100 font-semibold text-sm">Total Value</span>
            <TrendingUp className="w-5 h-5 text-success-200" />
          </div>
          <div className="text-3xl font-bold">${(stats.totalValue / 1000).toFixed(0)}K</div>
          <div className="text-success-100 text-sm mt-1">Pipeline value</div>
        </div>
      </div>

      <div className="card-premium p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search leads, companies, or emails..."
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
                className="pl-10 pr-8 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white appearance-none cursor-pointer min-w-[140px] font-medium"
              >
                <option value="all">All Status</option>
                <option value="hot">Hot</option>
                <option value="warm">Warm</option>
                <option value="cold">Cold</option>
              </select>
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <select
                value={filterSource}
                onChange={(e) => setFilterSource(e.target.value)}
                className="pl-10 pr-8 py-3.5 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent bg-white appearance-none cursor-pointer min-w-[140px] font-medium"
              >
                <option value="all">All Sources</option>
                <option value="website">Website</option>
                <option value="linkedin">LinkedIn</option>
                <option value="referral">Referral</option>
                <option value="googleads">Google Ads</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="card-premium overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-neutral-50 border-b border-neutral-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Lead</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Contact</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Company</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Source</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Value</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-neutral-700">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100">
              {filteredLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-neutral-50 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${lead.gradient} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white font-semibold text-sm">{lead.name.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-neutral-900">{lead.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <Mail className="w-3.5 h-3.5" />
                        <span>{lead.email}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <Phone className="w-3.5 h-3.5" />
                        <span>{lead.phone}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2 text-sm font-medium text-neutral-900">
                        <Building2 className="w-3.5 h-3.5" />
                        <span>{lead.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-neutral-600">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{lead.location}</span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${getSourceBadge(lead.source)}`}>
                      {lead.source}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1.5 rounded-lg text-xs font-semibold border ${getStatusBadge(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="font-bold text-neutral-900">{lead.value}</div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2 text-sm text-neutral-600">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(lead.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <button className="text-brand-600 hover:text-brand-700 font-semibold text-sm flex items-center space-x-1 hover:bg-brand-50 px-3 py-2 rounded-lg transition-all">
                      <span>View</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredLeads.length === 0 && (
        <div className="text-center py-16 card-premium">
          <div className="w-16 h-16 bg-neutral-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-neutral-400" />
          </div>
          <h3 className="text-xl font-bold text-neutral-900 mb-2">No leads found</h3>
          <p className="text-neutral-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default UlticusLeads;

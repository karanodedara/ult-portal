import React, { useState } from 'react';
import { Plus, Search, Download, Eye, Filter, DollarSign, Calendar, TrendingUp } from 'lucide-react';

const Invoices: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  const invoices = [
    {
      id: 'INV-2024-001',
      client: 'TechCorp Inc.',
      project: 'E-commerce Redesign',
      amount: '$7,500.00',
      status: 'Paid',
      dueDate: '2024-01-15',
      paidDate: '2024-01-12',
      issueDate: '2024-01-01'
    },
    {
      id: 'INV-2024-002',
      client: 'StartupXYZ',
      project: 'Mobile App Development',
      amount: '$12,000.00',
      status: 'Pending',
      dueDate: '2024-01-30',
      paidDate: null,
      issueDate: '2024-01-15'
    },
    {
      id: 'INV-2024-003',
      client: 'Creative Studios',
      project: 'Brand Identity Package',
      amount: '$4,000.00',
      status: 'Paid',
      dueDate: '2024-01-25',
      paidDate: '2024-01-20',
      issueDate: '2024-01-10'
    },
    {
      id: 'INV-2024-004',
      client: 'RetailBrand Co.',
      project: 'Marketing Campaign',
      amount: '$6,000.00',
      status: 'Overdue',
      dueDate: '2024-01-20',
      paidDate: null,
      issueDate: '2024-01-05'
    },
    {
      id: 'INV-2024-005',
      client: 'LocalBusiness',
      project: 'Website Maintenance',
      amount: '$1,500.00',
      status: 'Draft',
      dueDate: '2024-02-01',
      paidDate: null,
      issueDate: '2024-01-20'
    }
  ];

  const getStatusBadge = (status: string) => {
    const styles = {
      'Paid': 'bg-green-100 text-green-800',
      'Pending': 'bg-yellow-100 text-yellow-800',
      'Overdue': 'bg-red-100 text-red-800',
      'Draft': 'bg-gray-100 text-gray-800'
    };
    return styles[status as keyof typeof styles] || 'bg-gray-100 text-gray-800';
  };

  const filteredInvoices = invoices.filter(invoice => {
    const matchesSearch = invoice.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || invoice.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const totalAmount = invoices.reduce((sum, invoice) => 
    sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0
  );
  
  const paidAmount = invoices
    .filter(invoice => invoice.status === 'Paid')
    .reduce((sum, invoice) => 
      sum + parseFloat(invoice.amount.replace('$', '').replace(',', '')), 0
    );

  const pendingAmount = totalAmount - paidAmount;

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Invoices</h1>
          <p className="text-slate-600 mt-2">Track payments and manage billing</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Plus className="w-5 h-5" />
          <span onClick={() => alert('Create new invoice functionality')}>Create Invoice</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Total Revenue</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">${totalAmount.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-lg bg-green-50">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Paid</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">${paidAmount.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-50">
              <TrendingUp className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-600 text-sm font-medium">Outstanding</p>
              <p className="text-2xl font-bold text-slate-900 mt-1">${pendingAmount.toLocaleString()}</p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-50">
              <Calendar className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search invoices, clients, or projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="pl-10 pr-8 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            >
              <option value="all">All Status</option>
              <option value="paid">Paid</option>
              <option value="pending">Pending</option>
              <option value="overdue">Overdue</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Invoices Table */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Invoice</th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Client</th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Project</th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Amount</th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Status</th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Due Date</th>
                <th className="text-left py-4 px-6 font-medium text-slate-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice, index) => (
                <tr key={invoice.id} className="border-t border-slate-200 hover:bg-slate-50">
                  <td className="py-4 px-6">
                    <span className="font-medium text-slate-900">{invoice.id}</span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">{invoice.client}</td>
                  <td className="py-4 px-6 text-slate-600">{invoice.project}</td>
                  <td className="py-4 px-6">
                    <span className="font-semibold text-slate-900">{invoice.amount}</span>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-600">
                    {new Date(invoice.dueDate).toLocaleDateString()}
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Eye 
                          className="w-4 h-4" 
                          onClick={() => alert(`Viewing invoice ${invoice.id}`)}
                        />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <Download 
                          className="w-4 h-4" 
                          onClick={() => alert(`Downloading invoice ${invoice.id}`)}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {filteredInvoices.length === 0 && (
        <div className="text-center py-12">
          <DollarSign className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">No invoices found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default Invoices;
import React, { useState } from 'react';
import { Upload, Search, Folder, FileText, Image, Download, MoreHorizontal, Grid, List } from 'lucide-react';

const Files: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const folders = [
    { name: 'TechCorp Inc.', files: 24, modified: '2 days ago' },
    { name: 'StartupXYZ', files: 18, modified: '1 week ago' },
    { name: 'Creative Studios', files: 32, modified: '3 days ago' },
    { name: 'Templates', files: 12, modified: '1 month ago' },
  ];

  const files = [
    { 
      name: 'Website Mockups.fig', 
      type: 'design', 
      size: '2.4 MB', 
      modified: '2 hours ago',
      client: 'TechCorp Inc.'
    },
    { 
      name: 'Project Proposal.pdf', 
      type: 'document', 
      size: '890 KB', 
      modified: '1 day ago',
      client: 'StartupXYZ'
    },
    { 
      name: 'Brand Guidelines.pdf', 
      type: 'document', 
      size: '1.2 MB', 
      modified: '3 days ago',
      client: 'Creative Studios'
    },
    { 
      name: 'Hero Image.jpg', 
      type: 'image', 
      size: '543 KB', 
      modified: '5 days ago',
      client: 'TechCorp Inc.'
    },
    { 
      name: 'Final Invoice.pdf', 
      type: 'document', 
      size: '234 KB', 
      modified: '1 week ago',
      client: 'Creative Studios'
    },
    { 
      name: 'App Screenshots.zip', 
      type: 'archive', 
      size: '3.8 MB', 
      modified: '1 week ago',
      client: 'StartupXYZ'
    },
  ];

  const getFileIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image className="w-8 h-8 text-green-600" />;
      case 'document':
        return <FileText className="w-8 h-8 text-red-600" />;
      default:
        return <FileText className="w-8 h-8 text-blue-600" />;
    }
  };

  const filteredFolders = folders.filter(folder =>
    folder.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    file.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Files</h1>
          <p className="text-slate-600 mt-2">Organize and manage your project files</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
          <Upload className="w-5 h-5" />
          <span onClick={() => setShowUploadModal(true)}>Upload Files</span>
        </button>
      </div>

      {/* Search and View Controls */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search files and folders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Folders Section */}
      {filteredFolders.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-900">Folders</h2>
          <div className={`grid gap-4 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'}`}>
            {filteredFolders.map((folder, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <Folder 
                    className="w-10 h-10 text-blue-600 cursor-pointer" 
                    onClick={() => alert(`Opening ${folder.name} folder`)}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-slate-900 truncate">{folder.name}</h3>
                    <p className="text-sm text-slate-600">{folder.files} files</p>
                    <p className="text-xs text-slate-500">Modified {folder.modified}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Files Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-slate-900">Recent Files</h2>
        
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredFiles.map((file, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between mb-4">
                  {getFileIcon(file.type)}
                  <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-slate-100 rounded-lg transition-all">
                    <MoreHorizontal 
                      className="w-4 h-4 text-slate-400" 
                      onClick={() => alert(`Options for ${file.name}`)}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-medium text-slate-900 truncate">{file.name}</h3>
                  <p className="text-sm text-slate-600">{file.client}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{file.size}</span>
                    <span>{file.modified}</span>
                  </div>
                </div>
                <button className="w-full mt-4 bg-slate-50 hover:bg-slate-100 text-slate-700 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span onClick={() => alert(`Downloading ${file.name}`)}>Download</span>
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left py-4 px-6 font-medium text-slate-700">Name</th>
                    <th className="text-left py-4 px-6 font-medium text-slate-700">Client</th>
                    <th className="text-left py-4 px-6 font-medium text-slate-700">Size</th>
                    <th className="text-left py-4 px-6 font-medium text-slate-700">Modified</th>
                    <th className="text-left py-4 px-6 font-medium text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file, index) => (
                    <tr key={index} className="border-t border-slate-200 hover:bg-slate-50">
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-3">
                          {getFileIcon(file.type)}
                          <span className="font-medium text-slate-900">{file.name}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-slate-600">{file.client}</td>
                      <td className="py-4 px-6 text-slate-600">{file.size}</td>
                      <td className="py-4 px-6 text-slate-600">{file.modified}</td>
                      <td className="py-4 px-6">
                        <button className="text-blue-600 hover:text-blue-700 p-2 hover:bg-blue-50 rounded-lg transition-colors">
                          <Download 
                            className="w-4 h-4" 
                            onClick={() => alert(`Downloading ${file.name}`)}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {filteredFiles.length === 0 && filteredFolders.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-slate-900 mb-2">No files found</h3>
          <p className="text-slate-600">Try adjusting your search criteria or upload some files</p>
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-lg max-w-md w-full p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Upload Files</h3>
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-600 mb-2">Drag and drop files here</p>
              <p className="text-sm text-slate-500 mb-4">or</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Choose Files
              </button>
            </div>
            <div className="flex space-x-4 mt-6">
              <button 
                onClick={() => setShowUploadModal(false)}
                className="flex-1 px-4 py-2 border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert('Files uploaded successfully!');
                  setShowUploadModal(false);
                }}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
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

export default Files;
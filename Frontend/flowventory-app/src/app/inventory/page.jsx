'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { mockInventoryData } from '@/data/users';

export default function Inventory() {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [showDetails, setShowDetails] = useState(null);

  const filteredData = mockInventoryData.filter(item => {
    const matchesSearch = item.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.vendor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'All' || item.status === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Received': return 'bg-green-100 text-green-800';
      case 'Delayed': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sidebarItems = [
    { name: 'Filters', isExpanded: true },
    { name: 'Pending', count: null, isFilter: true },
    { name: 'Received', count: null, isFilter: true },
    { name: 'Delayed', count: null, isFilter: true },
    { name: 'Vendor', isDropdown: true },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 shadow-sm">
        <div className="space-y-4">
          {sidebarItems.map((item, index) => (
            <div key={index} className="space-y-2">
              {item.name === 'Filters' ? (
                <h3 className="font-medium text-gray-900 text-sm">{item.name} ▼</h3>
              ) : item.isFilter ? (
                <div className="flex items-center space-x-2 ml-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedFilter(item.name);
                      } else {
                        setSelectedFilter('All');
                      }
                    }}
                  />
                  <label className="text-sm text-gray-700">{item.name}</label>
                </div>
              ) : item.isDropdown ? (
                <div className="ml-2">
                  <select className="w-full text-sm border border-gray-300 rounded px-2 py-1">
                    <option>{item.name}</option>
                  </select>
                </div>
              ) : null}
            </div>
          ))}

          <div className="pt-6">
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-green-700">
              Export Inventory
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Inventory</h1>
          <button className="bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700">
            Upload Packing Slip
          </button>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <svg className="absolute left-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Inventory Table */}
          <div className="flex-1">
            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Shipment ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Vendor
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Received Quantity
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Update
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredData.map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => setShowDetails(item)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {item.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.vendor}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(item.status)}`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.receivedQuantity || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item.lastUpdate}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80">
            <div className="space-y-6">
              {/* Shipments Section */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Shipments</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span className="text-sm text-gray-700">Tag #1</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    <span className="text-sm text-gray-700">Tag #2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-600 rounded-full"></span>
                    <span className="text-sm text-gray-700">Tag #4</span>
                  </div>
                </div>
              </div>

              {/* Change History */}
              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-4">Change History</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <div>• Inventory updated by Jane Doe on 01/01/2024</div>
                  <div>• Inventory updated by John Doe on 01/01/2024</div>
                  <div>• Inventory updated by Tom Doe on 01/01/2024</div>
                </div>
                <button className="mt-4 w-full bg-gray-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-gray-700">
                  Edit Item
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Details Modal */}
        {showDetails && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-96 overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Inventory Detail</h2>
                  <button
                    onClick={() => setShowDetails(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Item Name</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" value="Product Name" readOnly />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Product Code</label>
                      <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md" value={showDetails.id} readOnly />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(showDetails.status)}`}>
                          {showDetails.status}
                        </span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                        <span className="text-sm text-gray-900">Medium</span>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Received Quantity</label>
                        <span className="text-sm text-gray-900">{showDetails.receivedQuantity || 'N/A'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Item Image</label>
                      <div className="w-full h-32 bg-gray-100 rounded-md flex items-center justify-center">
                        <span className="text-gray-500">No image</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md" rows="3" placeholder="Notes (optional)" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
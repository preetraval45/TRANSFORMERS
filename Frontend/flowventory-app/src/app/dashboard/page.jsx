'use client';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();
  const [vendorName, setVendorName] = useState('');
  const [projectCode, setProjectCode] = useState('');
  const [notes, setNotes] = useState('');

  const dashboardData = {
    totalItems: 4763,
    itemsReceived: 34,
    pendingShipments: 12,
    flaggedIssues: 1
  };

  const recentActivity = [
    { action: 'Packing slip uploaded by Yana Batsek', time: '2 hours ago' },
    { action: 'Shipment from Vendor X marked as received', time: '4 hours ago' }
  ];

  const sidebarItems = [
    { name: 'Filters', isExpanded: true },
    { name: 'Pending', count: null, isFilter: true },
    { name: 'Received', count: null, isFilter: true },
    { name: 'Delayed', count: null, isFilter: true },
    { name: 'Vendor', isDropdown: true },
    { name: 'Urgency', isDropdown: true }
  ];

  const handleUpload = () => {
    alert('File upload functionality would be implemented here');
  };

  const handleAddInventory = () => {
    alert('Add inventory functionality would be implemented here');
  };

  const handleSearchHistoric = () => {
    alert('Search historic records functionality would be implemented here');
  };

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
                  <input type="checkbox" className="rounded border-gray-300" />
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

          <div className="pt-6 space-y-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700">
              View Orders
            </button>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-green-700">
              Upload Packing Slip
            </button>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-red-700">
              Manage Users
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Stats Cards */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-blue-600">{dashboardData.totalItems}</div>
                <div className="text-sm text-gray-600 mt-1">Total Items</div>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-green-600">{dashboardData.itemsReceived}</div>
                <div className="text-sm text-gray-600 mt-1">Items Received This Week</div>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-orange-600">{dashboardData.pendingShipments}</div>
                <div className="text-sm text-gray-600 mt-1">Pending Shipments</div>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center">
                  <span className="text-3xl font-bold text-red-600">{dashboardData.flaggedIssues}</span>
                  <span className="ml-2 text-red-600">⚠</span>
                </div>
                <div className="text-sm text-gray-600 mt-1">Flagged Issues</div>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex justify-between items-start">
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 space-y-3">
              <button
                onClick={handleUpload}
                className="w-full bg-green-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-green-700"
              >
                Upload Packing Slip
              </button>
              <button
                onClick={handleAddInventory}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-blue-700"
              >
                Add Inventory Item
              </button>
              <button
                onClick={handleSearchHistoric}
                className="w-full bg-gray-600 text-white py-2 px-4 rounded text-sm font-medium hover:bg-gray-700"
              >
                Search Historic Records
              </button>
            </div>
          </div>

          {/* Upload Packing Slip Form */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Upload Packing Slip</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Vendor Name
                </label>
                <input
                  type="text"
                  value={vendorName}
                  onChange={(e) => setVendorName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter vendor name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Code
                </label>
                <input
                  type="text"
                  value={projectCode}
                  onChange={(e) => setProjectCode(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter project code"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Attach File
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <div className="text-gray-500">
                    <svg className="mx-auto h-12 w-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <p className="text-sm">Drop files here or click to upload</p>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Add any additional notes"
                />
              </div>

              <button className="w-full bg-gray-800 text-white py-2 px-4 rounded text-sm font-medium hover:bg-gray-900">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
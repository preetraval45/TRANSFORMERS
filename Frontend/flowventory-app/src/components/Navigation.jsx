'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

export default function Navigation() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', roles: ['admin', 'engineer', 'client'] },
    { name: 'Inventory', path: '/inventory', roles: ['admin', 'engineer'] },
    { name: 'Shipments', path: '/shipments', roles: ['admin', 'engineer'] },
    { name: 'Uploads', path: '/uploads', roles: ['admin', 'engineer'] },
    { name: 'Admin', path: '/admin', roles: ['admin'] }
  ];

  const filteredNavItems = navItems.filter(item =>
    item.roles.includes(user?.role)
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 px-6 py-4 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <Link href="/dashboard" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
              <span className="text-xl text-white font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Flowventory</span>
          </Link>
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex space-x-1">
            {filteredNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === item.path
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-105'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700 hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <div className="flex items-center space-x-3 pl-4 border-l border-gray-200">
              <div className="relative">
                <div className="w-9 h-9 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center ring-2 ring-blue-100">
                  <span className="text-white text-sm font-semibold">
                    {user?.firstName?.[0]?.toUpperCase()}
                  </span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              <div className="text-sm">
                <div className="font-semibold text-gray-900">{user?.firstName}</div>
                <div className="text-gray-500 capitalize text-xs">{user?.role}</div>
              </div>

              <button
                onClick={handleLogout}
                className="ml-2 p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                title="Sign out"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
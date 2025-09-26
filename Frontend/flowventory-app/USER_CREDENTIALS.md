# Flowventory User Credentials

## Login Access

Use these credentials to test the Flowventory application:

Admin Users (Full Access)
- **Username**: `Preet`
  **Password**: `P@ss123!`
  **Role**: Admin
  **Access**: Dashboard, Inventory, Shipments, Uploads, Admin Panel

- **Username**: `Carlotta`
  **Password**: `C@rl456@`
  **Role**: Admin
  **Access**: Dashboard, Inventory, Shipments, Uploads, Admin Panel

- **Username**: `Yana`
  **Password**: `Y@na789#`
  **Role**: Admin
  **Access**: Dashboard, Inventory, Shipments, Uploads, Admin Panel

#Engineer User
- **Username**: `Dany`
  **Password**: `D@ny012$`
  **Role**: Engineer
  **Access**: Dashboard, Inventory, Shipments, Uploads (No Admin Panel)

Client User
- **Username**: `Jack`
  **Password**: `J@ck345%`
  **Role**: Client
  **Access**: Dashboard only (Limited access)

## Navigation Guide

1. **Login Page**: Enter username and password to access the system
2. **Dashboard**: Overview with statistics and quick actions
3. **Inventory**: Manage inventory items with filtering and search
4. **Shipments**: Upload packing slips and track shipments
5. **Uploads**: Redirects to Shipments page
6. **Admin**: User management (Admin users only)

## Features to Test

Login Page
- ✅ Login with any of the above credentials
- ✅ Password reset functionality (shows demo message)
- ✅ Error handling for invalid credentials

Dashboard
- ✅ Statistics cards (Total Items, Items Received, Pending Shipments, Flagged Issues)
- ✅ Recent Activity feed
- ✅ Upload Packing Slip form
- ✅ Sidebar with filters and action buttons

Inventory
- ✅ Searchable inventory table
- ✅ Status filtering (Pending, Received, Delayed)
- ✅ Item details modal (click on any row)
- ✅ Change history sidebar
- ✅ Export functionality

Shipments
- ✅ Drag & drop file upload
- ✅ File upload indication
- ✅ Shipment tracking table
- ✅ Upload history sidebar

Admin Panel (Admin Only)
- ✅ User management table (shows admin users only)
- ✅ Add new user functionality
- ✅ Auto-generated passwords
- ✅ Audit logs
- ✅ System settings

Navigation
- ✅ Role-based navigation (different menus for different roles)
- ✅ User profile display in header
- ✅ Logout functionality
- ✅ Active page highlighting

## Access Control

- **Clients**: Can only access Dashboard
- **Engineers**: Can access Dashboard, Inventory, Shipments, Uploads
- **Admins**: Can access all pages including Admin panel

Color Scheme
- **Primary**: Blue (#2563eb)
- **Success**: Green (#16a34a)
- **Warning**: Red (#dc2626)
- **Background**: White (#ffffff)

## Start the Application

```bash
cd Frontend/flowventory-app
npm run dev
```

Then visit: `http://localhost:3000`
# TRANSFORMERS

**Project:** ITIS 3300 - Software Requirement, Analysis and Testing

## 📋 Project Overview

Inventory & Shipment Management Portal - A shared platform for vendors and engineering teams to track incoming shipments, packing slips, and inventory status in real time.

## 👥 Team Members

- **Jack Helmer** - Programming (SQL, Java, Python), Scripting, Backend, Documentation
- **Dany Babikerali** - Programming (Python, Java, SQL, TS/JS), Frontend, Backend, Database Implementation
- **Preet Raval** - Full-Stack Development, AI/ML, Cybersecurity, Cloud Architecture, DevOps
- **Carlota Najera Alvarez** - UI/UX Design, Technical Documentation, Java, JavaScript, SQL, HTML
- **Yana Batsuk** - Full-Stack Development, System Administration, Database Management

## 🏗️ Project Structure

TRANSFORMERS/
├── Backend/           # Python & FastAPI backend services
├── Database/          # Database schemas and configurations
├── Docker/            # Docker containerization files
├── Documentation/     # Project documentation and meeting minutes
│   └── Minutes/       # Meeting notes and project planning
├── Frontend/          # Frontend application (Next.js)
│   ├── flowventory-app/  # Main Next.js application
│   │   ├── src/         # Source code
│   │   │   ├── app/     # App router pages
│   │   │   ├── components/  # React components
│   │   │   ├── contexts/    # React contexts
│   │   │   └── data/        # Mock data and configurations
│   │   ├── Dockerfile       # Docker configuration
│   │   ├── docker-compose.yml  # Docker Compose setup
│   │   └── nginx.conf       # Nginx configuration
│   ├── UI/            # Design mockups and wireframes
│   └── README.md      # Frontend documentation
├── GROUP-INFO.md      # Detailed team member information
└── README.md         # Project overview and documentation

## 🎯 Core Deliverables

### Security & Access

- Password-protected links for external vendors
- Audit logs for every upload, edit, and access event
- Role-based access (client, engineer, manager)

### Client Side Features

- **Order Submission Portal**: Upload order details, packing slips, and expected delivery dates
- Auto-generate tracking links with secure password access

### Engineering Team Features

- **Pack Slip Repository**: Centralized access to all packing slips with search and tagging
- **Incoming Inventory Tracker**: Track what's arriving, when, and from whom
- Filter by project, vendor, or urgency

## 🚀 Stretch Goals

- Shipment Status Dashboard with delivery progress tracking
- Low-Stock & Reorder Alerts system
- Barcode Scanning & Tagging functionality
- Real-time notifications and alerts

## 🛠️ Technology Stack

- **Frontend**: Next.js 15.5.4, React 19, Tailwind CSS, JavaScript (JSX)
- **Backend**: Python & FastAPI (planned)
- **Database**: PostgreSQL (planned)
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (production proxy)
- **Authentication**: Context-based with role management
- **CDN/Security**: Cloudflare (planned)

## 🚀 Quick Start

### Frontend Application

1. Navigate to the frontend directory:
   ```bash
   cd Frontend/flowventory-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser

### Using Docker

```bash
cd Frontend/flowventory-app
docker-compose up -d
```

Access the application at `http://localhost`

### Test Accounts

- **Admin**: `Preet` / `P@ss123!`
- **Engineer**: `Dany` / `D@ny012$`
- **Client**: `Jack` / `J@ck345%`

## 📄 Documentation

- **Frontend Documentation**: See `Frontend/README.md` for detailed setup and usage
- **Meeting Minutes**: Available in `/Documentation/Minutes/`
- **Team Information**: Detailed skills and expertise in `GROUP-INFO.md`

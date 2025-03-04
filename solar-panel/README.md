Solar Panel Evaluation Platform
A comprehensive web application for managing solar panel evaluations and installations in Los Angeles, built with Next.js 14.

Features
Public User Features
Solar Evaluation Request System

Multi-step evaluation form
Real-time form validation
Automated request ID generation
Progress tracking system
Property Assessment

Location eligibility checking
Property type compatibility
Roof condition assessment
Shading analysis requirements
Scheduling System

Flexible appointment scheduling
Time slot selection
Automated confirmation emails
Request status tracking
Admin Features
Dashboard Analytics

Real-time evaluation metrics
Request status overview
Conversion rate tracking
Performance statistics
Evaluation Management

Detailed request viewing
Status updates
Note-taking system
Customer communication tools
Property Assessment Tools

Location verification
Document management
Requirements checklist
Assessment reports
Technology Stack
Frontend: Next.js 14 with TypeScript
UI Components: Custom components with Radix UI
Styling: Tailwind CSS with custom configurations
State Management: Zustand
Form Handling: React Hook Form with Zod validation
Database: Supabase
Authentication: Supabase Auth
API Integration: Axios & React Query
Getting Started
Clone the repository:
git clone https://github.com/yourusername/solar-panel-platform.git
Install dependencies:
npm install
Set up environment variables:
cp .env.example .env.local
Run the development server:
npm run dev
Open http://localhost:3000 to view the application.

Project Structure
src/
├── app/
│   ├── admin/         # Admin dashboard and management
│   ├── public/        # Public-facing pages
│   └── api/          # API routes
├── components/
│   ├── ui/           # Reusable UI components
│   └── features/     # Feature-specific components
├── stores/           # State management
└── types/           # TypeScript definitions
Development Commands
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format:all   # Format code with Prettier
Contributing
Fork the repository
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
License
This project is licensed under the MIT License - see the LICENSE.md file for details.

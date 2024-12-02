project-root/
├── src/                                 # Contains all source code (app, utils, components)
│   ├── app/                             # App folder - Next.js 13+ feature (for routing and layouts)
│   │   ├── layout.tsx                   # Global layout (header, footer, etc.)
│   │   ├── page.tsx                     # Default home page (e.g., landing page)
│   │   ├── user/                        # User-specific routes and layouts
│   │   │   ├── login/                   # User login page
│   │   │   │   └── page.tsx             # Login page (e.g., /user/login)
│   │   │   ├── register/                # User registration page
│   │   │   │   └── page.tsx             # Register page (e.g., /user/register)
│   │   │   └── dashboard/               # User dashboard pages
│   │   │       ├── requests/            # User requests page
│   │   │       │   └── page.tsx         # User requests page (e.g., /user/dashboard/requests)
│   │   │       └── track/               # User track page
│   │   │           └── page.tsx         # User track page (e.g., /user/dashboard/track)
│   │   ├── admin/                       # Admin-specific routes and layouts
│   │   │   ├── login/                   # Admin login page
│   │   │   │   └── page.tsx             # Admin login page (e.g., /admin/login)
│   │   │   ├── register/                # Admin registration page
│   │   │   │   └── page.tsx             # Admin register page (e.g., /admin/register)
│   │   │   └── dashboard/               # Admin dashboard pages
│   │   │       ├── requests/            # Admin requests page
│   │   │       │   └── page.tsx         # Admin requests page (e.g., /admin/dashboard/requests)
│   │   │       └── track/               # Admin track page
│   │   │           └── page.tsx         # Admin track page (e.g., /admin/dashboard/track)
│   │   ├── request/                     # Pages for creating and managing requests
│   │   │   ├── create/                  # Create request page
│   │   │   │   └── page.tsx             # Create request page (e.g., /request/create)
│   │   │   └── manage/                  # Manage requests page
│   │   │       └── page.tsx             # Manage requests page (e.g., /request/manage)
│   │   ├── api/                         # Backend API routes (for server-side functionality)
│   │   │   ├── auth/                    # Authentication-related routes
│   │   │   │   ├── admin/               # Admin-specific authentication routes
│   │   │   │   │   ├── login/           # Admin login route
│   │   │   │   │   │   └── route.ts     # (e.g., POST /api/auth/admin/login)
│   │   │   │   │   ├── register/        # Admin register route
│   │   │   │   │   │   └── route.ts     # (e.g., POST /api/auth/admin/register)
│   │   │   │   ├── user/                # User-specific authentication routes
│   │   │   │   │   ├── login/           # User login route
│   │   │   │   │   │   └── route.ts     # (e.g., POST /api/auth/user/login)
│   │   │   │   │   ├── register/        # User register route
│   │   │   │   │   │   └── route.ts     # (e.g., POST /api/auth/user/register)
│   │   │   ├── users/                   # User-specific API routes
│   │   │   │   ├── [userId]/            # Get user by ID (e.g., GET /api/users/:id)
│   │   │   │   │   └── route.ts         # User details route
│   │   │   │   └── route.ts             # Get list of users (e.g., GET /api/users)
│   │   │   ├── admins/                  # Admin-specific API routes
│   │   │   │   ├── [adminId]/           # Get admin by ID (e.g., GET /api/admins/:id)
│   │   │   │   │   └── route.ts         # Admin details route
│   │   │   │   └── route.ts             # Get list of admins (e.g., GET /api/admins)
│   │   │   └── otherApi/                # Other API routes
│   │   │       └── route.ts             # Example of another endpoint (e.g., /api/otherApi/someEndpoint)
│   ├── components/                      # Reusable frontend components
│   │   ├── header.tsx                   # Header component
│   │   ├── sidebar.tsx                  # Sidebar component for user/admin dashboard
│   │   └── footer.tsx                   # Footer component
│   ├── styles/                          # Global styles and Tailwind config
│   │   ├── globals.css                  # Global styles (e.g., reset, body styles)
│   │   └── tailwind.config.ts           # Tailwind configuration
│   └── utils/                           # Utilities and helper functions
│       ├── db.ts                        # Database connection logic
│       ├── zodSchemas.ts                # Zod validation schemas
│       └── auth.ts                      # Authentication helpers (e.g., JWT validation)
├── public/                             # Static assets like images, icons, etc.
│   └── images/                          # Store your images here
├── .env                                 # Environment variables (e.g., database connection string)
├── next.config.js                       # Next.js configuration (e.g., API routes)
├── package.json                         # Project dependencies and scripts
└── README.md                            # Project overview and setup instructions
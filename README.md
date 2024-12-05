# 🎨 LUT Library

> Your personal Color LUT management system

This project helps you organize and manage your color Look-Up Tables (LUTs) with style and efficiency.

## 🚀 Quick Start

Fire up the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your LUT library in action!

## ✨ Features

- 📁 Organize your LUTs in collections
- 🔍 Preview LUTs on sample images
- 🔄 Import/Export functionality
- 🎯 Quick search and filtering
- 🔐 Secure authentication
- 💾 Cloud storage with MongoDB

## 🛠️ Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- MongoDB
- NextAuth.js
- TailwindCSS
- Shadcn/ui Components

## 📦 Project Structure

```
src/
├── app/                # Next.js App Router directory
│   ├── api/           # API routes
│   │   ├── auth/      # Authentication endpoints
│   │   └── luts/      # LUT management endpoints
│   ├── auth/          # Authentication pages
│   └── docs/          # Documentation pages
├── components/        # Reusable UI components
├── lib/              # Core utilities and configurations
├── utils/            # Helper functions
└── assets/           # Static assets
```

## 🔧 Setup & Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure environment variables:

   - Copy `.env.example` to `.env.local`
   - Required variables:
     - `MONGODB_URI`: Your MongoDB connection string
     - `NEXTAUTH_SECRET`: JWT secret for authentication
     - `NEXTAUTH_URL`: Your application URL

4. Run the development server:
   ```bash
   npm run dev
   ```

## 🔐 Authentication

The project uses NextAuth.js for authentication with the following features:

- Secure session management
- JWT-based authentication
- Protected API routes
- Role-based access control

## 📡 API Routes

### Authentication

- `POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoints

### LUT Management

- `GET /api/luts` - Retrieve LUT collection
- `POST /api/luts` - Upload new LUT
- `PUT /api/luts/:id` - Update LUT metadata
- `DELETE /api/luts/:id` - Remove LUT

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details on how to:

- Submit bug reports
- Request features
- Submit pull requests
- Follow our code style guidelines

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
       +------------+
      /            /|
     /            / |
    /            /  |
   +------------+   |
   |            |   +
   |            |  /
   |    LUT     | /
   |    CUBE    |/
   +------------+

     Thanks for checking out our LUT Library!
   Where colors come to life, one table at a time.
```

> 💡 Fun fact: This ASCII art represents a 3D LUT cube, which is how 3D LUTs store
> their color transformation data. Each point in the cube represents how one color
> should be mapped to another!

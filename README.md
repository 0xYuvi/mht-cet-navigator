# MHT CET Navigator Backend

This is the backend server for the MHT CET Navigator application, built with Node.js, Express, and TypeScript.

## Features

- User authentication (register, login)
- JWT-based authentication
- MongoDB database integration
- RESTful API endpoints
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
cd mht-cet-navigator-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```env
PORT=5001
MONGODB_URI=mongodb://localhost:27017/mht-cet-navigator
JWT_SECRET=your-secret-key
NODE_ENV=development
```

4. Start the development server:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user
- `GET /api/users/profile` - Get user profile (protected route)

## Development

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build the project
- `npm start` - Start production server

## Project Structure

```
src/
├── controllers/    # Route controllers
├── models/         # Database models
├── middleware/     # Custom middleware
├── routes/         # API routes
└── index.ts        # Application entry point
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. 
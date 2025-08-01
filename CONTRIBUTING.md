# Contributing to Helmets and Gears

Thank you for your interest in contributing to the Helmets and Gears project! This document provides guidelines for contributing to this semester 3 project.

## Development Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. Fork the repository
2. Clone your fork:
```bash
git clone https://github.com/your-username/Helmets-and-Gears-Sem3-Website.git
```

3. Install dependencies:
```bash
npm install
cd frontend && npm install
cd ../backend && npm install
```

4. Start development servers:
```bash
# Terminal 1 - Frontend
cd frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm start
```

## Code Style Guidelines

### JavaScript/React
- Use ES6+ features
- Follow React best practices
- Use functional components with hooks
- Implement proper error handling

### CSS
- Use responsive design principles
- Follow BEM naming convention
- Ensure cross-browser compatibility

### Backend
- Follow RESTful API conventions
- Implement proper error handling
- Use middleware for common functionality
- Validate all inputs

## Commit Message Format

Use clear and descriptive commit messages:
```
type(scope): description

Examples:
feat(auth): add user login functionality
fix(cart): resolve item quantity update issue
docs(readme): update installation instructions
style(header): improve navigation styling
```

## Pull Request Process

1. Create a feature branch from main
2. Make your changes
3. Test your changes thoroughly
4. Update documentation if needed
5. Submit a pull request with a clear description

## Testing

- Test all new features thoroughly
- Ensure responsive design works on different screen sizes
- Verify cross-browser compatibility
- Test API endpoints with different inputs

## Questions?

For any questions about contributing, please reach out to the development team or create an issue in the repository.

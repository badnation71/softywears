# Contributing to StepStyle

Thank you for your interest in contributing to StepStyle! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Welcome all skill levels
- Focus on the code, not the person
- Help each other succeed

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/softywears.git`
3. Add upstream remote: `git remote add upstream https://github.com/badnation71/softywears.git`
4. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Setup

See README.md for detailed setup instructions.

## Making Changes

### Branch Naming
- Feature: `feature/description`
- Bug fix: `bugfix/description`
- Hotfix: `hotfix/description`
- Documentation: `docs/description`

### Commit Messages
Follow conventional commits:
```
type(scope): description

[optional body]
[optional footer]
```

Types: feat, fix, docs, style, refactor, test, chore

Example:
```
feat(payment): add M-Pesa STK Push integration

Implement M-Pesa payment initiation with proper error handling
and callback verification.

Closes #123
```

## Code Standards

### Frontend
- Use TypeScript for type safety
- Follow React best practices
- Use functional components with hooks
- Organize components by feature
- Use Tailwind CSS for styling
- Follow ESLint and Prettier rules

### Backend
- Use TypeScript throughout
- Follow Express.js best practices
- Validate all inputs
- Use services for business logic
- Document complex functions with JSDoc
- Write meaningful error messages

### General
- Write self-documenting code
- Add comments for "why", not "what"
- Keep functions small and focused
- Use meaningful variable names
- Avoid code duplication

## Testing

### Frontend Tests
```bash
cd frontend
npm run test
```

### Backend Tests
```bash
cd backend
npm run test
```

### Coverage Requirements
- Minimum 70% code coverage
- All public APIs must have tests
- All critical paths must be tested

## Pull Request Process

1. Update documentation (README, comments, etc.)
2. Add tests for new functionality
3. Ensure all tests pass
4. Run linting and formatting
5. Push to your fork
6. Create a Pull Request with:
   - Clear title describing the change
   - Description of what changed and why
   - Reference to related issues
   - Screenshot/video for UI changes
   - Checklist of requirements completed

### PR Checklist
- [ ] My code follows the code standards
- [ ] I have updated documentation
- [ ] I have added/updated tests
- [ ] All tests pass locally
- [ ] No new warnings from linter
- [ ] I have reviewed my own changes

## Review Process

- At least one approval required
- Automated tests must pass
- No merge conflicts
- Follow-up commits should be squashed
- Maintainers reserve the right to request changes

## Reporting Issues

Before creating an issue:
1. Search existing issues
2. Check documentation
3. Try the latest version

When reporting:
1. Use clear, descriptive title
2. Describe expected vs actual behavior
3. Include steps to reproduce
4. Add environment details (OS, Node version, etc.)
5. Attach relevant logs/screenshots

## Feature Requests

1. Check if similar feature exists
2. Describe the use case and benefits
3. Propose implementation approach (optional)
4. Be open to discussion and refinement

## Documentation

Help us improve documentation by:
- Fixing typos
- Adding examples
- Clarifying confusing sections
- Adding API documentation
- Creating tutorials

## Project Structure Rules

### Do not change without discussion:
- Project structure
- Architecture patterns
- Database schema
- API response format
- Authentication mechanism

### Okay to change:
- Component implementations
- Styling
- Performance optimizations
- Dependencies (with justification)

## Areas for Contribution

### Good for beginners
- Documentation improvements
- Bug fixes with clear reproduction steps
- UI/UX improvements
- Performance optimizations
- Adding missing tests

### Intermediate
- New product features
- Payment gateway improvements
- Admin dashboard features
- API endpoint additions

### Advanced
- Architecture changes
- Database optimizations
- Deployment improvements
- Infrastructure setup

## Community

- GitHub Discussions for questions
- Issues for bugs and features
- Slack/Discord for real-time chat (if available)
- Email support@stepstyle.com

## Recognition

Contributors will be:
- Added to CONTRIBUTORS.md
- Mentioned in releases
- Recognized in community channels

## Legal

By contributing, you agree that your contributions will be licensed under the same license as the project (MIT).

---

Questions? Open an issue or reach out to the team!

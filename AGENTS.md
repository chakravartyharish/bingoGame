# AGENTS.md Repository Guidelines

<general_rules>
- **Search Before Creating**: When implementing new game features (e.g., bingo card generation, number calling, win detection), always search existing code to see if similar functionality exists before creating new functions
- **Modular Design**: Structure bingo game components into logical modules (game logic, UI components, data models, utilities)
- **Naming Conventions**: Use descriptive names that clearly indicate purpose (e.g., `generateBingoCard()`, `checkWinCondition()`, `callNextNumber()`)
- **Game State Management**: Ensure all game state changes are handled consistently and maintain data integrity
- **Input Validation**: Always validate user inputs and game data to prevent invalid game states
- **Error Handling**: Implement proper error handling for game operations and user interactions
- **Documentation**: Document game rules, API endpoints, and complex algorithms inline
- **Code Reusability**: Create reusable components for common bingo game elements (cards, number displays, win patterns)
</general_rules>

<repository_structure>
Currently, this is a minimal repository containing only a README.md file. As the bingo game project develops, the following structure is recommended:

- **Root Directory**: Contains configuration files, README, and this AGENTS.md file
- **src/ or lib/**: Main application source code including game logic, UI components, and utilities
- **assets/**: Static assets like images, sounds, and styling resources
- **tests/**: Unit tests, integration tests, and test utilities
- **docs/**: Additional documentation beyond README
- **config/**: Configuration files for different environments
- **scripts/**: Build, deployment, and utility scripts

The repository will grow to support a complete bingo game implementation with proper separation of concerns between game logic, user interface, and data management.
</repository_structure>

<dependencies_and_installation>
Currently, no dependencies are defined as this is a minimal repository. Future development should follow these guidelines:

- **Package Management**: Use appropriate package managers (npm for JavaScript/Node.js, pip for Python, etc.)
- **Dependency Installation**: Document all required dependencies in standard manifest files (package.json, requirements.txt, etc.)
- **Environment Setup**: Provide clear instructions for setting up development environment
- **Version Pinning**: Pin dependency versions to ensure consistent builds across environments
- **Development vs Production**: Separate development dependencies from production requirements
- **Installation Steps**: Keep installation process simple with minimal manual steps
- **System Requirements**: Document any system-level requirements or prerequisites

For future development, expect to install dependencies using standard commands like `npm install`, `pip install -r requirements.txt`, or equivalent for the chosen technology stack.
</dependencies_and_installation>

<testing_instructions>
No testing framework is currently implemented. When implementing tests for the bingo game, follow these guidelines:

- **Testing Framework**: Choose appropriate testing framework for the selected technology (Jest for JavaScript, pytest for Python, etc.)
- **Test Categories**: 
  - Unit tests for individual game functions (number generation, win detection, card validation)
  - Integration tests for game flow and state management
  - End-to-end tests for complete game scenarios
- **Test Coverage**: Focus testing on core game logic, win condition checking, and user input validation
- **Game Scenarios**: Test various bingo game scenarios including edge cases (full cards, multiple winners, invalid inputs)
- **Test Data**: Create reusable test data sets for different game states and configurations
- **Running Tests**: Implement simple test running commands (e.g., `npm test`, `python -m pytest`)
- **Continuous Testing**: Consider implementing automated testing in CI/CD pipeline

Tests should validate game rules accuracy, ensure proper state management, and verify user interaction handling.
</testing_instructions>

<pull_request_formatting>
</pull_request_formatting>
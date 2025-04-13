# Todo App

## Overview

The Todo App is a simple and intuitive application designed to help users manage their tasks efficiently. It allows users to add, delete, and mark tasks as completed, providing a clear and organized view of their to-do list.

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Delete Tasks**: Users can remove tasks that are no longer needed.
- **Mark as Completed**: Users can mark tasks as completed, which visually distinguishes them from pending tasks.
- **Task Sorting**: Completed tasks are automatically sorted to appear below pending tasks.

### Detailed Feature Descriptions

- **Interactive Task Management**: 
  - Each task is represented by a `TodoItem` component, which provides interactive features such as marking tasks as completed and deleting tasks.
  - Clicking on a task name toggles its completion status, visually indicated by a line-through style.
  - A delete button is available for each task, allowing users to remove tasks with a single click.

- **Dynamic Styling**:
  - The `TodoItem` component uses CSS modules for styling, ensuring that styles are scoped and do not interfere with other components.
  - Completed tasks are styled differently to provide a clear visual distinction from pending tasks.

## Project Structure

- **Components**:
  - `TodoList.jsx`: The main component that renders the list of tasks. It sorts tasks based on their completion status and uses the `TodoItem` component to display each task.
  - `TodoItem.jsx`: A component that represents an individual task. It includes functionality to mark tasks as completed or delete them.
  
- **Styles**:
  - `todolist.module.css`: Contains styles for the `TodoList` component, ensuring a clean and modern UI.

## Usage

1. **Installation**: Clone the repository and navigate to the project directory.
2. **Dependencies**: Install the necessary dependencies using a package manager like npm or yarn.
   ```bash
   npm install
   ```
3. **Running the App**: Start the development server to view the app in your browser.
   ```bash
   npm start
   ```
4. **Interacting with the App**: Use the UI to add, delete, and manage tasks. Click on a task to mark it as completed.

## Technologies Used

- **React**: For building the user interface.
- **CSS Modules**: For styling components with scoped CSS.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is open-source and available under the MIT License.
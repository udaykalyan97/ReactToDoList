# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# To-Do List Application

A simple and responsive To-Do List application built with React, designed to help you manage tasks efficiently. This project demonstrates core React concepts such as state management, component composition, and user interactivity.

## Features

- **Add Tasks**: Add new tasks with unique identifiers.
- **Edit Tasks**: Modify existing tasks directly from the list.
- **Delete Tasks**: Remove tasks from the list with a single click.
- **Toggle Completion**: Mark tasks as completed or incomplete.
- **Reorder Tasks**: Move tasks up or down the list to prioritize them.
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices.

## Technologies Used

- **Frontend**: React (with React Vite for faster development)
- **Styling**: CSS (including responsive design with media queries)
- **State Management**: React's useState hook

## Components Overview

### 1. `App.jsx`
The root component that renders the `ToDoList` component.

### 2. `ToDoList.jsx`
The main component that handles the logic and state for managing the list of tasks. Features include:
- Adding new tasks
- Editing existing tasks
- Deleting tasks
- Reordering tasks
- Toggling task completion

### 3. `ToDoItem.jsx`
A single task component that displays task details and provides controls for editing, deleting, and reordering.

### 4. `Header.jsx`
A simple header component to display the application title.

## CSS Styling
Custom CSS styles are included in `index.css`, featuring:
- Hover effects for buttons
- Adaptive design for various screen sizes
- A clean and visually appealing color palette

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/udaykalyan97/ReactToDoList.git

2. Navigate to the project directory:
    ```bash
    cd todo-list-app

3. Install dependencies:
    ```bash
    npm install

4. Start the development server:
    ```bash
    npm run dev

5. Open your browser and visit:
    http://localhost:5173

# Project File Structure:

src/
│
├── components/
│   ├── Header.jsx
│   ├── ToDoItem.jsx
│   └── ToDoList.jsx
│
├── utils/
│   └── toDoMockData.js  # Sample data for initial tasks
│
├── App.jsx              # Root component
├── index.css            # Global styles
├── main.jsx             # Entry point
└── index.html           # HTML template

    
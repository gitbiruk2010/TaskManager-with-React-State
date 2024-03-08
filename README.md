# TaskManager-with-React-State

![image](https://github.com/gitbiruk2010/TaskManager-with-React-State/assets/103274295/b071c79e-f802-4563-ac8f-31a1ac649096)

This is a lightweight task manager application built using React. It allows users to add, edit, delete, and mark tasks as completed.

## Getting Started

Follow these steps to set up and run the Task Manager application:

1. **Clone the Repository:**
   Clone the repository to your local machine using the following command:

   git clone https://github.com/gitbiruk2010/TaskManager-with-React-State
   
Install Dependencies:
Navigate to the project directory and install the necessary dependencies using npm or yarn:

npm install / yarn install

Run the Application:
Start the React development server to run the Task Manager application:

npm start / yarn start

    Access the Application:
    Once the development server is running, you can access the Task Manager application in your web browser at http://localhost:3000.

Features

    Add Task:
        Enter a title and description for the task.
        Click on the "Add Task" button to add the task to the list.

    Edit Task:
        Click on the "Edit Task" button next to a task to edit its title and description.
        Update the title and description in the input fields.
        Click on the "Save" button to save the changes.

    Toggle Task Completion:
        Click on the "Toggle Completion" button next to a task to mark it as completed or incomplete.

    Delete Task:
        Click on the "Delete Task" button next to a task to delete it from the list.

Implementation Details

    The Task Manager application uses React functional components and hooks such as useState to manage state.
    Tasks are stored as objects in an array, with each task having properties such as id, title, description, and completed.
    Task operations such as adding, editing, toggling completion, and deleting are implemented using state update functions.
    Immutable state updates are ensured by creating new arrays or objects instead of directly modifying the existing state.

Technologies Used

    React
    HTML/CSS

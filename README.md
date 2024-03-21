---
title: ExamFoundry
date: '2024-03-20'
githubUsername: 'divyesh942'
---

# Exam Foundry - React and Spring Boot Project

## Overview

Welcome to Exam Foundry! This project is a combination of React for the frontend and Spring Boot for the backend, designed to facilitate online exams with multiple-choice questions (MCQs). This README file will guide you through setting up and understanding the project structure, functionalities, and how to use it effectively.

## Project Structure

- **frontend:** Contains all the React frontend code.
- **backend:** Consists of the Spring Boot backend code.
- **database:** Stores the necessary database files or scripts for setting up the database.

## Setup Instructions

1. **Clone the Repository:**

    ```bash
    git clone https://github.com/yourusername/exam-foundry.git
    cd exam-foundry
    ```

2. **Frontend Setup:**

    ```bash
    cd frontend
    npm install
    ```

3. **Backend Setup:**

    ```bash
    cd ../backend
    # Make sure you have Maven installed
    mvn spring-boot:run
    ```

4. **Database Setup:**

    - Follow the instructions in the `database` folder to set up your database environment.

5. **Running the Application:**

    - After setting up the frontend, backend, and database, you can run the application by starting both the frontend and backend servers.
    - Start the frontend:

        ```bash
        cd ../frontend
        npm start
        ```

    - Start the backend (if not already running):

        ```bash
        cd ../backend
        mvn spring-boot:run
        ```

6. **Accessing the Application:**

    - Once the servers are up and running, access the application by navigating to `http://localhost:3000` in your web browser.

## Features

1. **Admin Dashboard:**

    - Create and manage exams.
    - Add, edit, or delete multiple-choice questions.
    - View exam results and scores.

2. **User Interface:**

    - Users can browse available exams.
    - Take exams and submit answers.
    - View scores and results after completing exams.

## Contributing

- We welcome contributions from the community. If you'd like to contribute to this project, please fork the repository, make your changes, and submit a pull request.

## Troubleshooting

- If you encounter any issues during setup or usage, please refer to the troubleshooting section in the README files of the frontend and backend directories.
- You can also open an issue on GitHub for further assistance.


# Task Planner

## Overview
Task Planner is a web-based task management application built with FastAPI for the backend and JavaScript, HTML, and CSS for the frontend. It allows users to create, edit, delete, and manage tasks across different lists such as "To Do," "Doing," and "In Review."

## Features
- Add tasks with title, description, and deadline
- Edit and delete tasks (didn't complete edit function)
- REST API with FastAPI
- Persistent storage using a database
- Responsive UI with smooth animations

## Tech Stack
- Backend: FastAPI, SQLAlchemy, SQLite
- Frontend: HTML, CSS, JavaScript
- Database: SQLite

## Project Structure
```
TaskPlanner/
│── backend/
│   ├── main.py
│   ├── database.py
│   ├── models.py
│   ├── schemas.py
│   ├── routes.py
│   ├── requirements.txt
│── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│── README.md
│── .gitignore
│── tasks.db
```

## Setup and Installation
### Backend Setup
1. **Install Dependencies:**
   ```sh
   pip install -r backend/requirements.txt
   ```
2. **Run the FastAPI Server:**
   ```sh
   uvicorn backend.main:app --reload
   ```
   The API will be available at `http://127.0.0.1:8000`
3. **Frontend Setup:**
   ##### Create new Terminal session and run below commands:
   ```sh
   cd frontend
   
   python -m http.server 5500
   ```
   The API will be available at `http://127.0.0.1:5500`
   Ensure the backend is running before testing task functionality.

## API Endpoints
| Method | Endpoint        | Description              |
|--------|----------------|--------------------------|
| GET    | `/tasks/`       | Get all tasks           |
| POST   | `/tasks/`       | Create a new task       |
| PUT    | `/tasks/{id}`   | Update a task by ID     |
| DELETE | `/tasks/{id}`   | Delete a task by ID     |


## License
This project is open-source and available under the MIT License.

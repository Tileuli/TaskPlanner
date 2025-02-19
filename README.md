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

### Web Page:

![image](https://github.com/user-attachments/assets/ba756c71-6f6a-4b9d-b2cf-9e20e1f5e242)


### Add Task and Properties Sections:

![image](https://github.com/user-attachments/assets/170b9922-5d6f-4bb2-89a1-23967d758723)
![image](https://github.com/user-attachments/assets/57249daa-870b-4319-9601-2a3385d5f343)

### FastAPI Page:

![image](https://github.com/user-attachments/assets/010db2d1-2367-44fa-b42a-e9f1a32d571c)


## License
This project is open-source and available under the MIT License.

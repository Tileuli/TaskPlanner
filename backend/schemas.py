from pydantic import BaseModel
from datetime import datetime

class TaskCreate(BaseModel):
    title: str
    description: str
    deadline: datetime
    list_name: str

class TaskResponse(TaskCreate):
    id: int

    class Config:
        orm_mode = True

from sqlalchemy import Column, Integer, String, DateTime
from backend.database import Base

class Task(Base):
    __tablename__ = "tasks"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, nullable=False)
    description = Column(String, nullable=True)
    deadline = Column(DateTime, nullable=False)
    list_name = Column(String, nullable=False)
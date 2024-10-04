from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Tabela de Usuários
class User(db.Model):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    games = relationship('Game', back_populates='user')
    chatbot_responses = relationship('ChatbotResponse', back_populates='user')

# Tabela de Jogos
class Game(db.Model):
    __tablename__ = 'games'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(String)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship('User', back_populates='games')

# Tabela de Respostas do Chatbot
class ChatbotResponse(db.Model):
    __tablename__ = 'chatbot_responses'
    id = Column(Integer, primary_key=True)
    response = Column(String, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'))
    user = relationship('User', back_populates='chatbot_responses')

# Criação das Tabelas
db.create_all()

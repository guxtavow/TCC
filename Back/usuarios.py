import pandas as pd
from flask import jsonify
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker



DATABASE_URL = "mysql+pymysql://root:Jcm30052000*@localhost:3307/techkids"
engine = create_engine(DATABASE_URL)

Base = declarative_base()

class Usuario(Base):
    __tablename__ = 'usuario'
    id = Column(Integer, primary_key=True)
    nome = Column(String)
    email = Column(String)
    senha = Column(String)
    tipo = Column(String)
    data_cadastro = Column(Integer)
    ultimo_login = Column(Integer)
    nivel_atual = Column(String)
    #telefone = Column(String)
    
    def get_dados_formatados(self):
        return {
            "ID": self.id,
            "Nome": self.nome,
            "Email": self.email,
            "Tipo": self.tipo,
            "Data de Cadastro": self.data_cadastro,
            "Último Login": self.ultimo_login,
            "Nível": self.nivel_atual,
            }
        
Session = sessionmaker(bind=engine)



# Session = sessionmaker(bind=engine)
# session = Session()

# usuarios = session.query(Usuario).all()

# for usuario in usuarios:
#     dados = usuario.get_dados_formatados()
#     print(dados)

# session.close()


import pandas as pd
from flask import jsonify
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy import DateTime
from datetime import datetime



DATABASE_URL = "mysql+pymysql://root:Jcm30052000*@localhost:3307/techkids"
engine = create_engine(DATABASE_URL, echo=True)

try:
    with engine.connect() as connection:
        print("Conectado ao banco de dados com sucesso!")
except Exception as e:
    print(f"Erro ao conectar ao banco de dados: {e}")

Base = declarative_base()

class Usuario(Base):
    __tablename__ = 'usuario'
    id = Column(Integer, primary_key=True)
    nome = Column(String)
    email = Column(String)
    senha = Column(String)
    tipo = Column(String)
    data_cadastro = Column(DateTime)
    ultimo_login = Column(Integer)
    nivel_atual = Column(String)
    celular = Column(String)
    instituicao_ensino = Column(String)
    grau_parentesco = Column(String)
    
    def get_dados_formatados(self):
        return {
            "ID": self.id,
            "Nome": self.nome,
            "Email": self.email,
            "Tipo": self.tipo,
            "Data de Cadastro": self.data_cadastro,
            "Último Login": self.ultimo_login,
            "Nível": self.nivel_atual,
            "Celular": self.celular,
            "Instituição de Ensino": self.instituicao_ensino,
            "Grau de Parentesco": self.grau_parentesco,
            #"Nivel atual": self.nivel_atual
            }
        
    @classmethod
    def cadastrar_usuario(cls, nome, email, senha, tipo, celular, instituicao_ensino=None, grau_parentesco=None, nivel_atual='Avançado'):
        with Session() as session:
            # Verifica se o email já existe
            if session.query(cls).filter_by(email=email).first():
                return {"error": "Este email já está cadastrado"}, 400

            # Cria um novo usuário
            novo_usuario = cls(
                nome=nome,
                email=email,
                senha=senha,
                tipo=tipo,
                celular=celular,
                instituicao_ensino=instituicao_ensino if tipo == 'admin' else None,
                grau_parentesco=grau_parentesco if tipo == 'Responsável' else None,
                data_cadastro=datetime.now(),
                nivel_atual=nivel_atual
            )
            
            # Adiciona e comita o novo usuário
            session.add(novo_usuario)
            session.commit()
            
            return {"message": "Usuário cadastrado com sucesso!"}, 201        
        
Session = sessionmaker(bind=engine)

# Session = sessionmaker(bind=engine)
# session = Session()

# usuarios = session.query(Usuario).all()

# for usuario in usuarios:
#     dados = usuario.get_dados_formatados()
#     print(dados)

# session.close()


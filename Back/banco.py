from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Enum, Text, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

engine = create_engine('mysql+pymysql://root:Jcm30052000*@localhost:3306/techkids')
Base = declarative_base()

# Definição do tipo de usuário
class TipoUsuario(enum.Enum):
    admin = "Admin"
    aluno = "Aluno"

# Definição do nível do aluno
class Nivel(enum.Enum):
    inicial = "Inicial"
    intermediario = "Intermediário"
    avancado = "Avançado"

# Tabela Usuário
class Usuario(Base):
    __tablename__ = 'usuario'

    id = Column(Integer, primary_key=True)
    nome = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False, unique=True)
    senha = Column(String(255), nullable=False)
    tipo = Column(Enum(TipoUsuario), nullable=False)
    data_cadastro = Column(DateTime, default=datetime.now, nullable=False)
    nivel_atual = Column(Enum(Nivel), default=Nivel.inicial, nullable=False)
    ultimo_login = Column(DateTime)

    chats = relationship("Chat", back_populates="usuario")
    historico_niveis = relationship("HistoricoNivel", back_populates="usuario")
    log_acessos = relationship("LogAcesso", back_populates="usuario")

# Tabela Chat
class Chat(Base):
    __tablename__ = 'chat'

    id = Column(Integer, primary_key=True)
    pergunta = Column(Text, nullable=False)
    resposta = Column(Text, nullable=False)
    data_pergunta = Column(DateTime, default=datetime.now, nullable=False)
    usuario_id = Column(Integer, ForeignKey('usuario.id'), nullable=False)
    nivel_pergunta = Column(Enum(Nivel), nullable=False)

    usuario = relationship("Usuario", back_populates="chats")

# Tabela Jogo
class Jogo(Base):
    __tablename__ = 'jogo'

    id = Column(Integer, primary_key=True)
    nome = Column(String(100), nullable=False)
    descricao = Column(Text, nullable=False)
    tipo = Column(String(50), nullable=False)  # Lúdico ou Educacional
    pontuacao_maxima = Column(Float, nullable=False)
    link_acesso = Column(String(255), nullable=False)
    tecnologia_id = Column(Integer, ForeignKey('tecnologia.id'), nullable=False)

    tecnologia = relationship("Tecnologia", back_populates="jogos")

# Tabela Tecnologia
class Tecnologia(Base):
    __tablename__ = 'tecnologia'

    id = Column(Integer, primary_key=True)
    nome = Column(String(100), nullable=False)
    descricao = Column(Text, nullable=False)

    jogos = relationship("Jogo", back_populates="tecnologia")

# Tabela Nível
class NivelTable(Base):
    __tablename__ = 'nivel'

    id = Column(Integer, primary_key=True)
    nome = Column(String(50), nullable=False)
    descricao = Column(Text, nullable=False)

# Tabela Log de Acessos
class LogAcesso(Base):
    __tablename__ = 'log_acesso'

    id = Column(Integer, primary_key=True)
    usuario_id = Column(Integer, ForeignKey('usuario.id'), nullable=False)
    data_acesso = Column(DateTime, default=datetime.now, nullable=False)
    tipo_acesso = Column(String(50), nullable=False)

    usuario = relationship("Usuario", back_populates="log_acessos")

# Tabela Histórico de Níveis
class HistoricoNivel(Base):
    __tablename__ = 'historico_nivel'

    id = Column(Integer, primary_key=True)
    usuario_id = Column(Integer, ForeignKey('usuario.id'), nullable=False)
    nivel_antigo = Column(Enum(Nivel), nullable=False)
    nivel_novo = Column(Enum(Nivel), nullable=False)
    data_mudanca = Column(DateTime, default=datetime.now, nullable=False)

    usuario = relationship("Usuario", back_populates="historico_niveis")

# Configuração do banco de dados (pode ajustar a URI conforme necessário)
engine = create_engine('sqlite:///techkids.db')

# Criação das tabelas no banco de dados
Base.metadata.create_all(engine)

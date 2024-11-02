from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from usuarios import Usuario, Session
from datetime import datetime



app = Flask(__name__)
CORS(app)


@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    senha = data.get('password')
    
    session = Session()
    
    usuario = session.query(Usuario).filter_by(email=email).first()
    
    session.close()
    
    if usuario and usuario.senha == senha:
        return jsonify({
            "logado": True,
            "usuario": usuario.get_dados_formatados()
        }), 200
    else:
        return jsonify({"logado": False, "mensagem": "Email ou senha incorretos"}), 401


@app.route('/cadastro', methods=['POST'])
def cadastro():
    data = request.json
    nome = data.get("nome")
    email = data.get("email")
    senha = data.get("password")
    confirmar_senha = data.get("confirmar_senha")
    tipo = data.get("tipo")
    celular = data.get("celular")
    instituicao_ensino = data.get("instituicao_ensino")
    grau_parentesco = data.get("grau_parentesco")
    nivel_atual = data.get("nivel_atual")
    
    if senha != confirmar_senha:
        return jsonify({"error": "As senhas não coincidem"}), 400
    
    # Mapeamento do perfil para o tipo do banco de dados
    if tipo == 'Professor' or tipo == 'Responsável' or tipo == 'Responsavel':
        tipo = 'admin'
    elif tipo == 'Aluno':
        tipo = 'Aluno'
    else:
        return jsonify({"error": "Tipo de usuário inválido"}), 400
    
    # Chama a função de cadastro importada do arquivo usuarios.py
    response, status = Usuario.cadastrar_usuario(nome, email, senha, tipo, celular, instituicao_ensino, grau_parentesco)
    return jsonify(response, {"cadastrado":True }), status

if __name__ == "__main__":
    app.run(debug=True)
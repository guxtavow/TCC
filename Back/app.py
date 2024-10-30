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
    perfil = data.get("perfil")
    celular = data.get("celular")
    instituicao_ensino = data.get("instituicao_ensino")
    grau_parentesco = data.get("grau_parentesco")
    
    if senha != confirmar_senha:
        return jsonify({"error": "As senhas não coincidem"}), 400

    with Session() as session:
        if session.query(Usuario).filter_by(email=email).first():
            return jsonify({"error": "Este email já está cadastrado"}), 400

        novo_usuario = Usuario(
            nome=nome,
            email=email,
            senha=senha,
            tipo=perfil,
            celular=celular,
            instituicao_ensino=instituicao_ensino if perfil == 'Professor' else None,
            grau_parentesco=grau_parentesco if perfil == 'Responsável' else None,
            data_cadastro=datetime.now()
        )
        
        session.add(novo_usuario)
        session.commit()
        return jsonify({"message": "Usuário cadastrado com sucesso!"}), 201

if __name__ == "__main__":
    app.run(debug=True)
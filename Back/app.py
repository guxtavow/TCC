from flask import Flask, jsonify, request
from flask_cors import CORS
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
from usuarios import Usuario, Session


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
def criar_usuario():
    data = request.get_json()
    perfil = data.get('perfil')

    nome = data.get('nome')
    email = data.get('email')
    senha = data.get('password')
    confirmar_senha = data.get('confirmar_senha')
    celular = data.get('celular')
    tipo_usuario = perfil 

   
    if senha != confirmar_senha:
        return jsonify({"mensagem": "As senhas não coincidem"}), 400

    session = Session()

    
    if session.query(Usuario).filter_by(email=email).first():
        session.close()
        return jsonify({"mensagem": "Email já cadastrado"}), 409

   
    if perfil == "Professor":
        instituicao_ensino = data.get('instituicao_ensino')
        novo_usuario = Usuario(
            nome=nome,
            email=email,
            senha=senha,
            tipo=tipo_usuario,
            celular=celular,
            instituicao_ensino=instituicao_ensino
        )
    elif perfil == "Responsável":
        grau_parentesco = data.get('grau_parentesco')
        novo_usuario = Usuario(
            nome=nome,
            email=email,
            senha=senha,
            tipo=tipo_usuario,
            celular=celular,
            grau_parentesco=grau_parentesco
        )
    else:
        session.close()
        return jsonify({"mensagem": "Perfil inválido"}), 400


    session.add(novo_usuario)
    session.commit()
    session.close()

    return jsonify({"mensagem": "Conta criada com sucesso"}), 201


if __name__ == '__main__':
    app.run(debug=True)

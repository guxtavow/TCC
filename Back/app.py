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

@app.route('/usuario')
def criar_usuario():
    return

@app.route("/editar-perfil/<int:usuario_id>", methods=["POST"])
def editar_perfil(usuario_id):
    session = Session()
    usuario = session.query(Usuario).filter_by(id=usuario_id).first()

    if not usuario:
        session.close()
        return jsonify({"erro": "Usuário não encontrado"}), 404

    dados = request.json

    # Atualizar os campos 
    if "nome" in dados:
        usuario.nome = dados["nome"]
    if "email" in dados:
        usuario.email = dados["email"]
    # if "telefone" in dados:
    #     usuario.telefone = dados["telefone"]
    if "senha" in dados:
        usuario.senha = dados["senha"] 

    # Salvar alterações
    session.commit()
    session.close()

    return jsonify({"mensagem": "Perfil atualizado com sucesso"})
    
if __name__ == '__main__':
    app.run(debug=True)

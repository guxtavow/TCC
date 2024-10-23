from flask import Flask, request, jsonify, render_template
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine

app = Flask(__name__)
engine = create_engine('mysql+pymysql://user:password@localhost/techkids')
Session = sessionmaker(bind=engine)
session = Session()

@app.route('/')
def home():
    return render_template('LoginScreen.html')

@app.route('/usuario', methods=['POST'])
def criar_usuario():
    data = request.json
    usuario = Usuario(nome=data['nome'], email=data['email'], senha=data['senha'], tipo=data['tipo'], telefone=data['telefone'], gparentesco=data['grau'])
    session.add(usuario)
    session.commit()
    return jsonify({"message": "Usuário criado com sucesso!"}), 201

if __name__ == '__main__':
    app.run(debug=True)

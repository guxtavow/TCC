from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer

# Criar o chatbot
chatbot = ChatBot('TechBot')

# Treinador do chatbot
trainer = ListTrainer(chatbot)

# Dados de treinamento
conversas = [
    "Olá",
    "Oi! Eu sou o TechBot. Posso te ajudar a descobrir áreas de tecnologia e fornecer uma trilha de estudos. Qual área de tecnologia você tem interesse?",
    "Quais são as áreas de tecnologia?",
    "Aqui estão algumas áreas de tecnologia: Desenvolvimento de Software, Ciência de Dados, Cibersegurança, Inteligência Artificial, e Redes de Computadores.",
    "Desenvolvimento de Software",
    "Desenvolvimento de Software é ótimo! Aqui está uma trilha de estudos para você: \n1. Aprender Python: https://www.python.org/about/gettingstarted/ \n2. Estruturas de Dados e Algoritmos: https://visualgo.net/en \n3. Desenvolvimento Web com Django: https://www.djangoproject.com/start/ \n4. Projetos Práticos: https://www.freecodecamp.org/",
    "Ciência de Dados",
    "Ciência de Dados é fascinante! Aqui está uma trilha de estudos para você: \n1. Introdução à Ciência de Dados: https://www.coursera.org/learn/what-is-datascience \n2. Python para Ciência de Dados: https://www.datacamp.com/courses/intro-to-python-for-data-science \n3. Estatística e Probabilidade: https://www.khanacademy.org/math/statistics-probability \n4. Machine Learning: https://www.coursera.org/learn/machine-learning",
    "Cibersegurança",
    "Cibersegurança é crucial! Aqui está uma trilha de estudos para você: \n1. Fundamentos de Cibersegurança: https://www.cybrary.it/course/cyber-security/ \n2. Redes e Protocolos: https://www.coursera.org/learn/computer-networking \n3. Segurança de Aplicações: https://www.udemy.com/course/web-application-security-for-beginners/ \n4. Práticas de Hacking Ético: https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
    "Inteligência Artificial",
    "Inteligência Artificial é o futuro! Aqui está uma trilha de estudos para você: \n1. Introdução à IA: https://www.elementsofai.com/ \n2. Python para IA: https://www.coursera.org/specializations/deep-learning \n3. Redes Neurais: https://www.deeplearning.ai/ \n4. Projetos de IA: https://www.kaggle.com/",
    "Redes de Computadores",
    "Redes de Computadores são essenciais! Aqui está uma trilha de estudos para você: \n1. Fundamentos de Redes: https://www.coursera.org/learn/computer-networking \n2. Protocolos de Internet: https://www.udacity.com/course/computer-networking--ud436 \n3. Configuração de Redes: https://www.cisco.com/c/en/us/training-events/training-certifications/training.html \n4. Segurança de Redes: https://www.cybrary.it/course/network-security/",
    "Obrigado",
    "De nada! Se precisar de mais alguma coisa, estarei aqui para ajudar."
]

# Treinar o chatbot
trainer.train(conversas)

# Função para interagir com o chatbot
def interagir():
    print("TechBot: Olá! Eu sou o TechBot. Posso te ajudar a descobrir áreas de tecnologia e fornecer uma trilha de estudos.")
    while True:
        pergunta = input("Você: ")
        resposta = chatbot.get_response(pergunta)
        print(f"TechBot: {resposta}")
        if pergunta.lower() in ["sair", "obrigado"]:
            break

# Iniciar interação
interagir()

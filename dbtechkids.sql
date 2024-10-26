USE techkids;

-- Definição do tipo de usuário
CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    tipo ENUM('Admin', 'Aluno') NOT NULL,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    nivel_atual ENUM('Inicial', 'Intermediário', 'Avançado') DEFAULT 'Inicial' NOT NULL,
    ultimo_login DATETIME
);

-- Tabela Chat
CREATE TABLE chat (
    id INT PRIMARY KEY AUTO_INCREMENT,
    pergunta TEXT NOT NULL,
    resposta TEXT NOT NULL,
    data_pergunta DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    usuario_id INT NOT NULL,
    nivel_pergunta ENUM('Inicial', 'Intermediário', 'Avançado') NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- Tabela Jogo
CREATE TABLE jogo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL,
    tipo VARCHAR(50) NOT NULL, -- Lúdico ou Educacional
    pontuacao_maxima FLOAT NOT NULL,
    link_acesso VARCHAR(255) NOT NULL,
    tecnologia_id INT NOT NULL,
    FOREIGN KEY (tecnologia_id) REFERENCES tecnologia(id)
);

-- Tabela Tecnologia
CREATE TABLE tecnologia (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL
);

-- Tabela Nível
CREATE TABLE nivel (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    descricao TEXT NOT NULL
);

-- Tabela Log de Acessos
CREATE TABLE log_acesso (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    data_acesso DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    tipo_acesso VARCHAR(50) NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

-- Tabela Histórico de Níveis
CREATE TABLE historico_nivel (
    id INT PRIMARY KEY AUTO_INCREMENT,
    usuario_id INT NOT NULL,
    nivel_antigo ENUM('Inicial', 'Intermediário', 'Avançado') NOT NULL,
    nivel_novo ENUM('Inicial', 'Intermediário', 'Avançado') NOT NULL,
    data_mudanca DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);

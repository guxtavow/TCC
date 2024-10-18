# README - Acesso Remoto ao MySQL

## Introdução
Este documento fornece as instruções para acessar o servidor MySQL remotamente.

## Informações de Conexão
- **Endereço IP do Servidor MySQL:** 192.168.0.20
- **Porta do MySQL:** 3306
- **Nome de Usuário:** techkids_remoto
- **Senha:** bancodadostechk

## Passos para Conexão

### Usando MySQL Workbench
1. Abra o MySQL Workbench.
2. Clique em **+** para adicionar uma nova conexão.
3. Preencha os campos conforme abaixo:
   - **Connection Name:** Conexão TechKids
   - **Host Name:** 192.168.0.20
   - **Port:** 3306
   - **Username:** techkids_remoto
   - **Password:** Clique em "Store in Vault..." e insira bancodadostechk.
4. Clique em **Test Connection** para verificar se a conexão está funcionando corretamente.
5. Se tudo estiver correto, clique em **OK** para salvar a conexão.

## Docker-Compose

Para acessar o banco de dados MySQL via Docker, siga os passos abaixo:

### Passos

1. Certifique-se de que você tem Docker e Docker Compose instalados.
2. No diretório onde o `docker-compose.yml` está localizado, execute o seguinte comando:
    `docker-compose up -d`


3. Seu banco de dados MySQL estará acessível através do endereço `192.168.0.20:3306`.

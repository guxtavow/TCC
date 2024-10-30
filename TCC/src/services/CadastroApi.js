export default async function CadastroApi(
    nome, 
    email, 
    senha, 
    confirmar_senha, 
    tipo_usuario, 
    celular = null, 
    instituicao_ensino = null, 
    grau_parentesco = null
) {
    const response = await fetch(`http://127.0.0.1:5000/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            nome, 
            email, 
            senha, 
            confirmar_senha, 
            perfil: tipo_usuario,
            celular,
            instituicao_ensino,
            grau_parentesco
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar usuário");
    }

    return data;
}
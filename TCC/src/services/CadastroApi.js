export default async function CadastroApi(usuario) { // Passando um objeto 'usuario'
    const response = await fetch(`http://127.0.0.1:5000/cadastro`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario) // Transformando o objeto diretamente em JSON
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar usuário");
    }

    return data;
}

document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const tipo = document.getElementById('tipo').value;
    const telefone = document.getElementById('telefone').value;
    const gparentesco = document.getElementById('gparentesco').value;


    fetch('/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, email, senha, tipo, telefone, gparentesco }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});

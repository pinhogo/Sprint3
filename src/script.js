document.getElementById('registro-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Construindo o corpo da requisição
    const data = {
        name: name,
        email: email,
        password: password
    };

    try {
        // Enviando a requisição para a API REST
        const response = await fetch('http://localhost:3000/register', { // Substitua pela URL da sua API
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            document.getElementById('mensagem').innerText = 'Registro bem-sucedido!';
        } else {
            const error = await response.json();
            document.getElementById('mensagem').innerText = `Erro: ${error.message}`;
        }
    } catch (error) {
        console.error('Erro:', error);
        document.getElementById('mensagem').innerText = 'Erro ao se comunicar com a API.';
    }
});

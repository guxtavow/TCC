
export async function RespostaChat(inputMessage) {
    try{
        let response = await fetch('http://localhost:7860/api/v1/run/3a27293c-12a6-4715-8a4c-120de30ca8fa?stream=false',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ input_value: inputMessage })
        })

        if(!response.ok){
            throw new Error(`Erro na resposta da API status: ${response.status} - ${response.statusText}`)
        }

        const data = await response.json()
        return data //Retorna a resposta em JSON
    }catch(err){
        console.log(err)
        return `Ocorreu um erro, atualize a pagina e tente novamente! ${err}`
    }

}

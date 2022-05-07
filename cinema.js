const teste = require("./database.json")
const alterar = codigo => teste[codigo].emCartaz = !teste[codigo].emCartaz
const buscarFilme = codigo => console.log(teste[codigo].titulo)
const adicionarFilme = filme => teste.push(filme)
const novo = {
    "codigo": teste.length + 1,
    "titulo": "50 tons de Cinza",
    "duracao": 2.2,
    "atores": ["Ator1", "Ator2"],
    "anoLancamento": 2020,
    "emCartaz": true
}    
adicionarFilme(novo)
alterar(buscarFilme(5))
console.log(teste)
buscarFilme(5)

// // Listar todos os contatos (GET)
// "https://api.box3.work/api/Contato"
// // Obter contato por ID (GET)
// "https://api.box3/work.api/Contato/{id}"
// // Deletar contato po ID (DELETE)
// "https://api.box3/work.api/Contato/{id}"
// // Inserir novo contato (POST)
// "https://api.box3/work.api/Contato"
// // Editar contato (PUT)
// "https://api.box3.work/api/Contato/{id}"
let apiHost = "http://localhost:5050"
let token = "f3d47227-3625-4f69-8f22-2d85af0a1228"

function atualizarContatos() {
    fetch(`${apiHost}/api/Contato/${token}`, {
        method: "GET"
    }).then((res) => res.json()).then((contacts) => {
        tableContent.innerHTML = contacts.map((contact) => `
    <tr>
    <td>${contact.nome}</td>
    <td>${contact.telefone}</td>
    <td>${contact.email}</td>
    <td>${contact.ativo ? "Sim" : "Não"}</td>
    <td>${contact.dataNascimento.split("T")[0]}</td>
    <td><a href="edit">Editar</a> | <a href="delete">Deletar</a></td>
    </tr>
    `).join("")
    })
}

function cadastrarContato() {
    let nome = formContato.elements.nome.value
    let telefone = formContato.elements.telefone.value
    let email = formContato.elements.email.value
    let status = formContato.elements.status.checked
    let dataNascimento = formContato.elements.dataNascimento.value
    let contato = {
        nome,
        telefone,
        email,
        status,
        dataNascimento
    }
    // console.log(contato)
    fetch(`${apiHost}/api/Contato/${token}`, {
        method: "POST", body: JSON.stringify(contato),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => res.json()).then((data) => {
        // atualizarContatos()
    })
}

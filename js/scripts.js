function cadastrar() {
    const nome=document.getElementById('nome').value;
    const telefone=parseInt(document.getElementById('telefone').value);
    const email=document.getElementById('email').value;

    window.alert("Cadastrado com êxito!");
    window.location.href = "../views/link_screen.html";
}
document.getElementById("loginbutao").addEventListener("click", function() {
    document.getElementById("modal").style.display = "flex";
});

document.getElementById("fecharmodal").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;
    const cpf = document.getElementById("cpf").value;
    const senha = document.getElementById("senha").value;

    const usuario = {
        nome: nome,
        email: email,
        telefone: telefone,
        cpf: cpf,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));

    alert("Seu cadastro foi realizado com sucesso!");
    document.getElementById("modal").style.display = "none";
    window.location.href = "index(2).html";
});

document.getElementById("telefone").addEventListener("input", function() {
    this.value = this.value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
});

document.getElementById("cpf").addEventListener("input", function() {
    this.value = this.value
        .replace(/\D/g, "")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
});

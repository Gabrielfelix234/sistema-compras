let total = 0;
let lista = "";
function mostrarParcelas() {
    let pagamento = document.querySelector("input[name='pagamento']:checked");
    let box = document.getElementById("parcelasBox");
    if (pagamento && pagamento.value === "4") {
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}
function adicionar() {
    let nomeProduto;
    let preco;
    let produto = document.querySelector("input[name='produto']:checked");
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let pagamento = document.querySelector("input[name='pagamento']:checked");
    if (!produto) {
        alert("Escolha um produto!");
        return;
    }
    if (!quantidade || quantidade <= 0) {
        alert("Digite a quantidade!");
        return;
    }
    if (!pagamento) {
        alert("Escolha a forma de pagamento!");
        return;
    }
    switch (produto.value) {
        case "1":
            nomeProduto = "Batom";
            preco = 20;
            break;
        case "2":
            nomeProduto = "Base";
            preco = 50;
            break;
        case "3":
            nomeProduto = "Máscara de Cílios";
            preco = 35;
            break;
        case "4":
            nomeProduto = "Paleta de Sombras";
            preco = 80;
            break;
    }
    let subtotal = preco * quantidade;
    total += subtotal;
    let forma = "";
    let extra = "";
    switch (pagamento.value) {
        case "1":
            forma = "Dinheiro";
            break;
        case "2":
            forma = "Pix";
            break;
        case "3":
            forma = "Débito";
            break;
        case "4":
            forma = "Crédito";
            let parcelas = document.getElementById("parcelas").value;
            if (!parcelas || parcelas <= 0 || parcelas > 5) {
                alert("Máximo 5x!");
                return;
            }
            let valorParcela = subtotal / parcelas;
            extra = " (" + parcelas + "x de R$ " + valorParcela.toFixed(2) + ")";
            break;
    }
    lista += nomeProduto + " - " + quantidade + "x = R$ " + subtotal.toFixed(2) + " | " + forma + extra + "\n";
    document.getElementById("lista").textContent = lista;
    document.getElementById("total").textContent = "Total: R$ " + total.toFixed(2);
}
function finalizar() {
    if (total === 0) {
        alert("Carrinho vazio!");
        return;
    }
    alert("Compra finalizada! Total: R$ " + total.toFixed(2));
    total = 0;
    lista = "";
    document.getElementById("lista").textContent = "";
    document.getElementById("total").textContent = "";
}



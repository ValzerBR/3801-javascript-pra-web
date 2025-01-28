const inputItem = document.getElementById("input-item");
const botaoSalvarItem = document.getElementById("adicionar-item");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    evento.preventDefault()

    if(inputItem.value === "") {
        alert("Digite um item para adicionar à lista de compras!");
        return;

    }
    
    const itemDaLista = document.createElement("li");
    itemDaLista.classList.add("item-lista-container");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id ="checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;
    nomeItem.classList.add("item-lista-nome");

    inputCheckbox.addEventListener("change", function() {
        if(inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });
    containerItemLista.appendChild(inputCheckbox);
    containerItemLista.appendChild(nomeItem);
    
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {weekday: "long"});

    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric"});
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;
    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("item-lista-texto");
    itemDaLista.appendChild(itemData);
    itemDaLista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDaLista);

}


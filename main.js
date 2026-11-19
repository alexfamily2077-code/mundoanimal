const animais = [
    { nome: "Mel", especie: "Cachorro", idade: 3 },
    { nome: "Mimi", especie: "Gato", idade: 2 },
    { nome: "Pipoca", especie: "Coelho", idade: 1 },
    { nome: "Louro", especie: "Pássaro", idade: 4 },
    { nome: "Tortuguita", especie: "Tartaruga", idade: 8 },
    { nome: "Bolinha", especie: "Hamster", idade: 1 },
    { nome: "Nemo", especie: "Peixe", idade: 2 }
];

const formulario = document.getElementById("formAnimal");
const campoNome = document.getElementById("nome");
const campoEspecie = document.getElementById("especie");
const campoIdade = document.getElementById("idade");
const corpoTabela = document.getElementById("corpoTabela");
const contador = document.getElementById("contador");

function exibirAnimais() {
    corpoTabela.innerHTML = animais
        .map((animal, index) => `
            <tr>
                <td>${index + 1}</td>
                <td class="nome-animal">${animal.nome}</td>
                <td>${animal.especie}</td>
                <td>${animal.idade} ${animal.idade === 1 ? "ano" : "anos"}</td>
            </tr>
        `)
        .join("");

    contador.textContent = `${animais.length} ${animais.length === 1 ? "animal" : "animais"}`;
}

exibirAnimais();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = campoNome.value.trim();
    const especie = campoEspecie.value;
    const idade = Number(campoIdade.value);

    if (!nome || !especie || campoIdade.value === "" || idade < 0) return;

    animais.push({ nome, especie, idade });
    exibirAnimais();

    formulario.reset();
    campoNome.focus();
});
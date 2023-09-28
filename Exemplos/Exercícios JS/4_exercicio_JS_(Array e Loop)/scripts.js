document.write('<h2 style="color: blue;">Resolução</h2><br>');



// Digite a resolução do exercício aqui e visualize o resultado no navegador

let integrantesGNR = [
    "Axl Rose", "Slash", "Duff McKagan", "Richard Fortus", "Frank Ferrer"
];

// Cache do tamanho array
let integrante = integrantesGNR.length;

// 4ª Digitação (Aqui)]
for (let i = 0; i < integrante; i++) {
    document.write(`Integrantes de Guns N Roses[${i}] é: <strong>${integrantesGNR[i]}</strong><br>`)
}



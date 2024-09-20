// Importa o pacote 'readline' para permitir entrada de dados pelo usuário no terminal
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função utilitária para criar pequenos atrasos (usada para simular animações)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Função para criar bordas de caixa para visuais aprimorados
function drawBox(content) {
    const line = '-'.repeat(content.length + 4);
    console.log(line);
    console.log(`| ${content} |`);
    console.log(line);
}

// Função para imprimir lâmpadas com formatação visual
function printLamps(lamps) {
    lamps.forEach((lamp, index) => {
        const symbol = lamp.status.includes("acesa") ? '💡' : '🔴'; // Usando emoji de lâmpada e luz apagada
        drawBox(`${symbol} ${lamp.name}: ${lamp.status}`);
    });
}

// 5) Resolver o problema dos interruptores e lâmpadas de forma visual e interativa
async function solveSwitchProblem() {
    /*
    Simulando o experimento para resolver o problema:

    1. Ligue o primeiro interruptor e deixe ligado por alguns minutos (simulado).
    2. Desligue o primeiro e ligue o segundo.
    3. Vá para a sala das lâmpadas e observe:
       - A lâmpada acesa será controlada pelo segundo interruptor.
       - A lâmpada quente, mas apagada, será controlada pelo primeiro interruptor.
       - A lâmpada fria e apagada será controlada pelo terceiro interruptor.
    */

    // Estado inicial das lâmpadas
    let lamps = [
        { name: "Lâmpada 1", status: "fria e apagada" },
        { name: "Lâmpada 2", status: "fria e apagada" },
        { name: "Lâmpada 3", status: "fria e apagada" }
    ];

    console.log("📢 Bem-vindo ao desafio dos interruptores e lâmpadas!");
    console.log("Você está em uma sala com 3 interruptores e precisa descobrir qual lâmpada cada interruptor controla.");

    // Passo 1: Ligar o primeiro interruptor
    await sleep(1000);
    console.log("\n👉 Ligando o primeiro interruptor e esperando alguns minutos...");
    await sleep(2000);

    // Simula deixar o primeiro interruptor ligado (Lâmpada 1 fica quente)
    lamps[0].status = "quente e apagada";
    printLamps(lamps);

    // Passo 2: Desligar o primeiro interruptor e ligar o segundo
    await sleep(2000);
    console.log("\n👉 Desligando o primeiro interruptor e ligando o segundo...");
    await sleep(2000);

    // Simula o segundo interruptor ligado (Lâmpada 2 acende)
    lamps[1].status = "acesa";
    printLamps(lamps);

    // Resultado final: mostrar as lâmpadas e seu status
    await sleep(2000);
    console.log("\n💡 Você entrou na sala das lâmpadas e observou o seguinte:");
    printLamps(lamps);

    // Conclusão: baseado nas observações, identificamos o controle de cada lâmpada
    await sleep(2000);
    console.log("\n🧠 Conclusão:");
    console.log("- O primeiro interruptor controla a Lâmpada 1 (quente e apagada).");
    console.log("- O segundo interruptor controla a Lâmpada 2 (acesa).");
    console.log("- O terceiro interruptor controla a Lâmpada 3 (fria e apagada).");

    menu();
}

// 1) Verificar se um número pertence à sequência de Fibonacci
function isFibonacci(num) {
    let a = 0, b = 1, next = a + b;
    if (num === a || num === b) return true;
    while (next <= num) {
        if (next === num) return true;
        a = b;
        b = next;
        next = a + b;
    }
    return false;
}

function fibonacciCheck() {
    readline.question('Digite um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
        const num = parseInt(input);
        if (isNaN(num)) {
            console.log("Por favor, insira um número válido.");
        } else {
            const result = isFibonacci(num) ? "pertence" : "não pertence";
            console.log(`O número ${num} ${result} à sequência de Fibonacci.`);
        }
        menu();
    });
}

// 2) Contar a ocorrência da letra 'a' ou 'A' em uma string
function countLetterA(str) {
    return (str.match(/a/gi) || []).length;
}

function countAInString() {
    readline.question('Digite uma string para contar as ocorrências da letra "a" (maiúscula ou minúscula): ', (input) => {
        const count = countLetterA(input);
        console.log(`A letra "a" aparece ${count} vezes na string fornecida.`);
        menu();
    });
}

// 3) Qual será o valor final da variável SOMA?
function calculateSoma() {
    let INDICE = 12, SOMA = 0, K = 1;
    while (K < INDICE) {
        K++;
        SOMA += K;
    }
    return SOMA;
}

function showSoma() {
    console.log(`O valor final da variável SOMA é ${calculateSoma()}.`);
    menu();
}

// 4) Completar as sequências numéricas
function completeSequences() {
    let a = [1, 3, 5, 7, 9]; // Sequência de números ímpares
    let b = [2, 4, 8, 16, 32, 64, 128]; // Sequência de potências de 2
    let c = [0, 1, 4, 9, 16, 25, 36, 49]; // Sequência de quadrados perfeitos
    let d = [4, 16, 36, 64, 100]; // Sequência de quadrados de números pares
    let e = [1, 1, 2, 3, 5, 8, 13]; // Sequência de Fibonacci
    let f = [2, 10, 12, 16, 17, 18, 19, 200]; // Sequência lógica

    console.log("Sequências completadas:");
    console.log(`a) ${a}`);
    console.log(`b) ${b}`);
    console.log(`c) ${c}`);
    console.log(`d) ${d}`);
    console.log(`e) ${e}`);
    console.log(`f) ${f}`);
    menu();
}

// Função para exibir o menu e coletar a escolha do usuário
function menu() {
    console.log("\nEscolha uma das opções abaixo:");
    console.log("1. Verificar número na sequência de Fibonacci");
    console.log("2. Contar ocorrências da letra 'a' em uma string");
    console.log("3. Mostrar o valor final da variável SOMA");
    console.log("4. Completar sequências numéricas");
    console.log("5. Resolver o problema dos interruptores");
    console.log("6. Sair");

    readline.question('Digite o número da sua escolha: ', (choice) => {
        switch (choice) {
            case '1':
                fibonacciCheck();
                break;
            case '2':
                countAInString();
                break;
            case '3':
                showSoma();
                break;
            case '4':
                completeSequences();
                break;
            case '5':
                solveSwitchProblem();
                break;
            case '6':
                console.log("Encerrando o programa. Até logo!");
                readline.close();
                break;
            default:
                console.log("Escolha inválida. Tente novamente.");
                menu();
                break;
        }
    });
}

// Iniciar o programa exibindo o menu
menu();

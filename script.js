'use strict'
// Ativa o modo estrito do JavaScript
// Isso ajuda a evitar alguns erros comuns no código

import { listaProdutos } from './produtos.js'
// Importa a constante listaProdutos do arquivo produtos.js
// Agora esse arquivo pode usar o array de produtos

function formatarPreco(valor) {
    // Esta função recebe um número, por exemplo: 3999.99

    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })
    // Converte o valor numérico para formato de moeda brasileira
    // Exemplo: 3999.99 vira "R$ 3.999,99"
}

function criarEstrelas(classificacao) {
    // Esta função recebe a classificação do produto
    // Exemplo: 4

    let estrelas = ''
    // Cria uma variável vazia que vai guardar as estrelas

    for (let i = 1; i <= 5; i++) {
        // Repete 5 vezes, porque queremos mostrar no máximo 5 estrelas

        if (i <= classificacao) {
            estrelas += '★'
            // Se o número atual do laço for menor ou igual à classificação,
            // adiciona uma estrela preenchida
        } else {
            estrelas += '☆'
            // Caso contrário, adiciona uma estrela vazia
        }
    }

    return estrelas
    // Retorna a sequência de estrelas pronta
}

function criarCard(produto) {
    // Esta função recebe um produto do array
    // e cria um card HTML dinamicamente

    const card = document.createElement('div')
    // Cria uma div no JavaScript

    card.className = 'card'
    // Define a classe da div como "card"
    // Essa classe será usada no CSS para estilizar

    const imagem = document.createElement('img')
    // Cria um elemento de imagem

    imagem.src = `./img/${produto.imagem}`
    // Define o caminho da imagem com base no nome salvo no array

    imagem.alt = produto.nome
    // Define o texto alternativo da imagem
    // Importante para acessibilidade e caso a imagem não carregue

    const categoria = document.createElement('span')
    // Cria um span para mostrar a categoria

    categoria.className = 'categoria'
    // Aplica a classe CSS da categoria

    categoria.textContent = produto.categoria
    // Coloca o texto da categoria dentro do span

    const nome = document.createElement('h2')
    // Cria o título do produto

    nome.className = 'nome-produto'
    // Aplica a classe CSS do nome

    nome.textContent = produto.nome
    // Coloca o nome do produto no h2

    const descricao = document.createElement('p')
    // Cria um parágrafo para a descrição

    descricao.className = 'descricao'
    // Aplica a classe CSS da descrição

    descricao.textContent = produto.descricao
    // Coloca a descrição do produto no parágrafo

    const preco = document.createElement('p')
    // Cria um parágrafo para o preço

    preco.className = 'preco'
    // Aplica a classe CSS do preço

    preco.textContent = formatarPreco(produto.preco)
    // Chama a função formatarPreco para mostrar o valor no formato brasileiro

    const estrelas = document.createElement('div')
    // Cria uma div para mostrar as estrelas

    estrelas.className = 'estrelas'
    // Aplica a classe CSS das estrelas

    estrelas.textContent = criarEstrelas(produto.classificacao)
    // Chama a função que gera as estrelas com base na classificação do produto

    const rodapeCard = document.createElement('div')
    // Cria uma div para o rodapé do card

    rodapeCard.className = 'rodape-card'
    // Aplica a classe CSS do rodapé

    rodapeCard.append(estrelas)
    // Coloca a div das estrelas dentro do rodapé

    card.append(categoria, imagem, nome, descricao, preco, rodapeCard)
    // Adiciona todos os elementos dentro do card, na ordem desejada

    return card
    // Retorna o card pronto
}

const cards = listaProdutos.map(criarCard)
// Percorre todo o array listaProdutos
// Para cada produto, chama a função criarCard
// O resultado é um novo array contendo todos os cards prontos

document.getElementById('container').replaceChildren(...cards)
// Seleciona o elemento do HTML com id="container"
// replaceChildren substitui o conteúdo interno pelos cards criados
// Os três pontos (...) espalham o array e inserem os elementos individualmente
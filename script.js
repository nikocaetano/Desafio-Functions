
//1 - crie uma função que exiba uma mensagem no console

function deafioFunction(){
    console.log('Desafio Function')
}

deafioFunction();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function meuNome(name){
    console.log(`Olá, eu me chamo ${name}.`)
}

meuNome('Nikolas');

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function minhasInfo(nome, idade, estilo){
    console.log(`Olá, eu me chamo ${nome}, tenho ${idade} e meu estilo musical favorito é ${estilo}.`)
}

minhasInfo('Nikolas', '24 anos', 'Pop/funk');

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function movieMusic(movie, music){
    console.log(`Eu amo as adaptações de ${movie} e a música que mais tenho escutado ultimamente é ${music}. `)
}

movieMusic('The Hunger Games', 'Fé da Iza')

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function double(number){
    return number * 3
}

console.log( double (5));
export default class QuestionarioController {
    Questionario =[]

    constructor(){
        this.Questionario.push(
            {
                id:0,
                titulo:'Quantas tipos de peças tem em um jogo de xadres?',
                R1:'6 Peças',
                R2:'8 Peças',
                R3:'7 Peças',
                R4:'5 Peças',
                RC:'A'
            },
            {
                id:1,
                titulo:'No jogo de xadrez, qual é a peça que anda em "L"?',
                R1:'O cavalo',
                R2:'O rei',
                R3:'O bispo',
                R4:'O peão',
                RC:'A'
            },
            {
                id:2,
                titulo:'O que significa a expressão "xeque-mate"?',
                R1:'A rainha corre perigo',
                R2:'Propõe que o adversário abandone o jogo',
                R3:'Quem falou está desistindo da partida',
                R4:'Significa que o rei adversário está sob ataque e não tem como escapar',
                RC:'D'
            },
            {
                id:3,
                titulo:'Quando um peão chega até a última casa do tabuleiro, o que acontece?',
                R1:'Fim de jogo para o adversário',
                R2:'Troca-se o peão por uma outra peça',
                R3:'Outro peão entra em jogo',
                R4:'Elimina-se uma peça qualquer (menos o rei) do adversário',
                RC:'B'
            },
            {
                id:4,
                titulo:'Como o rei anda no xadrez?',
                R1:'Uma casa por vez e para qualquer lugar',
                R2:'Para qualquer lugar, pois ele é o rei',
                R3:'Ele não anda',
                R4:'Ele pode andar três casas por vez',
                RC:'A'
            },
            {
                id:5,
                titulo:'Quantas peças de xadrez cada jogador possui no início?',
                R1:'20 peças',
                R2:'10 peças',
                R3:'16 peças',
                R4:'18 peças',
                RC:'C',
            },
            {
                id:6,
                titulo:'Qual o objetivo do jogo de xadrez?',
                R1:'Capturar todos os peões',
                R2:'Converter as peças inimigas usando o bispo',
                R3:'Deixar o rei do oponente sem movimentos válidos e em xeque',
                R4:'Comer todas as peças do adversário',
                RC:'C',
            },
            {
                id:7,
                titulo:'Como o bispo anda?',
                R1:'Na diagonal',
                R2:'Em "B"',
                R3:'Uma casa por vez',
                R4:'Na horizontal e na vertical',
                RC:'A',
            },
            {
                id:8,
                titulo:'Qual peça pode-se movimentar apenas na horizontal e na vertical?',
                R1:'Rei',
                R2:'Bispo',
                R3:'Rainha',
                R4:'Torre',
                RC:'D',
            },
            {
                id:9,
                titulo:'Qual a peça mais valorizada depois do rei?',
                R1:'Bispo',
                R2:'Peão',
                R3:'Rainha',
                R4:'Cavalo',
                RC:'C',
            },
            {
                id:10,
                titulo:'O tabuleiro de xadrez é dividido em quantas casas?',
                R1:'64',
                R2:'20',
                R3:'60',
                R4:'25',
                RC:'A',
            },
        );
    }
}
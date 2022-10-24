import Noticias from "../Model/Noticias";

export default function NoticiasController (){
    Noticias.push({
        id:0,
        image:require('../assets/Noticia1.png'),
        titulo:'Maioria dos jovens vê perdas irreparáveis de aprendizado devido à pandemia, diz Datafolha',
        texto:'     A maior parte dos jovens no Brasil (61%) concorda que a pandemia da Covid-19 causou perdas irreparáveis de aprendizado, aponta pesquisa Datafolha. A percepção muda de acordo com o gênero: mais mulheres reportam perda (65%) na educação que homens (57%). O instituto realizou mil entrevistas com jovens, na faixa de 15 a 29 anos, nos dias 20 e 21 de julho. Eles foram ouvidos em São Paulo, Rio de Janeiro, Belo Horizonte, Salvador, Fortaleza, Recife, Porto Alegre, Curitiba, Goiânia, Brasília, Manaus e Belém. A margem de erro é de três pontos percentuais, para mais ou para menos, dentro do nível de confiança de 95%.'
    },
    {
        id:1,
        image:require('../assets/Noticia2.png'),
        titulo:'Aluno com autismo de escola em Caxias lança livro de história em quadrinhos',
        texto:'Duque de Caxias - A educação transforma a vida e abre as portas para um mundo de possibilidades. O aluno da Escola Municipal Santa Terezinha, em Duque de Caxias, Arthur Macedo, de 11 anos, que tem Transtorno do Espectro Autista (TEA), é um exemplo claro dessa afirmação. Ele superou todas as dificuldades e escreveu o livro “Apocalypse Mortal”, uma história em quadrinhos que narra as aventuras de um herói que descobre a cura de um vírus. Aluno de escola municipal em Duque de Caxias com autismo lança livro de história em quadrinhos Divulgação O lançamento, cercado de muita emoção.'
    },
    {
        id:2,
        image:require('../assets/Noticia3.png'),
        titulo:'Entenda os direitos de pessoas com Transtorno do Espectro do Autismo',
        texto:'Uma recente pesquisa feita nos Estados Unidos pelo Center of Diseases Control and Prevention (CDC) apontou que o Transtorno do Espectro do Autismo (TEA) atinge de 1% a 2% da população mundial e, no Brasil, aproximadamente dois milhões de pessoas foram diagnosticada com autismo. Muitos desses diagnósticos são tardios, o que levam diversas implicações para a família, mas principalmente para o paciente que deveria estar em tratamento, talvez até tendo que tomar algum tipo de medicação. \n Apesar da grande quantidade de pessoas com TEA, os direitos impostos por diversas leis ainda lhes são negados.'
    }
    );
}
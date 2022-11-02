const cores = {
    background: '#3282B8',
    red1: "#B75353",
    red2: "#563838",
    blue: "#539FB7",
    green: "#3C8544",
    pink: "#B953B2",
    purple: "#8953B9",
    cyan: "#53B9B5",
    yellow: "#ECEC0C",
    orange: "#E19625",
    black: "#252525",
  };
export default class CronogramaController{
    cronograma=[];

    constructor(){
        this.cronograma.push(
            {
                id: 0,
                data: "2022-12-09",
                cor: cores.red1,
                prazo: "3 dias",
                text: "terminar exercicio",
              },
              {
                id: 1,
                data: "2022-03-17",
                cor: cores.blue,
                prazo: "3 dias",
                text: "terminar exercicio",
              },
              {
                id: 2,
                data: "2022-04-25",
                cor: cores.green,
                prazo: "3 dias",
                text: "Fazer Tarefa",
              },
              {
                id: 3,
                data: "2022-08-18",
                cor: cores.red1,
                prazo: "3 dias",
                text: "estudar",
              },
              {
                id: 4,
                data: "2022-06-20",
                cor: cores.green,
                prazo: "3 dias",
                text: "terminar exercicio",
              },
              {
                id: 5,
                data: "2022-09-20",
                cor: cores.blue,
                prazo: "3 dias",
                text: "terminar exercicio",
              },
        );
    }
}
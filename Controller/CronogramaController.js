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
                data: "09/12/2022",
                cor: cores.red1,
                prazo: "30 dias",
                text: "terminar exercicio",
              },
              {
                id: 1,
                data: "17/03/2022",
                cor: cores.blue,
                prazo: "30 dias",
                text: "terminar exercicio",
              },
              {
                id: 2,
                data: "25/04/2022",
                cor: cores.green,
                prazo: "30 dias",
                text: "Fazer Tarefa",
              },
              {
                id: 3,
                data: "18/08/2022",
                cor: cores.red1,
                prazo: "30 dias",
                text: "estudar",
              },
              {
                id: 4,
                data: "20/06/2022",
                cor: cores.green,
                prazo: "30 dias",
                text: "terminar exercicio",
              },
              {
                id: 5,
                data: "28/09/2022",
                cor: cores.blue,
                prazo: "30 dias",
                text: "terminar exercicio",
              },
        );
    }
}
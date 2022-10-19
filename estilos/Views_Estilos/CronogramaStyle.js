const cores = {
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
const CronogramaStyle = {
  
  menu: {
    width: "100%",
    height: 130,
  },
  botaoVoltar: {
    position: "absolute",
    left: "5%",
    top: "25%",
  },

  tituloPagina: {
    position: "absolute",
    top: "60%",
    left: "7%",
    fontSize: 22,
    color: "white",
  },
  body: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
  },
  containerConteudo: {
    position: "absolute",
    top: 130,
    width: "100%",
    height: "85%",
  },
  linhaDeFundo: {
    width: 4,
    height: "100%",
    backgroundColor: "#626262",
    position: "absolute",
    left: "22%",
    opacity: 0.5,
  },
  inputDia: {
    color: "white",
    
    textAlign: "center",
    width: 60,
    borderRadius: 15,
  },
  inputMes: {
    color: "white",
    textAlign: "center",
    width: 60,
    borderRadius: 15,
    top: 20,
  },
  inputPrazo: {
    color: "white",
    textAlign: "center",
    width: "50%",
    borderRadius: 15,
  },
  atividadeAdicionarPonto: {
    width: 15,
    height: 15,
    borderRadius: 20,
    left: 10,
    top: 10,
  },
  atividadeAdicionar: {
    width: 241,
    height: 106,
    backgroundColor: "#CDCDCD",
    flexDirection: "column",
    justifyContent: "center",
    borderRadius: 15,
    left: 30,
    shadowColor: "#000",

    shadowOpacity: 1,
    shadowRadius: 1,

    elevation: 7,
  },
  botaoAdicionar: {
    width: "50%",
    height: 40,
    backgroundColor: cores.red1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    top: 140,
  },
  adicionarBotaoVoltar: {
    width: "50%",
    height: 40,
    backgroundColor: cores.red1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    left: 30,
    top: 160,
  },
  adicionarContainerCorSelect: {
    height: 32,
    width: 100,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "red",
    position: "absolute",
    top: 255,
    left: "60%",
    justifyContent: "center",
  },
  adicionarCorSelect: {
    height: 50,
    width: 100,
    color: "white",
  },
  adicionarCorSelectItems: {
    fontSize: 14,
  },
  excluirBotaoVoltar: {
    position: "absolute",
    left: 20,
    top: 170,
    borderRadius: 20,
    overflow: "hidden",
  },
  frameContainer: {
    height: 321,
    backgroundColor: cores.red1,
    position: "absolute",
    borderRadius: 20,
    left: "40%",
    top: 40,
    alignItems: "center",
    overflow: "hidden",
    justifyContent: "space-evenly",
  },

};

export default CronogramaStyle;

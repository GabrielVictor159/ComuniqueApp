
import cores from "../cores";
const CadastrarStyle = (isKeyboardActive) => {
  const a = {
    linkText: {
      color: cores.buttonGradientColor1,
      fontSize: 20,
      textAlign: "center",
    },
    viewButtons: {
      position: "absolute",
      top: isKeyboardActive ? "100%" : "77%",
    },
    selectCategoria: {
      width: 200,
      height: "8%",
      backgroundColor: "#D9D9D9",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderRadius: 80,
    },
    viewInputs: {
      top: isKeyboardActive ? "15%" : "-5%",
      alignItems: "center",
    },
    viewMiddle: {
      backgroundColor: "white",
      width: "100%",
      height: 750,
      top: "7%",
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      justifyContent: "center",
      alignItems: "center",
    },
    imageBackground: {
      position: "absolute",
      left: "50%",
      top: 0,
    },
    textTitulo: {
      position: "absolute",
      top: "8%",
      left: 25,
      fontSize: 30,
      color: "white",
    },
    body: {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "flex-end",
      backgroundColor: "#277BC0",
    },
    input: {
      width: 250,
      borderBottomWidth: 3.0,
      borderColor: cores.backgroundColor,
    },
    selectActive: {
      width: "50%",
      height: "110%",

      borderRadius: 80,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4.84,

      elevation: 5,
    },
    selectInative: {
      width: "50%",
      height: "100%",

      borderRadius: 80,
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  }
  return a
};

export default CadastrarStyle;

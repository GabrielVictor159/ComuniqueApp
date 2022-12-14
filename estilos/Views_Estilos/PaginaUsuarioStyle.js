import cores from "../cores";

const PaginaUsuarioStyle = {
  container: {
    width: "100%",
    height: "100%",
    flexDirection: "column",
    backgroundColor: '#E3E3E3',
    alignItems: "center",
  },
  menuSuperior: {
    width: "100%",
    height: "25%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    elevation:15
  },
  imageBanner:{
    width:'100%',
    height:'100%',
    position:'absolute',
    opacity:0.7,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
  },
  imageMenuContainer: {
    alignItems: "center",
    top: 10,
  },
  imageSettings: {
    position: "absolute",
    left: "90%",
    top: 40,
  },
  imageReturn: {
    position: "absolute",
    left: "5%",
    top: 40,
  },
  containerAtividades: {
    height: "50%",
    justifyContent: "space-between",
    top: "7%",
  },
};

export default PaginaUsuarioStyle;

import cores from "../cores";

const LoginStyle = {
  body: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: cores.backgroundColor,
  },
  IconTitle: {
    position: "absolute",
    left: 20,
    top: 100,
  },
  Title: {
    color: "white",
    fontWeight: "normal",
    fontSize: 30,
    position: "absolute",
    left: 120,
    top: 100,
  },
  ViewMiddle: {
    backgroundColor: "white",
    width: "100%",
    height: "40%",
    borderTopRightRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  ButtonsContainer: {
    top: -150,
  },
  Button2: {
    top: 20,
  },
  ImageCenter: {
    position: "relative",
    top: "-50%",
  },
};

export default LoginStyle;

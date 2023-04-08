import React from "react";
import { Image } from "react-native";
import Email from "./Email";
import Logout from "./Logout";
import Padlock from "./Padlock";
import Pencil from "./Pencil";

const PersonalizarIcons = (props) => {
    if (props.icon === 'Pencil') {
        return (
            <Image style={{ width: props.width, height: props.height, resizeMode: 'contain' }} source={require("./Pencil.png")} />
        );
    }
    else if (props.icon === 'Email') {
        return (
            <Image style={{ width: props.width, height: props.height, resizeMode: 'contain' }} source={require("./mail.png")} />
        );
    }
    else if (props.icon === 'Logout') {
        return (
            <Image style={{ width: props.width, height: props.height, resizeMode: 'contain' }} source={require("./log-out.png")} />
        );
    }
    else if (props.icon === 'Padlock') {
        return (
            <Image style={{ width: props.width, height: props.height, resizeMode: 'contain' }} source={require("./padlock.png")} />
        );
    }
}

export default PersonalizarIcons
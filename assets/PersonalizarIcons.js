import React from "react";
import Email from "./Email";
import Logout from "./Logout";
import Padlock from "./Padlock";
import Pencil from "./Pencil";

const PersonalizarIcons = (props) =>{
    if(props.icon==='Pencil'){
        return(
            <Pencil width={props.width} height={props.height}/>
        );
    }
    else if(props.icon ==='Email'){
        return(
            <Email width={props.width} height={props.height}/>
        );
    }
    else if(props.icon ==='Logout'){
        return(
            <Logout width={props.width} height={props.height}/>
        );
    }
    else if(props.icon ==='Padlock'){
        return (
            <Padlock width={props.width} height={props.height} />
        );
    }
}

export default PersonalizarIcons
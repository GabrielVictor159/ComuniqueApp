import cores from '../cores';
const LogarStyle ={
    body:{
        width:"100%",
         height:"100%",
          display:'flex',
           flexDirection:'row',
            justifyContent:'center',
             alignItems:'flex-end',
              backgroundColor:cores.backgroundColor
    },
    buttonBack:{
        position:'absolute',
         left:20,
          top:50
    },
    ImageBack:{
        position:'absolute',
         top:30 ,
          left:'50%'
    },
    ViewMiddle:{
        backgroundColor:'white',
         width:'100%',
          height:'80%' ,
           top:25 ,
           borderTopRightRadius:50,
            borderTopLeftRadius:50,
             justifyContent:'center',
              alignItems:'center'
    },
    Input:{
        width:220,
         textAlign:'center',
          borderBottomWidth : 1.0,
           borderColor:cores.backgroundColor
    },
    InputContainer1:{
        top:-120,
        alignItems:'center'
    },
    InputContainer2:{
        top:-80, 
        alignItems:'center'
    },
    InputIcons: {
        position:'relative',
         left:-80,
          top:"30%"
    },
    ViewBottons:{
        top:70,
        alignItems:'center'
    },
    Link1:{
        color:cores.backgroundColor,
        fontSize:15,
        top:10

    },
    Link2:{
        color:cores.backgroundColor,
        fontSize:20,
        top: 100
    }
}

export default LogarStyle;

import Usuario from "../Model/Usuario";
class UsuarioController {
    constructor(){
        this.usuario = new Usuario();
        this.usuario.perfil.nome='Gabriel';
        this.usuario.perfil.email='babydobaby@gmail.com';
        this.usuario.perfil.senha='159487';
        this.usuario.perfil.imagePerfil='../../../assets/PerfilImage.jpg';
        this.usuario.perfil.imageBanner='../../../assets/Banner.png';
        this.usuario.cronograma=[{
                    id: 0,
                    data: "09/12/2022",
                    cor: 'white',
                    prazo: 30,
                    text: "terminar exercicio",
                  },
                  {
                    id: 1,
                    data: "17/03/2022",
                    cor: 'white',
                    prazo: 30,
                    text: "terminar exercicio",
                  },
                  {
                    id: 2,
                    data: "25/04/2022",
                    cor:'white',
                    prazo: 30,
                    text: "terminar exercicio",
                  },
                  {
                    id: 3,
                    data: "18/08/2022",
                    cor: 'white',
                    prazo: 30,
                    text: "terminar exercicio",
                  },
                  {
                    id: 4,
                    data: "20/06/2022",
                    cor: 'white',
                    prazo: 30,
                    text: "terminar exercicio",
                  },
                  {
                    id: 5,
                    data: "28/09/2022",
                    cor: 'white',
                    prazo: 30,
                    text: "terminar exercicio",
                  }];
        
        this.usuario.chats=[
            {
                    id:0,
                    destinatario:'jubileu',
                    online:true,
                    imageUrl:require("../assets/PerfilImage.jpg"),
                    tipoUsuario:'Professor',
                    mensagens:[
                        {
                          id:0,
                            text:'Ola amigo!',
                            data:'14/08/2022-18:13:40',
                            origem:'jubileu'
                        },
                        {
                          id:1,
                            text:'Fala ai',
                            data:'14/08/2022-19:13:40',
                            origem:'Gabriel'
                        }
                        
                    ]
                  },
                  {
                    id:1,
                    destinatario:'jubilado',
                    online:true,
                    imageUrl:require("../assets/PerfilImage.jpg"),
                    tipoUsuario:'Aluno',
                    mensagens:[
                        {
                          id:0,
                            text:'Ola amigo!',
                            data:'14/08/2022-18:13:40',
                            origem:'jubileu'
                        },
                        {
                          id:1,
                            text:'to puto',
                            data:'14/08/2022-19:13:40',
                            origem:'Gabriel'
                        }
                    ]
                  },
                  {
                    id:2,
                    destinatario:'jubilado',
                    online:true,
                    imageUrl:require("../assets/PerfilImage.jpg"),
                    tipoUsuario:'Aluno',
                    mensagens:[
                        {
                          id:0,
                            text:'Ola amigo!',
                            data:'14/08/2022-18:13:40',
                            origem:'jubileu'
                        },
                        {
                          id:2,
                            text:'to puto',
                            data:'14/08/2022-19:13:40',
                            origem:'Gabriel'
                        }
                    ]
                  },
                  {
                    id:3,
                    destinatario:'jubilado',
                    online:true,
                    imageUrl:require("../assets/PerfilImage.jpg"),
                    tipoUsuario:'Aluno',
                    mensagens:[
                        {
                          id:0,
                            text:'Ola amigo!',
                            data:'14/08/2022-18:13:40',
                            origem:'jubileu'
                        },
                        {
                          id:1,
                            text:'to puto',
                            data:'14/08/2022-19:13:40',
                            origem:'Gabriel'
                        }
                    ]
                  },
                  {
                    id:4,
                    destinatario:'jubilado',
                    online:true,
                    imageUrl:require("../assets/PerfilImage.jpg"),
                    tipoUsuario:'Aluno',
                    mensagens:[
                        {
                          id:0,
                            text:'Ola amigo!',
                            data:'14/08/2022-18:13:40',
                            origem:'jubileu'
                        },
                        {
                          id:1,
                            text:'to puto',
                            data:'14/08/2022-19:13:40',
                            origem:'Gabriel'
                        }
                    ]
                  },
                  {
                    id:5,
                    destinatario:'teste',
                    online:true,
                    imageUrl:require("../assets/PerfilImage.jpg"),
                    tipoUsuario:'Aluno',
                    mensagens:[
                        {
                          id:0,
                            text:'Ola amigo!',
                            data:'14/08/2022-18:13:40',
                            origem:'jubileu'
                        },
                        {
                          id:1,
                            text:'to puto',
                            data:'14/08/2022-19:13:40',
                            origem:'Gabriel'
                        }
                    ]
                  }
                ]
        
    }

}


  export default UsuarioController;
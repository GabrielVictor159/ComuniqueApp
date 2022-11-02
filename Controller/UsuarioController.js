import cores from "../estilos/Views_Estilos/CronogramaCores";
import Usuario from "../Model/Usuario";
class UsuarioController {
    constructor(){
        this.usuario = new Usuario();
        this.usuario.perfil.nome='Gabriel';
        this.usuario.perfil.email='babydobaby@gmail.com';
        this.usuario.perfil.senha='159487';
        this.usuario.perfil.imagePerfil=require('../assets/PerfilImage.jpg');
        this.usuario.perfil.imageBanner=require('../assets/Banner.png');
        this.usuario.cronograma.push(
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
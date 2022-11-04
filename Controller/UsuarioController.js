import cores from "../estilos/Views_Estilos/CronogramaCores";
import Usuario from "../Model/Usuario";
class UsuarioController {
  constructor(){
    this.usuario = new Usuario()
  }
  
  
 AlterarEmail=(EmailAntigo, EmailNovo)=>{
    if(EmailAntigo === ''){
      alert('Por favor informe um valor no email antigo')
      return false
    }
    else if(EmailNovo ===''){
      alert('Por favor informe um novo email')
      return false
    }
    else if(EmailAntigo !== this.usuario.perfil.email){
      alert('Email antigo errado')
      return false
    }
    else{
      this.usuario.perfil.email=EmailNovo;
      
      return true
    }
  }
 AlterarSenha = (SenhaAntiga, SenhaNova, repeticaoSenhaNova)=>{
    if(SenhaAntiga === ''){
      alert('Por favor informe um valor na senha antiga')
      return false
    
    }
    else if(SenhaNova ===''){
      alert('Por favor informe um valor na nova senha')
      return false
    }
    else if(SenhaNova !=  repeticaoSenhaNova){
      alert('Por favor verifique a confirmaçao da senha')
     
      return false
    }
    else if(SenhaAntiga !== this.usuario.perfil.senha){
      alert('Senha antiga errada')
      return false
    }
    else{
      this.usuario.perfil.senha=SenhaNova;
      return true
    }
  }
AlterarNome=(NomeNovo)=>{
    
   if(NomeNovo ===''){
      alert('Por favor informe um novo nome')
      return false
    }
    else{
      this.usuario.perfil.nome=NomeNovo;
      return true
    }
  }
 AlterarImagePerfil=(NovaImagePerfil)=>{
    if(NovaImagePerfil===null){
      alert('Por favor forneça uma imagem')
    }
    else{
      this.usuario.perfil.imagePerfil=NovaImagePerfil;
       }
  }
 AlterarImageBanner=(NovaImageBanner)=>{
    if(NovaImageBanner===null){
      alert('Por favor forneça uma imagem')
    }
    else{
      this.usuario.perfil.imageBanner=NovaImageBanner;
    }
  }
  AdicionarChat=(NovoChat)=>{
   
    this.usuario.chats.push(NovoChat);
   alert(this.usuario.chats[this.usuario.chats.length-1])
  } 
 

}


  export default UsuarioController;
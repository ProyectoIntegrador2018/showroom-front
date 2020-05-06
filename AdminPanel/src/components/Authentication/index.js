import Axios from 'axios'
import router from '@/router'

const uri = 'https://shrouded-plains-43003.herokuapp.com'
//const uri = 'http://192.168.0.115:3000'
const BPAPI = uri

export default {
  user: { authenticated: false },
  authenticate (context, credentials) {

    //For Demostream
    if(credentials.email != "" && credentials.password !=""){

          /*
      context.$cookies.set('BP', "DemoAldo", '1D')
      context.$cookies.set('H1BPidLo', "123", '1D')
      context.$cookies.set('IjkBPusrnmLo', "Administrador", '1D')
      router.push('/items')
      window.location.reload()
      context.$store.commit("toggle_alert", {
        color: "green",
        text: 'Bienvenido a BP'
      });
      */
  
    var base64encodedData = new Buffer(credentials.email + ':' + credentials.password).toString('base64');
    const token = Buffer.from(credentials.email + ':' + credentials.password, 'utf8').toString('base64');

    Axios.post(`${BPAPI}/auth`,null, { 
    headers: {
      'Host': uri,
      'Authorization': 'Basic ' + token
    }
    })
        .then((response) => {
          //response.data.data.role == '99' Revisar Rol
          if (true) {
            console.log("probando response")
            console.log(response)
            context.$cookies.set('BP', response.data.token, '1D')
            context.$cookies.set('H1BPidLo', response.data.user.id, '1D')
            context.$cookies.set('IjkBPusrnmLo', response.data.user.name, '1D')
            router.push('/items')
            window.location.reload()
            context.$store.commit("toggle_alert", {
              color: "green",
              text: 'Bienvenido a BP'
            });

            context.loadLogin = false
          }else{
              context.$store.commit("toggle_alert", {
              color: "red",
              text: 'Porfavor inicio sesión con un usuario del tipo administrador'
            });
          }
        }).catch((e) => {
          context.loadLogin = false
          console.log(e)
          context.$store.commit("toggle_alert", {
            color: "red",
            text: 'Credenciales inválidas, intente nuevamente'
          });        })
        }else{
          context.$store.commit('toggle_alert', {color: 'red', text: 'Uno o mas campos vacíos'})
        }

    
  },
  signout (context, redirect) {
    router.push('/')
    context.$cookies.remove('BP')
    context.$cookies.remove('H1BPidLo')
    context.$cookies.remove('IjkBPusrnmLo')
    window.location.reload()
  },
  checkAuthentication () {
    const token = document.cookie
    this.user.authenticated = !!token
  },
  getAuthenticationHeader (context) {
    return `Bearer ${context.$cookies.get('BP')}`
  }
}

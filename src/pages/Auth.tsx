import '../styles/Auth.scss'
import Logo from '../images/midas-logoBG-black.png'

const Auth = () => {
   return (
      <>
         <div className="authBackground">
            <div className="authContainer">
               <div className="opt-top">
                  <img src={Logo} alt="Logo" />
                  <div className="button-login">
                     <input checked type="radio" name="opt" id="inputLogin" />Logar
                  </div>
                  <div className="button-register">
                     <input type="radio" name="opt" id="inputRegister" />Registrar
                  </div>
               </div>
               <div className="auth-left">
                  <h1>Bem-vindo de volta</h1>
                  <h3>Bem-vindo de volta! Por favor, insira seus dados.</h3>
                  <div className="name-box">
                     <label htmlFor="name">Nome</label>
                     <input type="text" name="nome" placeholder='Digite seu nome' id="" />
                  </div>
                  <div className="password-box">
                     <label htmlFor="password">Senha</label>
                     <input type="password" name="senha" placeholder='Digite sua senha' id="" />
                  </div>
                  <div className="info-box">
                     <input type="checkbox" name="box" id="radio" />
                     <label htmlFor="box">Lembrar-me durante 1 mês</label>
                     <p>Esqueceu sua senha?</p>
                  </div>
                  <a className="button-login" href="/estatisticas">Logar</a>
                  <p>Não possui conta? <span>Registre-se</span></p>
               </div>
               <div className="auth-right">
                  <h1>Inscrever-se</h1>
                  <h3>Prazer em conhecê-lo! Por favor, insira seus dados.</h3>
                  <div className="name-box">
                     <label htmlFor="name">Nome</label>
                     <input type="text" name="nome" placeholder='Digite seu Nome' id="" />
                  </div>
                  <div className="email-box">
                     <label htmlFor="name">Email</label>
                     <input type="text" name="nome" placeholder='Digite seu Email' id="" />
                  </div>
                  <div className="password-box">
                     <label htmlFor="password">Senha</label>
                     <input type="password" name="senha" placeholder='Digite sua Senha' id="" />
                  </div>
                  <div className="info-box-register">
                     <input type="checkbox" name="box" id="radio" />
                     <label htmlFor="box">Eu aceito os Termos de condições</label>
                  </div>
                  <a className="button-login" href="/estatisticas">Logar</a>
                  <p>Já possui conta? <span>Entrar</span></p>
               </div>
               <div className="container-img">
                  <div className="container-right">
                     <p>Entre em nossa comunidade de desenvolvedores</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export default Auth
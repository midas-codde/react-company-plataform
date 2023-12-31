import '../styles/Statistics.scss'
import Error from '../components/monitorError'
import SideBar from "../components/SideBar"
import MsgNotf from "../components/MsgNotf"
import BoxTransactions from "../components/BoxTransactions"
import Balances from '../components/Balances'
import Transactions from '../components/Transactions'
import iconSearch from '../assets/search.svg'
import iconNotf from '../assets/notf.svg'
import iconSettings from '../assets/settings.svg'
import iconUser from '../images/users/ingrid.png'

const Statistics = () => {
   return (
      <>
         <Error />
         <SideBar />
         <div className="sttContainer">
            <div className="sttContainer-top">
               <div className="topInfo">
                  <div className="topInfo-left">
                     <h2>Estatísticas</h2>
                     <h1>Olá, Ingrid</h1>
                     <h3>Confira as estatísticas de hoje!</h3>
                  </div>
                  <div className="topInfo-right">
                     <div className="search-container">
                        <img src={iconSearch} alt="" />
                        <input type="search" name="search" placeholder="Procurar" id="" />
                     </div>
                     <div className="btn-opt">
                        <img src={iconSettings} alt="" />
                     </div>
                     <div className="btn-notf">
                        <img src={iconNotf} alt="" />
                     </div>
                     <div className="icon-user">
                        <img src={iconUser} alt="" />
                     </div>
                     <div className="btn-msg">Mensagem</div>
                     <div className="btn-sinc">Sincronizar</div>
                  </div>
               </div>
               <div className="topMsg">
                  <h2>Mensagens</h2>
                  <div className="topMsg-container">
                     <MsgNotf
                        img="../src/images/users/arthur-gerente.jpg"
                        name="Arthur"
                        office="Gerente"
                        msg="Por favor, verifique as alterações que o carlos fez hoje!"
                     />
                     <MsgNotf
                        img="../src/images/users/lucas-designer.jpg"
                        name="Lucas"
                        office="Design"
                        msg="Oii, Ingrid. Preciso de uma paleta de cor nova pro próximo projeto. O Chef me disse que as cores tem que ser quente, tipo vermelho e etc."
                     />
                     <MsgNotf
                        img="../src/images/users/amanda-rh.jpg"
                        name="Amanda"
                        office="Recursos Humanos"
                        msg="As folhas de pagamento já foram enviadas para o seu email."
                     />
                     <MsgNotf
                        img="../src/images/users/jose-dev.jpg"
                        name="José"
                        office="Desenvolvedor"
                        msg="Estou com dificuldade no sistema que o Chef mandou fazer, pode me ajudar?"
                     />
                     <MsgNotf
                        img="../src/images/users/arthur-gerente.jpg"
                        name="Arthur"
                        office="Gerente"
                        msg="Por favor, verifique as alterações que o carlos fez hoje!"
                     />
                     <MsgNotf
                        img="../src/images/users/lucas-designer.jpg"
                        name="Lucas"
                        office="Design"
                        msg="Oii, Ingrid. Preciso de uma paleta de cor nova pro próximo projeto. O Chef me disse que as cores tem que ser quente, tipo vermelho e etc."
                     />
                     <MsgNotf
                        img="../src/images/users/amanda-rh.jpg"
                        name="Amanda"
                        office="Recursos Humanos"
                        msg="As folhas de pagamento já foram enviadas para o seu email."
                     />
                     <MsgNotf
                        img="../src/images/users/jose-dev.jpg"
                        name="José"
                        office="Desenvolvedor"
                        msg="Estou com dificuldade no sistema que o Chef mandou fazer, pode me ajudar?"
                     />
                     <MsgNotf
                        img="../src/images/users/arthur-gerente.jpg"
                        name="Arthur"
                        office="Gerente"
                        msg="Por favor, verifique as alterações que o carlos fez hoje!"
                     />
                     <MsgNotf
                        img="../src/images/users/lucas-designer.jpg"
                        name="Lucas"
                        office="Design"
                        msg="Oii, Ingrid. Preciso de uma paleta de cor nova pro próximo projeto. O Chef me disse que as cores tem que ser quente, tipo vermelho e etc."
                     />
                     <MsgNotf
                        img="../src/images/users/amanda-rh.jpg"
                        name="Amanda"
                        office="Recursos Humanos"
                        msg="As folhas de pagamento já foram enviadas para o seu email."
                     />
                     <MsgNotf
                        img="../src/images/users/jose-dev.jpg"
                        name="José"
                        office="Desenvolvedor"
                        msg="Estou com dificuldade no sistema que o Chef mandou fazer, pode me ajudar?"
                     />
                  </div>
               </div>
            </div>
            <div className="sttContainer-center">
               <Balances />
               <Transactions />
            </div>
            <div className="sttContainer-bottom">
               <BoxTransactions
                  name="Receita de hoje"
                  value="$37,400.35"
                  percentage="%7,5"
                  baseValue="30,200.25"
               />
               <BoxTransactions
                  name="Transações"
                  value="376"
                  percentage="%55"
                  baseValue="245"
               />
               <BoxTransactions
                  name="Média transação"
                  value="$450.20"
                  percentage="%22"
                  baseValue="354.20"
               />
               <BoxTransactions
                  name="Cupom de desconto"
                  value="$99,220.30"
                  percentage="%12"
                  baseValue="65,254.20"
               />
            </div>
         </div>
      </>
   )
}

export default Statistics
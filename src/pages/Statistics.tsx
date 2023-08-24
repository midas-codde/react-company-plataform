import SideBar from "../components/SideBar"
import '../styles/Statistics.scss'
import iconSearch from '../assets/search.svg'
import iconNotf from '../assets/notf.svg'
import iconSettings from '../assets/settings.svg'
import iconUser from '../images/users/ingrid.png'

const Statistics = () => {
   return (
      <>
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
               <div className="topMsg"></div>
            </div>
            <div className="sttContainer-center"></div>
            <div className="sttContainer-bottom"></div>
         </div>
      </>
   )
}

export default Statistics
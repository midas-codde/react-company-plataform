import '../styles/SideBar.scss'
import Logo from '../images/midas-logoBG-black.png'
import Dashboard from '../assets/dashboard.svg'
import Tables from '../assets/tables.svg'
import Wallet from '../assets/wallet.svg'
import Employees from '../assets/employees.svg'
import Chat from '../assets/chat.svg'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const SideBar = () => {
   const location = useLocation();

   const [closeMenu, setCloseMenu] = useState(false);

   const handleCloseMenu = () => {
      setCloseMenu(!closeMenu);
   }
   return (
      <>
         <div className={closeMenu === false ? "side-bar" : "side-bar active"}>
            <div className={closeMenu === false ? "btnOpt" : "btnOpt active"} onClick={() => {
               handleCloseMenu()
            }}>
               <div className="btnTrigger"></div>
               <div className="btnMenu"></div>
            </div>
            <div className="logo-container">
               <img src={Logo} alt="logo" />
            </div>
            <div className="side-bar-routes">
               <a href='/estatisticas' className={location.pathname === "/estatisticas" ? "active" : ""}>
                  <img src={Dashboard} alt="dashboard" />
                  <p>Estatísticas</p>
               </a>
               <a href='/tabelas' className={location.pathname === "/tabelas" ? "active" : ""}>
                  <img src={Tables} alt="tables" />
                  <p>Tabelas</p>
               </a>
               <a href='/compras' className={location.pathname === "/compras" ? "active" : ""}>
                  <img src={Wallet} alt="wallet" />
                  <p>Compras</p>
               </a>
               <a href='/funcionarios' className={location.pathname === "/funcionarios" ? "active" : ""}>
                  <img src={Employees} alt="employees" />
                  <p>Funcionários</p>
               </a>
               <a href='/chat' className={location.pathname === "/chat" ? "active" : ""}>
                  <img src={Chat} alt="chat" />
                  <p>Chat</p>
               </a>
            </div>
            <div className="side-bar-bottom">
               <h2>PÁGINA DE CONTAS</h2>
               <a className='perfil' href="#">Perfil</a>
               <a className='logar' href="/">Logar</a>
            </div>
         </div>
      </>
   )
}

export default SideBar
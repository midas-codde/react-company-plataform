import SideBar from "../components/SideBar"
import Error from '../components/monitorError'
import "../styles/Chat.scss"
import ChatUser from "../components/ChatUser"
import SearchSVG from "../assets/search.svg"


const Chat = () => {
   return (
      <>
         <Error />
         <SideBar />
         <div className="chatContainer">
            <div className="chatContainer-container">
               <div className="chatContainer-left">
                  <div className="chatContainer-top">
                     <div className="userIcon"></div>
                  </div>
                  <div className="chatContainer-input">
                     <img src={SearchSVG} alt="" />
                     <input type="text" placeholder="Procurar" name="" id="" />
                  </div>
               </div>
               <div className="chatContainer-right">
                  <ChatUser name="Lucas" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Chat
import SideBar from "../components/SideBar"
import Error from '../components/monitorError'
import "../styles/Chat.scss"
import ChatUser from "../components/ChatUser"


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
                     <input type="text" placeholder="Procurar" name="" id="" />
               </div>
               <div className="chatContainer-right">
                  <ChatUser name="Arthur" />
               </div>
            </div>
         </div>
      </>
   )
}

export default Chat
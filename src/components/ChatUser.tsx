import "../styles/Chat.scss"
import online from '../assets/onlineCircle.svg'

const ChatUser = ({name}) => {
   return (
      <>
         <div className="chatUser-container">
            <div className="chatUser-name">
               <img src={online} alt="" />
               <h2>{name}</h2>
            </div>
            <div className="chatUser-box">
               
            </div>
         </div>
      </>
   )
}

export default ChatUser
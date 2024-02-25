import "../styles/Chat.scss"
import online from '../assets/onlineCircle.svg'
import imgLucas from '../images/users/lucas-designer.jpg'

const ChatUser = ({ name }) => {
   return (
      <>
         <div className="chatUser-container">
            <div className="chatUser-name">
               <img src={online} alt="" />
               <h2>{name}</h2>
            </div>
            <div className="chatUser-box">
               <div className="chatUser-msg">
                  <div className="chatUser-img">
                     <img src={imgLucas} alt="" />
                  </div>
                  <p>Oie, Ingrid. Preciso de uma paleta de cor nova pro próximo projeto. O Chef me disse que as cores têm que ser quentes, tipo vermelho e etc. Alguma sugestão?</p>
               </div>
            </div>
            <div className="chatUser-info">
               
            </div>
         </div>
      </>
   )
}

export default ChatUser
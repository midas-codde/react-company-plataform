import online from '../assets/onlineCircle.svg'
import '../styles/Statistics.scss'

const MsgNotf = ({img, name, office, msg}) => {
   return (
      <>
         <div className="msgBox">
            <div className="msgBox-top">
               <div className="msgBox-img"><img src={img} alt="" /></div>
               <p
                  className="msgBox-name">{name}
                  <p className="msgBox-office">{office}</p>
               </p>
               <img src={online} className="iconOnline" alt="" />
            </div>
            <div className="msgBox-bottom">
               <div className="msgBox-line"></div>
               <p className="msgBox-msg">{msg}</p>
               <a href="#" className="msgBox-btn"><p>Responder</p></a>
            </div>
         </div>
      </>
   )
}

export default MsgNotf
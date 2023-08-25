import online from '../assets/onlineCircle.svg'
import '../styles/Statistics.scss'

const MsgNotf = (props) => {
   return (
      <>
         <div className="msgBox">
            <div className="msgBox-top">
               <div className="msgBox-img"><img src={props.img} alt="" /></div>
               <p
                  className="msgBox-name">{props.name}
                  <p className="msgBox-office">{props.office}</p>
               </p>
               <img src={online} className="iconOnline" alt="" />
            </div>
            <div className="msgBox-bottom">
               <div className="msgBox-line"></div>
               <p className="msgBox-msg">{props.msg}</p>
               <a href="#" className="msgBox-btn"><p>Responder</p></a>
            </div>
         </div>
      </>
   )
}

export default MsgNotf
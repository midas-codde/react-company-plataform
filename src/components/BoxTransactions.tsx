import iconCard from "../assets/iconCard.svg"
import arrowUp from "../assets/arrow-up.svg"
import '../styles/Statistics.scss'

const BoxTransactions = ({name, value, percentage, baseValue}) => {
   return (
      <>
         <div className="BoxTransactions-container">
            <div className="BoxTransactions-icon">
               <img src={iconCard} alt="" />
            </div>
            <p className="name">
               {name}
            </p>
            <p className="value">
               {value}
            </p>
            <p className="percentage">
               <img src={arrowUp} alt="" />
               {percentage}
            </p>
            <p className="baseValue">
               de {baseValue}
            </p>
         </div>
      </>
   )
}

export default BoxTransactions

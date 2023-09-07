import { useState } from 'react'
import '../styles/Statistics.scss'
import BalancesGraph1 from '../components/BalancesGraph1'
import BalancesGraph2 from '../components/BalancesGraph2'
import BalancesGraph3 from '../components/BalancesGraph3'

const Balances = () => {
   const [value, setValue] = useState(1)

   const getValue = (props) => {
      setValue(props)
   }

   const renderGraph = () => {
      switch (value) {
         case 1:
            return <BalancesGraph1 />
         case 2:
            return <BalancesGraph2 />
         case 3:
            return <BalancesGraph3 />
      }
   }

   return (
      <>
         <div className="balancesBox">
            <div className="balancesBox-top">
               <h2>Saldos por tempo</h2>
               <p>Aqui você tem detalhes sobre o saldo</p>
               <div className="balancesBox-input">
                  <div className="input" onClick={() => getValue(1)}>
                     <input className={value === 1 ? "active":" "} type="radio" name="rad" id="rad1" />
                     <p>12 meses</p>
                  </div>
                  <div className="input" onClick={() => getValue(2)}>
                     <input className={value === 2 ? "active":" "} type="radio" name="rad" id="rad2" />
                     <p>20 dias</p>
                  </div>
                  <div className="input" onClick={() => getValue(3)}>
                     <input className={value === 3 ? "active":" "} type="radio" name="rad" id="rad3" />
                     <p>7 dias</p>
                  </div>
               </div>
            </div>
            <div className="balancesBox-center">
               <div className="balancesBox-numbers">
                  <div className="number">
                     <p>1000</p>
                     <div className="box-line"></div>
                  </div>
                  <div className="number">
                     <p>800</p>
                     <div className="box-line"></div>
                  </div>
                  <div className="number">
                     <p>600</p>
                     <div className="box-line"></div>
                  </div>
                  <div className="number">
                     <p>200</p>
                     <div className="box-line"></div>
                  </div>
                  <div className="number">
                     <p>100</p>
                     <div className="box-line"></div>
                  </div>
                  <div className="number">
                     <p>0</p>
                     <div className="box-line"></div>
                  </div>
               </div>
               <div className="balancesBox-values">
                  {renderGraph()}
               </div>
            </div>
         </div>
      </>
   )
}

export default Balances

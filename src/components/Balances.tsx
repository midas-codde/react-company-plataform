import '../styles/Statistics.scss'
import BalancesGraph1 from '../components/BalancesGraph1'

const Balances = () => {
   return (
      <>
         <div className="balancesBox">
            <div className="balancesBox-top">
               <h2>Saldos por tempo</h2>
               <p>Aqui você tem detalhes sobre o saldo</p>
               <div className="balancesBox-input">
                  <div className="input">
                     <input type="radio" name="rad" id="rad1" />
                     <p>12 meses</p>
                  </div>
                  <div className="input">
                     <input type="radio" name="rad" id="rad2" />
                     <p>30 dias</p>
                  </div>
                  <div className="input">
                     <input type="radio" name="rad" id="rad3" />
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
                  <BalancesGraph1 />
               </div>
            </div>
         </div>
      </>
   )
}

export default Balances

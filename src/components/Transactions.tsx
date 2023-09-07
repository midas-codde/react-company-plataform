import { useState } from 'react'
import '../styles/Statistics.scss'
import iconInvision from '../images/icons/invisa-icon.png'
import iconJira from '../images/icons/jira-icon.png'
import iconMaster from '../images/icons/mastercard-icon.png'
import iconSlack from '../images/icons/slack-icon.png'
import iconSpotify from '../images/icons/spotify-icon.png'
import iconVisa from '../images/icons/visa-icon.png'

const Transactions = () => {

   const [value, setValue] = useState(1)

   const getValue = (props) => {
      setValue(props)
   }
   return (
      <div className="transactionsBox">
         <div className="transactionsBox-Top">
            <h2>Transações recentes</h2>
            <p>Esses são os detalhes sobre as últimas transações</p>
            <div className="transactionsBox-input">
               <div className="input" onClick={() => getValue(1)}>
                  <input className={value === 1 ? "active":" "} type="radio" name="rad2" id="rad1" />
                  <p>Todas</p>
               </div>
               <div className="input big" onClick={() => getValue(2)}>
                  <input className={value === 2 ? "active":" "}  type="radio" name="rad2" id="rad2" />
                  <p>Monitoradas</p>
               </div>
               <div className="input big" onClick={() => getValue(3)}>
                  <input className={value === 3 ? "active":" "}  type="radio" name="rad2" id="rad3" />
                  <p>Não monitoradas</p>
               </div>
            </div>
            <table className="table-thead">
               <thead>
                  <tr>
                     <th>Transações</th>
                     <th>Valor</th>
                     <th>Data</th>
                     <th>Conta</th>
                     <th>Monitoramento</th>
                  </tr>
               </thead>
            </table>
         </div>
         <div className="transactionsBox-Bottom">
            <table>
               <tbody>
                  <tr className={value === 3? "disabled":" "}>
                     <td><div className="acc"><img src={iconSpotify} alt="" />Spotify</div></td>
                     <td>$2,500</td>
                     <td>22 Jan</td>
                     <td><div className="acc"><img src={iconMaster} alt="" /><p className="acc-name">Master card</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="monitored">Sim</p></td>
                  </tr>
                  <tr className={value === 2 ? "disabled":" "}>
                     <td><div className="acc"><img src={iconJira} alt="" />Jira</div></td>
                     <td>$5,200</td>
                     <td>14 Set</td>
                     <td><div className="acc"><img src={iconVisa} alt="" /><p className="acc-name">Visa</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="noMonitored">Não</p></td>
                  </tr>
                  <tr className={value === 2 ? "disabled":" "}>
                     <td><div className="acc"><img src={iconSlack} alt="" />Slack</div></td>
                     <td>$3,400</td>
                     <td>04 Ago</td>
                     <td><div className="acc"><img src={iconVisa} alt="" /><p className="accname">Visa</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="noMonitored">Não</p></td>
                  </tr>
                  <tr className={value === 3? "disabled":" "}>
                     <td><div className="acc"><img src={iconInvision} alt="" />Invision</div></td>
                     <td>$1,000</td>
                     <td>27 Fev</td>
                     <td><div className="acc"><img src={iconMaster} alt="" /><p className="acc-name">Master card</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="monitored">Sim</p></td>
                  </tr>
                  <tr className={value === 3? "disabled":" "}>
                     <td><div className="acc"><img src={iconSpotify} alt="" />Spotify</div></td>
                     <td>$2,900</td>
                     <td>18 Dez</td>
                     <td><div className="acc"><img src={iconMaster} alt="" /><p className="acc-name">Master card</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="monitored">Sim</p></td>
                  </tr>
                  <tr className={value === 3? "disabled":" "}>
                     <td><div className="acc"><img src={iconJira} alt="" />Jira</div></td>
                     <td>$7,120</td>
                     <td>20 Mar</td>
                     <td><div className="acc"><img src={iconVisa} alt="" /><p className="acc-name">Visa</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="monitored">Sim</p></td>
                  </tr>
                  <tr className={value === 2 ? "disabled":" "}>
                     <td><div className="acc"><img src={iconSlack} alt="" />Slack</div></td>
                     <td>$4,890</td>
                     <td>12 Out</td>
                     <td><div className="acc"><img src={iconMaster} alt="" /><p className="acc-name">Master card</p><p className="exp">Expira em 06 2016</p></div></td>
                     <td><p className="noMonitored">Não</p></td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Transactions

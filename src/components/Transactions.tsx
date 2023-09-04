import '../styles/Statistics.scss'

const Transactions = () => {
   return (
      <div className="transactionsBox">
         <div className="transactionsBox-Top">
            <h2>Transações recentes</h2>
            <p>Esses são os detalhes sobre as últimas transações</p>
            <div className="transactionsBox-input">
               <div className="input">
                  <input type="radio" name="rad" id="rad1" checked />
                  <p>12 meses</p>
               </div>
               <div className="input">
                  <input type="radio" name="rad" id="rad2" />
                  <p>20 dias</p>
               </div>
               <div className="input">
                  <input type="radio" name="rad" id="rad3" />
                  <p>7 dias</p>
               </div>
            </div>
         </div>


         {/* <table>
            <tr>
               <th>Company</th>
               <th>Contact</th>
               <th>Country</th>
            </tr>
            <tr>
               <td>Alfreds Futterkiste</td>
               <td>Maria Anders</td>
               <td>Germany</td>
            </tr>
            <tr>
               <td>Centro comercial Moctezuma</td>
               <td>Francisco Chang</td>
               <td>Mexico</td>
            </tr>
         </table> */}
      </div>
   )
}

export default Transactions

import '../styles/Statistics.scss'

const Transactions = () => {
   return (
      <div className="transactionsBox">
         <div className="transactionsBox-Top">
            <h2>Transações recentes</h2>
            <p>Esses são os detalhes sobre as últimas transações</p>
            <div className="transactionsBox-input">
               <div className="input">
                  <input type="radio" name="rad2" id="rad1" />
                  <p>12 meses</p>
               </div>
               <div className="input">
                  <input type="radio" name="rad2" id="rad2" />
                  <p>20 dias</p>
               </div>
               <div className="input">
                  <input type="radio" name="rad2" id="rad3" />
                  <p>7 dias</p>
               </div>
            </div>
            <table className="table-thead">
               <thead>
                  <tr>
                     <th>Transações</th>
                     <th>Valor</th>
                     <th>Data</th>
                     <th>Conta</th>
                  </tr>
               </thead>
            </table>
         </div>
         <div className="transactionsBox-Bottom">
            <table>
               <tbody>
                  <tr>
                     <td>Alfreds Futterkiste</td>
                     <td>Maria Anders</td>
                     <td>Germany</td>
                     <td>Germany</td>
                  </tr>
                  <tr>
                     <td>Centro comercial Moctezuma</td>
                     <td>Francisco Chang</td>
                     <td>Mexico</td>
                     <td>Mexico</td>
                  </tr>
                  <tr>
                     <td>Alfreds Futterkiste</td>
                     <td>Maria Anders</td>
                     <td>Germany</td>
                     <td>Germany</td>
                  </tr>
                  <tr>
                     <td>Centro comercial Moctezuma</td>
                     <td>Francisco Chang</td>
                     <td>Mexico</td>
                     <td>Mexico</td>
                  </tr>
                  <tr>
                     <td>Centro comercial Moctezuma</td>
                     <td>Francisco Chang</td>
                     <td>Mexico</td>
                     <td>Mexico</td>
                  </tr>
                  <tr>
                     <td>Centro comercial Moctezuma</td>
                     <td>Francisco Chang</td>
                     <td>Mexico</td>
                     <td>Mexico</td>
                  </tr>
                  <tr>
                     <td>Centro comercial Moctezuma</td>
                     <td>Francisco Chang</td>
                     <td>Mexico</td>
                     <td>Mexico</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default Transactions

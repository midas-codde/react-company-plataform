import SideBar from "../components/SideBar"
import Error from '../components/monitorError'

const Employees = () => {
   return (
      <>
         <Error />
         <SideBar />
         <h1 className="title">Employees</h1>
      </>
   )
}

export default Employees
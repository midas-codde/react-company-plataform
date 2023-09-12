import SideBar from "../components/SideBar"
import Error from '../components/monitorError'

const Chat = () => {
   return (
      <>
         <Error />
         <SideBar />
         <h1 className="title">Chat</h1>
      </>
   )
}

export default Chat
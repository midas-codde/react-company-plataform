import SideBar from "../components/SideBar"
import Error from '../components/monitorError'
import "../styles/Chat.scss"

import { useCallback, useState } from "react"

const Chat = () => {
   const [msg, setMsg] = useState<string[]>([]);

   const handleInputKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
      if (e.key === 'Enter') {
         if (e.currentTarget.value.trim().length === 0) return

         const value = e.currentTarget.value;

         e.currentTarget.value = ""

         setMsg((oldMsg) => {
            return [...oldMsg, value]
         });
      }
   }, []);

   return (
      <>
         <Error />
         <SideBar />

         <input
            className="inputText"
            onKeyDown={handleInputKeyDown}
         />

         <ul>
            {msg.map((value) => {
               return <li key={value}>{value}</li>
            })}
         </ul>

      </>
   )
}

export default Chat
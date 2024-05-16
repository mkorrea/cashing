import { onAuthStateChanged } from "firebase/auth"
import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { auth } from "../firebaseConnections"

export default function Private ({ children }) {

   const [ loading, setLoading ] = useState(true)
   const [ signed, setSigned ] = useState(false)

   useEffect(()=>{
      async function checkLogin(){
         const unsub = onAuthStateChanged(auth, (user)=>{
            if(user){
               setLoading(false)
               setSigned(true)
            } else {
               setLoading(true)
               setSigned(false)
            }
         })
      }
      checkLogin()
   },[])
   
   if(loading) {
      return(
         <div></div>
      )
   }
   
   if(signed) {
      return <Navigate to='/planilhas'/>
   }
   
   return children
}

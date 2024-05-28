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
               const userData = {
                  uid: user.uid,
                  email: user.email
               }
               localStorage.setItem( '@userDetail', JSON.stringify(userData))
               setLoading(false)
               setSigned(true)
            }  else {
               setLoading(false)
               setSigned(false)
            }
         })
         return () => unsub();
      }
      checkLogin()
   },[])
   
   if(loading) {
      return(
         <div className="tabela">
         
         <div className="loading">
            <img src={require('../assets/icons/logo-main-color.png')} alt="loading"/>
         </div>
      </div>
      )
   }
   
   if(!signed) {
      return <Navigate to='/login'/>
   }
   
   return children
}

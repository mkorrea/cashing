// import React, { createContext, useState, useEffect } from 'react';

// const UserContext = createContext();

// export const UserProvider = ({ children }) => {
//     const [user, setUser] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: ""
//      });

//      const updateUser = (newUserData) => {
//         setUser((prevUser) => ({ ...prevUser, ...newUserData }));
//       };


//       useEffect( () => {
//         const userStorage = localStorage.getItem('user')
//         if (userStorage) {
//            setUser(JSON.parse(userStorage))
//         }
//      }, [])
//       useEffect( () => {
//         localStorage.setItem('user', JSON.stringify(user))
//       }, [user])


//      return (
//         <UserContext.Provider value={ {user, updateUser} }>
//             { children }
//         </UserContext.Provider>
//      )
// }

// export default UserContext
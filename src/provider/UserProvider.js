import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import fire from "./../Fire";
import getAPI from "../util/getAPI"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [userID, setUserID] = useState(null);
    const API = getAPI();

   useEffect(() => {
    const getUserID = async (email) => {
      try {
        let Id = await axios.get(`${API}/users/search/${email}`)
        setUserID(Id.data.payload[0].id)
      } catch (error) {
        console.log(error)
      }
    }
    fire.auth().onAuthStateChanged(userAuth => {
      if(userAuth !== null) {
        getUserID(userAuth.email)
      }
    });
   }, []);

    return (
      <UserContext.Provider value={{userID}}>
        {children}
      </UserContext.Provider>
    )
}
export default UserProvider;
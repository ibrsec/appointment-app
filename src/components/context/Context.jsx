

import {appointmentData,doctorData} from "../../helper/data.jsx";
import React, { createContext, useState } from 'react'

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {

    // const [modalShow, setModalShow] = useState(false);
    
    const [allData,setAllData] = useState({doctorData});
    const [appointmentDataAll,setAppointmentDataAll] = useState(appointmentData );
  return (
    <GlobalContext.Provider value={{allData,setAllData,appointmentDataAll,setAppointmentDataAll}}>
        {children}
    </GlobalContext.Provider>
  )
}

 
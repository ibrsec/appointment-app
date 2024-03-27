import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./App.css";
import Header from "./components/header/Header";
import Doctors from "./components/doctors/Doctors";
import DoctorCard from "./components/doctorCard/DoctorCard";
import MyVerticallyCenteredModal from "./components/modal/MyVerticallyCenteredModal.jsx";

import { useContext } from "react";
import { GlobalContext } from "./components/context/Context";
import Appointments from "./components/appointments/Appointments.jsx";
function App() {
  const { allData } = useContext(GlobalContext);
  // const {modalShow, setModalShow} = useContext(GlobalContext);

  return (
    <div className="App">
      <Header />
      <Doctors>
        {
        allData.doctorData.map((doctor) => {
          return (
            
              <DoctorCard
                key={doctor.id}
                doctorData={doctor}
                // onClick={() => setModalShow(true)}
              /> 
            
          );
        })}
      </Doctors>
      <Appointments />
    </div>
  );
}

export default App;

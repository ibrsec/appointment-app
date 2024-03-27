import React, { useContext } from "react";
import { GlobalContext } from "../context/Context";
import appointmentStyle from './Appointments.module.scss';

const Appointments = () => {
  const { appointmentDataAll, setAppointmentDataAll } =
    useContext(GlobalContext);
 
    const handleDoubleClick = (e) =>{ 
        console.log(
            e.target.closest(".card").querySelector("#consulted2"));
            if(e.target.closest(".card").querySelector("#consulted1").style.display == "none"){
                
                e.target.closest(".card").querySelector("#consulted1").style.display = "inline-block";
                e.target.closest(".card").querySelector("#consulted2").style.display = "inline-block";
            }else{
                e.target.closest(".card").querySelector("#consulted1").style.display = "none";
                e.target.closest(".card").querySelector("#consulted2").style.display = "none";

            }
    }

    const handleDelete = (e) => {
        e.target.closest(".card").remove();
    }
    
  return (
    <section className=" bg-dark-subtle py-5">
      <div className="container ">
        <h1 className="text-center text-danger ">Appointment List</h1>
        <div className="appointment-container row gap-2 shadow-sm">
          {appointmentDataAll.map((item) => {
            return ( 
                <div key={item.id} className={"card col-12 d-flex flex-row align-items-center justify-content-between border-0 " + appointmentStyle.appointmentCard } onDoubleClick={handleDoubleClick} > 
                <span className={appointmentStyle.consulted1} id="consulted1"></span>
                <span className={appointmentStyle.consulted2} id="consulted2">CONSULTED</span>
                  <div className="  d-flex flex-column align-items-center p-3">
                     
                        <p className="text-danger fw-semibold fs-5">{item.patient}</p>
                        <p className="fw-semibold">{item.doctor}</p>  
                  </div>
                  <div className="  d-flex flex-column align-items-start p-3 justify-content-center">
                     
                        <p className="  ">Date: {item.day.toDateString()}</p>
                        <p className=" ">Time: {item.day.getHours()+':'+item.day.getMinutes()+':'+item.day.getSeconds() }</p>  
                  </div>
                  <div className={" fw-bold p-2 rounded-circle " + appointmentStyle.delete} onClick={handleDelete}>❌</div>
                </div> 
            );
          })} 
        </div>
      </div>
    </section>
  );
};

export default Appointments;

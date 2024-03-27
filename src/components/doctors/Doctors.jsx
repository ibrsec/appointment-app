
import { GlobalContext } from "../context/Context";
import doctorsStyle from "./Doctors.module.scss";

import React, { useContext } from 'react'

const Doctors = ( props  ) => {
    const {allData} = useContext(GlobalContext);
    console.log(
        allData
    );
  return (
    <section className={doctorsStyle.doctors+ " bg-dark-subtle py-5"}>
        <div className="container d-flex gap-3 align-items-center justify-content-between flex-wrap">
            {props.children} 
        </div>

    </section>
  )
}

export default Doctors
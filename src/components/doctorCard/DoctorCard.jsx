import { useContext, useState } from "react";
import cardStyle from "./DoctorCard.module.scss";
import MyVerticallyCenteredModal from "../modal/MyVerticallyCenteredModal.jsx";
import { GlobalContext } from "../context/Context.jsx";
import { v4 as uuidv4 } from "uuid";

const DoctorCard = (props) => {
  const { img, name, dep } = props.doctorData;
  const [modalShow, setModalShow] = useState(false);

  const { allData, setAllData } = useContext(GlobalContext);
  const { appointmentDataAll, setAppointmentDataAll } =
    useContext(GlobalContext);
  const [inputValue, setInputValue] = useState("");
  const [dateValue, setDateValue] = useState("");

  const handleChange = (e) => { 
    if (e.target.type === "text") {
      if (!e.target.value.trim()) {
        alert("Enter your Name!!!");
      } else {
        setInputValue(e.target.value.trim());
      }
    } else if (e.target.type === "datetime-local") {
      if (!e.target.value.trim()) {
        alert("Enter a Date!!!");
      } else {
        setDateValue(e.target.value.trim());
      }
    } 
  };
  const submitHandle = (e) => {
    console.log(dateValue);
    console.log(typeof dateValue);
    console.log('kkk',new Date(dateValue));
    e.preventDefault();
    console.log("-----"); 
    setAppointmentDataAll([
      ...appointmentDataAll,
      {
        id: uuidv4(),
        patient: inputValue,
        day: new Date(dateValue),
        consulted: false,
        doctor: e.target.closest("#modal").getAttribute("data-card-name")
      },
    ]);

        console.log('eklenmis hali = ',appointmentDataAll);
        setModalShow(false);
    
  };

  return (
    <>
      <div
        className={cardStyle.deneme + " card shadow"}
        onClick={() => setModalShow(true)}
        data-card-id={props.doctorData.id}
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        <img src={img} className="card-img-top" alt="..." />
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h5 className="card-title fs-6 text-nowrap">{name}</h5>
          </li>
          <li className="list-group-item">{dep}</li>
        </ul>
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        doctordata={props.doctorData.name}
        datacardid={props.doctorData.id}
        onchg={handleChange}
        onsbmt={submitHandle}
        inputValue={inputValue}
        dateValue={dateValue}
      />
    </>
  );
};
export default DoctorCard;

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";
import app from "@/pages/firebase";

const db = getFirestore(app);

export default function Form() {

  const initialValue = {
    historyNumber: "",
    date: "",
    names: "",
    dni: "",
    birthDate: "",
    age: "",
    birthPlace: "",
    background: "",
    gender: "",
    civilStatus: "",
    education: "",
    ocupation: "",
    bloodType: "",
    adress: "",
    district: "",
  };

  const [dato, setDato] = useState(initialValue);

  function obtenerInputs(e) {
    const { name, value } = e.target;
    setDato({ ...dato, [name]: value });
    
  }

  const enviarInfo = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "clinic"), {
        ...dato,
      }).then(() => {
        alert('Data Sent')
        setDato(initialValue)
      })
    } catch (error) {
      console.log(error);
    }

    
  };

  return (
    <div className=" bg-[#FFFF] rounded-lg mt-5 text-[#151727]">
      <form
        onSubmit={enviarInfo}
        id="clinicForm"
        className=" max-w-4xl mr-auto ml-auto"
      >
        <h1 className="p-5 text-center text-xl font-bold">Historia Clinica</h1>

        <div className="flex flex-wrap justify-between p-5">
          <div className="flex flex-row gap-3">
            <label htmlFor="historyNumber">Nº de Historia Clinica:</label>
            <input
              type="text"
              name="historyNumber"
              value={dato.historyNumber}
              onChange={obtenerInputs}
              className="bg-[#F8F7FE]"
              required
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="date">Fecha:</label>
            <input
              type="date"
              name="date"
              value={dato.date}
              onChange={obtenerInputs}
              className="bg-[#F8F7FE]"
              required
            />
          </div>
        </div>
        <div className="flex gap-3 p-5">
          <label htmlFor="names">Apellidos y nombres:</label>
          <input
            type="text"
            name="names"
            value={dato.names}
            onChange={obtenerInputs}
            className="bg-[#F8F7FE] flex flex-grow"
          />
        </div>
        <div className="flex flex-wrap p-5 justify-between">
          <div className="flex flex-row gap-3">
            <label htmlFor="dni">DNI:</label>
            <input
              type="text"
              value={dato.dni}
              onChange={obtenerInputs}
              name="dni"
              className="bg-[#F8F7FE]"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="birthDate">Fecha de Nacimiento:</label>
            <input
              type="date"
              value={dato.birthDate}
              onChange={obtenerInputs}
              name="birthDate"
              className="bg-[#F8F7FE]"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="age">Edad:</label>
            <input
              type="text"
              value={dato.age}
              onChange={obtenerInputs}
              name="age"
              className="bg-[#F8F7FE]"
            />
          </div>
        </div>
        <div className="flex flex-wrap p-5 justify-between">
          <div className="flex flex-row gap-3">
            <label htmlFor="birthPlace">Lugar de nacimiento:</label>
            <input
              type="text"
              value={dato.birthPlace}
              onChange={obtenerInputs}
              name="birthPlace"
              className="bg-[#F8F7FE]"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="background">Lugar de procedencia:</label>
            <input
              type="text"
              value={dato.background}
              onChange={obtenerInputs}
              name="background"
              className="bg-[#F8F7FE]"
            />
          </div>
        </div>
        <div className="flex flex-wrap p-5 justify-between">
          <div className="flex flex-row gap-3">
            <label htmlFor="gender">Sexo:</label>
            <input
              type="text"
              value={dato.gender}
              onChange={obtenerInputs}
              name="gender"
              className="bg-[#F8F7FE] w-20"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="civilStatus">Estado civil:</label>
            <input
              type="text"
              value={dato.civilStatus}
              onChange={obtenerInputs}
              name="civilStatus"
              className="bg-[#F8F7FE]"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="education">Grado instrucción:</label>
            <input
              type="text"
              value={dato.education}
              onChange={obtenerInputs}
              name="education"
              className="bg-[#F8F7FE]"
            />
          </div>
        </div>
        <div className="flex flex-wrap p-5 justify-between">
          <div className="flex flex-row gap-3">
            <label htmlFor="ocupation">Ocupación:</label>
            <input
              type="text"
              value={dato.ocupation}
              onChange={obtenerInputs}
              name="ocupation"
              className="bg-[#F8F7FE]"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="bloodType">Grupo sanguíneo y Factor RH:</label>
            <input
              type="text"
              value={dato.bloodType}
              onChange={obtenerInputs}
              name="bloodType"
              className="bg-[#F8F7FE]"
            />
          </div>
        </div>
        <div className="flex flex-wrap p-5 justify-between">
          <div className="flex flex-row gap-3">
            <label htmlFor="adress">Domicilio:</label>
            <input
              type="text"
              value={dato.adress}
              onChange={obtenerInputs}
              name="adress"
              className="bg-[#F8F7FE] w-80"
            />
          </div>
          <div className="flex flex-row gap-3">
            <label htmlFor="district">Distrito:</label>
            <input
              type="text"
              value={dato.district}
              onChange={obtenerInputs}
              name="district"
              className="bg-[#F8F7FE]"
            />
          </div>
        </div>

        <button className="bg-[#1E3EE0] text-white p-2 rounded-lg text-sm m-5 font-semibold">
          Guardar Historia
        </button>
      </form>
    </div>
  );
}

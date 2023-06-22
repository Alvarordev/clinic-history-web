import Patients from "../patients";
import {collection,doc,getDocs,getFirestore,query,where,} from "firebase/firestore";
import { useEffect, useState } from "react";
import Woman from "@/components/logos/Woman";
import app,{ auth } from "../firebase";

const db = getFirestore(app);
let timeoutId;

export default function Search() {

  const [historys, setHistorys] = useState([]);
  const [searchDNI, setSearchDNI] = useState("");
  const user = auth.currentUser;

  useEffect(() => {
    function debounce(func, delay) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(func, delay);
    }

    async function fetchData() {
      if (searchDNI) {
        const q = query(
          collection(db, "clinic"),
          where("dni", "==", searchDNI)
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());
        setHistorys(data);
      } else {
        setHistorys([]);
      }
    }

    if (searchDNI) {
      debounce(fetchData, 500); // Adjust the delay (in milliseconds) as needed
    } else {
      setHistorys([]);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchDNI]);

  function uppercaseNames(names) {
    const [lastName1, lastName2, firstName1, firstName2] = names.split(" ");
    const capitalizedFirstName = `${firstName1.charAt(0).toUpperCase()}${firstName1.slice(1)}`
    const capitalizedLastName = `${lastName1.charAt(0).toUpperCase()}${lastName1.slice(1)}`
    return `${capitalizedFirstName} ${capitalizedLastName} `;
  }

  function handleSearch(e) {
    setSearchDNI(e.target.value);
  }

  return (
    <Patients>
      <div className="bg-[#FFFF] rounded-lg mt-5 primary-color mb-5">
        <div className="max-w-4xl mr-auto ml-auto flex flex-col justify-center items-center pb-14">
          <h1 className="text-center p-10 text-xl font-bold">
            Buscar Pacientes
          </h1>
          <input
            type="search"
            className="bg-gray-200 rounded-md pl-3 w-96 text-center"
            placeholder="Ingrese DNI del paciente"
            value={searchDNI}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="bg-[#FFFF] rounded-lg mt-5 primary-color ">
          {historys.map((history) => (
            <div key={history.dni} className="bg-[#FFFF] rounded-lg mt-5 primary-color m-10">
                <div className="max-w-4xl mr-auto ml-auto pb-14">
                    <div className="p-5 flex flex-col justify-center items-center">
                        <Woman/>
                        <h2 className=" text-lg font-bold primary-color">{uppercaseNames(history.names)}</h2>
                        <h3>{history.dni}</h3>
                    </div>
                    <div>
                        <div className="flex gap-2">
                            <label>Nombre Completo:</label>
                            <label>{history.names}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Sexo:</label>
                            <label>{history.gender[0].toUpperCase() + history.gender.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Fecha de Nacimiento:</label>
                            <label>{history.birthDate}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Edad:</label>
                            <label>{history.age}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Tipo de Sangre y RH:</label>
                            <label>{history.bloodType.toUpperCase()}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Lugar de Nacimiento:</label>
                            <label>{history.birthPlace[0].toUpperCase() + history.birthPlace.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Procedencia:</label>
                            <label>{history.background[0].toUpperCase() + history.background.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Estado Civil:</label>
                            <label>{history.civilStatus[0].toUpperCase() + history.civilStatus.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Educacion:</label>
                            <label>{history.education[0].toUpperCase() + history.education.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Ocupación:</label>
                            <label>{history.ocupation[0].toUpperCase() + history.ocupation.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Direccion:</label>
                            <label>{history.adress[0].toUpperCase() + history.adress.slice(1)}</label> 
                        </div>
                        <div className="flex gap-2">
                            <label>Distrito:</label>
                            <label>{history.district[0].toUpperCase() + history.district.slice(1)}</label> 
                        </div>
                    </div>
                </div>
              
            </div>
          ))}
        </div>
    </Patients>
  );
}




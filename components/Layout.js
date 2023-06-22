import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Nav from "./Nav";
import { auth } from "@/pages/firebase";
import { useAuthState} from 'react-firebase-hooks/auth'
import { useEffect, useState } from "react";

export default function Layaout({ children }) {
  const [user, setUser] = useAuthState(auth)
  const googleAuth = new GoogleAuthProvider();
  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Observa los cambios de autenticación
    const unsubscribe = auth.onAuthStateChanged((users) => {
      setUsers(users);
    });
    return () => unsubscribe();
  }, []);

  const signUpWithGoogle = () => {
    signInWithPopup(auth, googleAuth)
    .then((response) => {
      sessionStorage.setItem('Token', response.user.accessToken)
      console.log(response.user)
    })
  };

  const signOutWithGoogle = () =>{
    signOut(auth)
      .then(() => {
        alert('saliste de la sesion')
    }).catch((error) => {
      console.log(error)
    });
  }
  
  
  return(
    
      <div className="bg-bgGray min-h-screen relative">
      <div className="flex">
        {users && <p>UID: {users.uid}</p>}
        <Nav />
        <div className="flex flex-col w-full">
          <div className="bg-[#FFFF] h-12 flex items-center justify-between pl-8 pr-8">
            <label className=" text-md">Bienvenidos</label>
            <div className="flex flex-row gap-3">
            {user ? 'Bienvenido, '+ user.displayName : ''}
            <button onClick={signUpWithGoogle} className=" bg-[#1E3EE0] rounded-md p-1 text-white pr-2 pl-2 text-sm">login</button>
            <button onClick={signOutWithGoogle} className=" bg-[#1E3EE0] rounded-md p-1 text-white pr-2 pl-2 text-sm">logOut</button>
            </div>
            
          </div>
          <div className="bg-[#F8F7FE] flex-grow p-4">{children}</div>
        </div>
        
      </div>
      </div>
    
  );
}

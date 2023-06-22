import Layaout from "@/components/Layout";
import Tables from "@/components/Tables";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Patients({children}) {
  
  const router = useRouter();
  const { pathname } = router;
  const inactiveLink = 'relative text-[#939299] flex font-semibold pb-4';
  const activeLink = inactiveLink+ ' primary-color ';
  const inactiveBar = 'bottom-0 absolute h-[5px] w-full flex flex-col justify-end rounded-tr-lg rounded-tl-lg ';
  const activeBar = inactiveBar + 'bg-[#F8C5DD]';
  
  return (
    <Layaout>
      <nav className=" flex flex-row gap-5 p-3 ">
        <div className={pathname === '/patients/search' ? activeLink : inactiveLink}>
          <Link href={'/patients/search'} className=" ">
            Buscar Paciente
          </Link>
          <span className={pathname === '/patients/search' ? activeBar : inactiveBar}></span>
        </div>
        <div className={pathname.includes('/patients/new') ? activeLink : inactiveLink}>
          <Link href={'/patients/new'} >
            Agregar Paciente
          </Link>
          <span className={pathname.includes('/patients/new') ? activeBar : inactiveBar}></span>
        </div>
      </nav>
      {children}
    </Layaout>
  );
}

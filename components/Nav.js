import { useRouter } from "next/router";
import Dashboard from "./logos/Dashboard";
import Users from "./logos/Users";
import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
import Attentions from "./logos/Attentions";

export default function Nav() {
  const router = useRouter();
  const { pathname } = router;
  const inactiveLink = "flex flex-col items-center gap-1 hover:text-[#F8C5DD] pr-5";
  const activeLink = inactiveLink + " text-[#F8C5DD]";
  const inactiveBar =  "absolute h-full w-[5px] flex flex-col  justify-end rounded-bl-md rounded-tl-md";
  const activeBar = inactiveBar + " right-0 bg-[#F8C5DD] ";

  return (
    <aside className="text-[#92959F] primary-bg min-h-screen flex flex-col">
      <Image
        src={logo}
        alt="logo"
        className="h-16 w-16 mr-auto ml-auto mt-5 mb-20"
      />
      <nav className=" flex flex-col text-md">
        <div className="relative flex justify-center  mb-3 mt-3">
          <Link
            href={"/"}
            className={pathname === "/" ? activeLink : inactiveLink}
          >
            <div className="pl-4">
              <Dashboard />
            </div>
            <span className="pl-4">Dashboard</span>
          </Link>
          <span className={pathname === "/" ? activeBar : inactiveBar}></span>
        </div>

        <div className="relative flex justify-center  mb-3 mt-3">
          <Link
            href={"/patients"}
            className={
              pathname.includes("/patients") ? activeLink : inactiveLink
            }
          >
            <div className="pl-4">
              <Users />
            </div>
            <span className="pl-4">Pacientes</span>
          </Link>
          <span
            className={pathname.includes("/patients") ? activeBar : inactiveBar}
          ></span>
        </div>

        <div className="relative flex justify-center mb-3 mt-3">
          <Link
            href={"/attentions"}
            className={
              pathname.includes("/attentions") ? activeLink : inactiveLink
            }
          >
            <div className="pl-4">
              <Attentions />
            </div>
            <span className="pl-4">Atenciones</span>
          </Link>
          <span
            className={
              pathname.includes("/attentions") ? activeBar : inactiveBar
            }
          ></span>
        </div>
      </nav>
    </aside>
  );
}

//

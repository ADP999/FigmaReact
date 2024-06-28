import { FaBell} from "react-icons/fa";
import logo from "../assets/images/atlassianimg.png"
import { VscChevronDown, VscComment } from "react-icons/vsc";
import {  PiHandCoinsThin } from "react-icons/pi";
import { RiBriefcase3Line } from "react-icons/ri";
const NavBar = () => {
    return (
    <div className="relative w-[1728px] h-[109px] border-[1px] ">
    <div className="flex justify-between items-center w-[1664px] h-[61px] ml-[40px] mt-[24px] border-[1px] ">
      <div className="flex items-center">
        <h1 className="text-orange-500 text-[20px]">Logo</h1>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell className="h-[32px] w-[32px]" />
        <img src={logo} className="h-[40px] w-[40px] rounded-full" alt="Profile" />
        <VscChevronDown className="w-[20px] h-[20px]" />
      </div>
    </div>

    <div className="absolute flex justify-between items-center border-[1px] border-neutral-300 w-[538px] h-[74px] top-[17px] left-[595px] rounded-[35px] px-4">
      <div className="flex items-center space-x-2 text-slate-500 text-center font-sans text-[20px] font-medium leading-[27px]">
        <RiBriefcase3Line className="w-[18px] h-[18.46px]" />
        <span>Jobs</span>
      </div>
      <div className="flex items-center space-x-2 text-slate-500 text-center font-sans text-[20px] font-medium leading-[27px]">
        <VscComment className="w-[18px] h-[18.46px]" />
        <span>Messages</span>
      </div>
      <div className="flex items-center space-x-2 text-slate-500 text-center font-sans text-[20px] font-medium leading-[27px]">
        <PiHandCoinsThin className="w-[24px] h-[24px]" />
        <span>Payments</span>
      </div>
    </div>
  </div>

);
}

export default NavBar
import React from 'react'
import { FaAccessibleIcon, FaArrowDown, FaCoins, FaLocationArrow } from 'react-icons/fa'
import { FaArrowDown19, FaLocationDot } from 'react-icons/fa6'
import Skills from './Skills'
import logo from '../assets/images/atlassianimg.png'
import Delete from './Delete'

const jobTile="Senior Software Developer"
const location="Delaware, USA"
const salary="$300k-$400k"
const JobPreview = () => {
  return (
    <div className="w-[1728px] h-[1152px] relative">
      <Delete/>
       <div className="relative w-[623px] h-[98px] top-[36px] left-[100px] border-[1px] ">
           <div className="flex justify-between w-[623px] h-[47px] border-[1px] ">
               <h1 className="flex items-center space-x-1  text-[35px] font-semibold ">{jobTile}</h1> 
               <h1 className="flex items-center space-x-1 text-[14px] text-slate-500 ">posted 2 days ago</h1>
               <div  className=" flex flex-row  space-x-1 text-[14px] w-[60px] h-[27px] mt-[11px] border-[1px]  rounded-2xl border-green-600">
                <div className="w-[6px] h-[6px] flex mt-[9px] ml-[6px] bg-green-600 rounded-full border-[1px] border-green-600"></div>
                <span className="text-green-700 ">Open</span>
               </div>
           </div>
           <div></div>

           <div className="relative w-[363px] h-[27px] border-[1px]  flex  text-slate-500 mt-[23px]">
            <div className="flex w-[159px] h-[27px] border-[1px] ">
             <FaLocationDot className="mt-[4px]"></FaLocationDot>
                 <span className="left-[12px]  relative">{location}</span>
            </div>    
              <div className="w-[159px] h-[27px] border-[1px] flex justify-evenly absolute right-[0px]">
              <FaCoins className="mt-[4px]"></FaCoins>
              <span>{salary}</span>
              </div>
       </div>
    </div>
    <Skills/>
    <div className="w-[526px] h-[401px] left-[100px] top-[379px] absolute border-[1px]  ">
        <span className="heading-1">About the job</span>
        <ul className="heading-2 list-decimal list-inside">
          <li className="">Handle the UI/UX research design</li>
          <li>work on researching on latest two applications designs</li>
          <li>work on conceptualizing and visualizing</li>
          <li>work on creating graphics content and other graaphic related works</li>
        </ul>
        <span>Benefits</span>
        <ul className="heading-2 list-disc list-inside ml-[10px]"><li>health insurance</li>
        <li>Provident Fund</li>
        </ul>
        <span>Schedule</span>
        <ul className="heading-2 list-disc list-inside ml-[10px]"><li>Day shift</li></ul>
        <span>Supplementary pay types</span>
        <ul className="heading-2 list-disc list-inside ml-[10px]"><li>Performance bonus</li>
        <li>yearly bonus</li>
        </ul>
        <span>Work location : In person </span>
    </div>




    <div className="w-[736px] h-[271px] top-[845px] left-[100px] absolute border-[1px] border-black font-medium">
      <div className="w-[148px] h-[60px]  border-[1px] ">
          <div className="w-[138px] h-[40px]  border-[1px]  mt-[10px] flex">
      <img src={logo} className="h-[40px] w-[40px] rounded-full" alt="Profile" />
      <h1 className="w-[86px] h-[27px] w-[500px] text-[20px] ml-[4px] mt-[3px]">ATLASIAAN</h1>
           </div>
      </div>
      <div className="absolute bottom-[0px] w-[736px] h-[195px] border-[1px] flex justify-between ">
         
         <div className="flex flex-col justify-between ">
         <div className=" w-[344px] h-[49px] border-[1px] top-[70px] flex-col "><span className="heading-1">Company size</span>
      <span className="flex">1k-2k Employess</span>
        </div>
      <div className=" w-[344px] h-[49px] border-[1px]  flex flex-col"><span className="heading-1">Sector</span>
      <span className="flex">IT Industry</span>
      </div>
      <div className=" w-[344px] h-[49px] border-[1px]  flex flex-col"><span className="heading-1">Founded In</span>
      <span className="flex">1999</span>
      </div>
         </div>

         <div className="flex flex-col justify-between">
         <div className=" w-[344px] h-[49px] border-[1px]  top-[70px] flex-col "><span className="heading-1">Type</span>
      <span className="flex">1k-2k Employess</span>
        </div>
      <div className=" w-[344px] h-[49px] border-[1px]  flex flex-col"><span className="heading-1">Funding</span>
      <span className="flex">Bootstrapped</span>
      </div>
      <div className=" w-[344px] h-[49px] border-[1px] flex flex-col"><span className="heading-1">Founded By</span>
      <span className="flex">Scott Farquhar,Mike Cannon Brookes</span>
      </div>
         </div>
     
      </div>
    </div>
    
</div>
  )
}

export default JobPreview
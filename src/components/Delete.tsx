import React from 'react'
import { CiEdit } from 'react-icons/ci'
import { MdDeleteOutline } from 'react-icons/md'
import CustomButton from './CustomButton'
import { LuEye, LuUsers } from 'react-icons/lu'
import { FiUserCheck } from 'react-icons/fi'
import { FaRegMessage } from 'react-icons/fa6'

const Delete = () => {
  return (
    <div className="w-[360px] h-[361px] border-[1px] ml-[1344px] absolute mt-[36px] flex flex-col justify-between font-medium">
         <div className="w-[360px] h-[46px] border-[1px]  flex justify-between relative">
            <button className="w-[172px] h-[46px] border-[1px] rounded-lg border-orange-600 flex ">
            <MdDeleteOutline className="w-[20px] h-[20px] mt-[10px] ml-[30px]"></MdDeleteOutline><span className="mt-[9px] heading-2">Delete Job</span></button>
              <button className="w-[172px] h-[46px] border-[1px] rounded-lg border-orange-600 flex ">
              <CiEdit className="w-[20px] h-[20px] mt-[10px] ml-[30px]"></CiEdit><span className="mt-[9px] heading-2">Edit Job</span></button>

          </div>
          <div className="w-[360px] h-[291px] border-[1px]  flex flex-col justify-between ">
          <div className="w-[336px] h-[42px] border-[1px]  ml-[10px] flex justify-between">
                   <div className="w-[135px] h-[42px] flex justify-center mt-[10px]">
                   <LuUsers />
                   <span className="mt-[-4px] ml-[5px]"> Applicants</span>
                   </div><div className="w-[57px] h-[39px]">
                    400
                   </div>
          </div>
          <div className="w-[336px] h-[42px] border-[1px] ml-[10px] flex justify-between">
          <div className="w-[135px] h-[42px] flex justify-center mt-[10px]">
          <FiUserCheck />
          <span className="mt-[-4px] ml-[5px]"> Matches</span>
                   </div><div className="w-[57px] h-[39px]">
                    100
                   </div>
          </div>
           <div className="w-[336px] h-[42px] border-[1px] ml-[10px] flex justify-between">
           <div className="w-[135px] h-[42px] flex justify-center mt-[10px]">
           <FaRegMessage />
           <span className="mt-[-4px] ml-[5px]">Messages</span>
                   </div><div className="w-[57px] h-[39px]">
                    147
                   </div>
          </div>
          <div className="w-[336px] h-[42px] border-[1px] ml-[10px] flex justify-between">
          <div className="w-[135px] h-[42px] flex justify-center mt-[10px]">
          <LuEye/>
          <span className="mt-[-4px] ml-[5px]">Views</span>
                   </div><div className="w-[57px] h-[39px]">
                    800
                   </div>
             </div> 
          </div>
    </div>
  )
}

export default Delete
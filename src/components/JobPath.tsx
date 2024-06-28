import React from 'react'

const JobPath = () => {
  return (
    <div className="relative w-[1728px] h-[67px] border-[1px] ">
        <div className=" w-[590px] h-[27px] top-[15px] left-[100px] border-[1px] absolute flex justify-between ">
              <span className="text-[20px] leading-[27px] text-slate-500">Job preview</span>
              <span className="flex items-center space-x-2 text-slate-500 text-[20px] leading-[27px]">Applicants</span>
              <span className="flex items-center space-x-2  text-slate-500 text-[20px] leading-[27px]">Match</span>
              <span className="flex items-center space-x-2 text-slate-500 text-[20px] leading-[27px]">Messages</span>
        </div>
    </div>
  )
}

export default JobPath
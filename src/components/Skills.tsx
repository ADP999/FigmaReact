import React from 'react'

const array:[]=["figma","Abode illustrator","Adobe XD"];

const Skills = () => {
  return (
   
<div className="w-[872px] h-[115px] top-[100px] left-[100px] flex justify-between relative border-[1px] ">

<div className="flex flex-col justify-evenly"><span className="heading-1">Skills Required</span>
<b className="border-[1px] border-gray-300 w-[66px] h-[24px] rounded ">figma</b>
<b className="border-[1px] border-gray-300 rounded">Abode illustator</b>
<b className="border-[1px] border-gray-300 rounded">Abode XD</b>
</div>

<div className="flex flex-col">
  <span className="heading-1"> Preferred Languages</span>
  <b>English</b>
  <span>jobs@yarabltd.co.uk</span>

</div>

<div className="w-[170]px h-[49px] flex flex-col">
  <span className="heading-1">Type</span>
  <b>full time</b>
</div>

<div className="w-[171px] h-[49px] flex flex-col ">
  <span className="heading-1">Years Of Experience</span>
  <b className="">3+ years of experience</b>
</div>



</div>

  )
}

export default Skills
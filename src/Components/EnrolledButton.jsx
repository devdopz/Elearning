import React from 'react'

const EnrolledButton = () => {
  function Enrolledpage(){
    alert("Go to Course Modules Page")
  }
  return (
  
      <button onClick={Enrolledpage} className=" bg-[#14A033] text-white px-4 p-1 rounded-md">
      Enrolled
      </button>
 
  )
}

export default EnrolledButton

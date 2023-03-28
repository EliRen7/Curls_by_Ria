



function Treatments(){
    return(
      <div className='bg-tan'>
        <h1 className=" text-4xl ">Service Information</h1>
       <div className="flex flex-col w-10/12 pt-60 ml-40 ">
  <div className="grid h-80 card bg-tan place-items-center border-2 border-tan2 text-xl ">
    Treatments
      <ul className="list-disc">
        <li className="text-base p-10">
          First/Full visit (2-3 hours)
        </li>
        <li className="text-base p-10">
          First/Full visit (2-3 hours)
        </li>
        <li className="text-base p-10">
          First/Full visit (2-3 hours)
        </li>

      </ul>
  </div> 
  <div className="divider"></div> 
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Prepping</div>
  <div className="divider"></div> 
  <div className="grid h-20 card bg-base-300 rounded-box place-items-center">Policy</div>
  </div>
  </div>
    )
}

export default Treatments;

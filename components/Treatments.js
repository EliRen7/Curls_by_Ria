
function Treatments(){
    return(
      <div className='bg-tan'>
       <div className="flex flex-col w-10/12 pt-60 ml-[8rem] ">
       <h1 className="">Services</h1>
  <div className="grid h-80 card bg-tan place-items-center border-2 border-tan2 text-xl ">
    Treatments
      <ul className="list-disc text-lg pl-20 pb-5">
        <li className="p-5">
          First/Full visit (2-3 hours) 150,000 won 
        </li>
        <li className="p-5">
          Cut Only (45 mins-1hour) 80,000 won <small>**Offered only to existing clients</small>
        </li>
        <li className="p-5">
          Olaplex treatment 40,000 won
        </li>
        <li className="p-5">
          Online Consultation (45mins) 60,000 won 
        </li>

      </ul>
  </div> 
  <div className="divider"></div> 
  <div className="grid h-80 card bg-tan place-items-center border-2 border-tan2 text-xl ">Prepping</div>
  <div className="divider"></div> 
  <div className="grid h-80 card bg-tan place-items-center border-2 border-tan2 text-xl ">Policy</div>
  </div>
  </div>
    )
}

export default Treatments;

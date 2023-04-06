
function Treatments(){
    return(
      <div className='bg-tan'>
       <div className="flex flex-col w-10/12 pt-20 ml-[8rem] ">
       <h1 className="font-headers text-6xl mb-0 text-rose-300" >Services/Information</h1>
       {/* <h3 className="mt-0 ml-5 text-lg">What to expect</h3> */}
       <h6 className="font-descriptions ml-5">During your first visit and any following full visits, we will do a consultation first followed by dry cutting,
        washing, styling, and setting your curls. Throughout the entire process, I will be giving you <b>step by step guidance </b> 
         so you will be able to do this at home.
       </h6>
  <div className="grid h-90 card bg-tan place-items-center border-2 border-tan2 text-xl ">
    <h5 className="font-headers text-4xl">Treatments </h5>
      <ul className="list-disc text-lg pl-20 pb-5">
        <li className="p-5">
          <b>First/Full visit (2-3 hours) 150,000 won</b>
        </li>
        <li className="p-5">
          <b>Cut Only (45 mins-1hour) 80,000 won <br/><small>**Offered only to existing clients</small></b>
        </li>
        <li className="p-5">
          <b>Olaplex treatment 40,000 won</b>
        </li>
        <li className="p-5">
           <b>Online Consultation (45mins) 60,000 won</b>
        </li>

      </ul>
  </div> 
  <div className="divider"></div> 
  <div className="grid h-100 card bg-tan place-items-center border-2 border-tan2 text-xl ">
    <h5 className="font-headers text-4xl">Prepping</h5>
  <ul className="list-disc text-lg pl-40 pb-5">
        <li className="p-5">
          Come with a <b>fresh, clean hair</b> (no more than 2 days since your last wash) 
        </li>
        <li className="p-5">
          Hair should be <b>detangled and knot-free </b>
          <small>**If I have to detangle your hair, it will be an extra <b>40,000</b> won charge</small>
        </li>
        <li className="p-5">
          Do<b> NOT</b> put your hair up in clips, braids, twist outs, buns, headbands ponytails, etc.
        </li>
        <li className="p-5">
          Your hair should be in its <b>NATURAL state</b> 
        </li>
        <li className="p-5">
          Please <b>avoid</b> products with silicones, heavy butters, and oils
          (<b>clarify</b> your hair if you have been using them prior to yor cut)
        </li>
      <small>**If you do not follow the proper preparations when you come in for your cut and we need to reschedule, you will
        be <b>charged the full appointment price</b> and will need to <b>reschedule again at full price</b>
      </small>
      </ul>
  
  
  </div>
  <div className="divider"></div> 
  <div className="grid h-80 card bg-tan place-items-center border-2 border-tan2 text-xl ">
    <h5 className="font-headers text-4xl">Deposit Policy</h5>
      <p className="text-lg"><b>To prevent no-shows and last minute cancellations, </b>there is a deposit policy of <b>half the service total </b>
      to confirm any appointment <b>(Ex:</b> First visit - 75,000 won deposit)
      </p>
      <p>
      To confirm your appointment, please send the deposit by bank transfer <b>within 1 hour</b> of receiving your appointment details
      </p>
      <p>
      This will go towards the service you scheduled and you will only need to pay the <b>remaining balance</b> after your appointment
      </p>
      <p>
      <h5><b>!! The deposit is non-refundable !!</b> </h5>
      For any changes, you must notify me no less than 72 hours before your appointment. Otherwise, your appointment will be considered canceled 
      </p>

  
  </div>
  </div>
  </div>
    )
}

export default Treatments;

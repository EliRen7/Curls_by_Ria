import Payments from './Payments'
// import Select from './Select'



function Modal() {


  return (
    
    <div>
      <label
        htmlFor="my-modal-4"
        className="btn bg-rose-300 border-rose-300 rounded-3xl md:rounded-lg md:text-base md:w-32 md:h-10 md:mb-30 md:mr-10 ml-80 w-60 h-32 text-4xl ">
        Book Now</label>
      <form>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-tan" htmlFor="">
          <h3 className="text-lg font-bold text-center">Welcome!</h3>
          <h4 className="pt-5 m-5">Step 1: Click to request an appointment date
          <br></br>1단계: 약속 날짜를 요청하려면 클릭하십시오.
          </h4>
        
          <a href="https://calendly.com/curlsbyria/appointment" target="_blank"
          className="mt-5 px-6 py-3 ml-40 text-md text-black no-underline btn-sm bg-amber-300 rounded hover:bg-yellow-500">Request
          </a>
            <div className="divider"></div> 


      <h4 className="pt-5 m-5">Step 2: Confirm requested date with deposit payment
      <br></br>2단계: 입금으로 요청 날짜 확인
      </h4>
 


      {/* <label className="input-group input-group-sm m-4">
              <span>Full Name</span>
              <input type="text" placeholder="First & Last Name" className="input input-bordered w-80 input-warning" />
            </label>  */}

            {/* <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text ml-40" >Change currency rate to USD ($)</span> 
    <input type="checkbox" className="toggle" />
    add "checked" to the input on the toggle to convert won to usd"
      </label>
      </div> */}

{/* 
            <label className="input-group input-group-sm m-4">
              <span >Treatments</span>
              <select className="select w-full max-w-xs input-warning">
                <option> Select a treatment</option>
                <option>First/Full visit (Deposit-75,000 ₩ or $65)</option>
                <option>
                  Cut Only (Deposit-45,000 ₩ or $32)
                </option>
                <option>Olaplex Treatment (Deposit-45,000 ₩ or $32)</option>
                <option>Online Consultation (45 mins) Deposit- </option> 
              </select>
              
            </label> */}

            


   <div className="form-control">
   <span className='ml-24 mt-5'>Deposit prices for <b>bank transfers</b></span>
        <label className="label cursor-pointer ml-5">
          <label>First/Full visit (첫방문/풀방문) <span> ₩75,000</span></label>
          {/* <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked /> */}
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Cut Only visit (커트만) <span className="label-text"> ₩65,000</span></label> 
          {/* <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked /> */}
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Olaplex treatment (올라플렉스 트리트먼트) <span className="label-text"> ₩50,000</span> </label>
          {/* <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked /> */}
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Online Consultation (온라인 상담)<span className="label-text"> ₩30,000</span> </label>
          {/* <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked /> */}
        </label>
      </div>

            <label className="input-group input-group-sm m-4">
              <span>Deposit Info</span>
              <label className='ml-5'>NH Bank 2343-2343-54456667 Alice Green</label>
              {/* <select className="select w-full max-w-xs">
                <option>Select your preferred method</option>
                <option>Bank Transfer (NH Bank 2343-2343-54456667 Alice Green) </option>
                <option>PayPal </option>
              </select> */}
            </label>
        
          {/* <div className="modal-action pb-5">
            <label htmlFor="my-modal" className="btn">
              Submit!
            </label>
          </div> */}
            <div className="divider">OR</div>
            {/* <select id="services">
            <options value="first">First: $70.00</options>
            <options value="cut">First: $50.00</options>
            <options value="olaplex">First: $30.00</options>
            <options value="online">First: $20.00</options>
          </select> */}
          <Payments />
          {/* <Select /> */}
        </label>
      </label>
      </form>
    </div>

  );
}

export default Modal;



// options={{
//   "client-id": 
//     "AaBXRXaIC-6yWZMf7ArGnM9AuThO5BQpoqm_Ikz31JMX-KMFPLRs17Dc3HeZTP_9achfMV8u0Tc0MhiD"
// }}




// Calendy

// https://calendly.com/curlsbyria/appointment



// Paypal 
// AUueiUYoZNbL6wrH4Oroh3O_tTOSCobcsdsH5WLJQF93uJDq1nnnDnc80o8r7psaHKYPRHpIhOVATqRd
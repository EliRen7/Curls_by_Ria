import Payments from './Payments'


function Modal() {
  return (
    <div>
      <label
        htmlFor="my-modal-4"
        className="btn bg-rose-300 border-rose-300 text-base mb-30 mr-10">
        Book Now</label>
      <form>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-tan" htmlFor="">
          <h3 className="text-lg font-bold text-center">Welcome!</h3>
         

          <h4 className="pt-5 m-5">Step 1: Click to request an appointment date</h4>
        
          <a href="https://calendly.com/curlsbyria/appointment" target="_blank"
          className="mt-5 px-6 py-3 ml-40 text-md text-black no-underline btn-sm bg-amber-300 rounded hover:bg-yellow-500">Request
          </a>

            <div className="divider"></div> 


      <h4 className="pt-5 m-5">Step 2: Confirm requested date with deposit transfer</h4>

      <label className="input-group input-group-sm m-4">
              <span>Full Name</span>
              <input type="text" placeholder="First & Last Name" className="input input-bordered w-80 input-warning" />
            </label> 


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
              
            </label>
        
            <label className="input-group input-group-sm m-4">
              <span>Payment</span>
              <select className="select w-full max-w-xs">
                <option>Select your preferred method</option>
                <option>Bank Transfer (NH Bank 2343-2343-54456667 Alice Green) </option>
                <option>PayPal </option>
              </select>
            </label>
        
          <div className="modal-action pb-5">
            <label htmlFor="my-modal" className="btn">
              Submit!
            </label>
          </div>
          <Payments />
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
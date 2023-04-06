
function Modal() {

  return (
    <div>
      <label
        htmlFor="my-modal-4"
        className="btn bg-rose-300 border-rose-300 text-base mb-30">
        Book Now
      </label>
      <form>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative bg-tan" htmlFor="">
          <h3 className="text-lg font-bold text-center">Welcome!</h3>
         

          <h4 className="pt-10 m-5">Step 1: Click to request an appointment date</h4>
        
          <a href="https://calendly.com/liz774/curlsbyria-treatments" target="_blank"
          className="mt-5 px-6 py-3 ml-40 text-black no-underline btn-sm bg-amber-300 rounded hover:bg-yellow-500">Request
          </a>

            <div className="divider"></div> 

      <h4 className="pt-5 m-5">Step 2: Confirm requested date with deposit transfer</h4>
            <label className="input-group input-group-sm m-4">
              <span >Treatments</span>
              <select className="select w-full max-w-xs input-warning">
                <option> Select a treatment</option>
                <option>First/Full visit (2-3hrs) Deposit-</option>
                <option>
                  Cut Only (45min-1hr) Deposit-
                </option>
                <option>Olaplex Treatment Deposit- </option>
                <option>Online Consultation (45 mins) Deposit- </option> 
              </select>
            </label>
          


            <label className="input-group input-group-sm m-4">
              <span>Payment</span>
              <select className="select w-full max-w-xs">
                <option>Select your preferred method</option>
                <option>Bank Transfer </option>
              </select>
            </label>
            <label className="input-group input-group-sm m-4">
              <span>Email</span>
              <input type="text" placeholder="e.g: xxxxx@email.com" className="input input-bordered w-80 input-warning" />
            </label> 
        
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Submit!
            </label>
          </div>
        </label>
      </label>
      </form>
    </div>
  );
}

export default Modal;
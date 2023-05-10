import Payments from './Payments'
import {useState} from 'react'


function Modal() {

const [services, setServices] = useState(0)

function handleChange(event) {
    setServices(event.target.value)
}

  return (

    <div>
      <label
        htmlFor="my-modal-5"
        className="btn bg-rose-300 border-rose-300 rounded-3xl md:rounded-lg md:text-base md:w-32 md:h-10 md:mb-30 md:mr-10 ml-80 w-60 h-32 text-4xl ">
        Book Now</label>
      <form>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box  relative bg-tan md:w-auto">
          <h3 className="text-lg font-bold text-center">Welcome!</h3>
          <h4 className=" pt-5 m-5">Step 1: Click to request an appointment date
          <br></br>1단계: 예약을 요청하려면 아래 버튼을 클릭하세요
          </h4>
        
          <a href="https://calendly.com/curlsbyria/appointment" target="_blank"
          className="mt-5 px-6 py-3 ml-36 text-md text-slate-700 no-underline btn-sm bg-rose-300 rounded "><b>Request</b>
          </a>
            <div className="divider"></div> 


      <h4 className="pt-5 m-5">Step 2: Confirm requested date with deposit payment
      <br></br>2단계: 예약금을 입금하면 예약이 확정됩니다
      </h4>


   <div className="form-control">
   <span className='ml-20 mt-5 text-md'><b>Deposit prices (Bank Transfer option)</b>
   <br></br><b>예약금표 (계좌이체 가능) </b>
   </span>
        <label className="label cursor-pointer ml-5">
          <label>Complete Curl Care - ₩100,000 *new clients</label>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Curl Cultivation - ₩75,000 *existing clients</label> 
        </label>
      </div>


            <label className="input-group input-group-sm m-4">
              <span>Bank Transfer</span>
              <label className='ml-5'><b>하나은행 876-910169-83207 CHO SOOHYUN</b></label>
            </label>
        
            <div className="divider">OR</div>
              <select 
                id="options" 
                className="select ml-20 mb-10 w-full max-w-xs"
                value={services}
                onChange={handleChange}
                name="options"
                >
                <option>Select a service ($USD)</option>
                <option value='100'>Complete Curl Care $100 </option>
                <option value='75'>Curl Cultivation $75 </option>
              </select>
          <Payments amount={services}/>
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



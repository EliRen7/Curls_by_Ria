import Payments from './Payments'
import {useState} from 'react'
import Image from 'next/image';
import QRCode from '../public/assets/qr-code.jpg'


function Modal() {

const [services, setServices] = useState(0)

function handleChange(event) {
    setServices(event.target.value)
}

  return (

    <div>
      <label
        htmlFor="my-modal-4"
        className="btn bg-rose-300 border-rose-300 rounded-3xl md:rounded-lg md:text-base md:w-32 md:h-10 md:mb-30 md:mr-10 ml-80 w-60 h-32 text-4xl ">
        Book Now</label>
      <form>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label htmlFor="" className="modal-box relative max-w-5xl md:pl-10 pl-20 max-h-full md:max-h-screen md:max-w-lg bg-tan ">
          <h3 className="text-6xl md:text-lg font-bold text-center">Welcome!</h3>
          <h4 className=" pt-5 m-5 text-5xl md:text-base">Step 1: Click to request an appointment date
          <br></br>1단계: 예약을 요청하려면 아래 버튼을 클릭하세요
          </h4>
          <a href="https://calendly.com/curlsbyria/appointment" target="_blank"
          className="mt-5 px-6 py-3 ml-[26rem] md:ml-40 text-4xl md:text-base text-white no-underline btn-sm bg-rose-300 rounded "><b>Request</b>
          </a>
            <div className="divider"></div>
      <h4 className="pt-5 m-5 text-5xl md:text-base">Step 2: Confirm requested date with deposit payment
      <br></br>2단계: 예약금을 입금하면 예약이 확정됩니다
      </h4>
      <div className="divider"></div>
   <div className="form-control">
   <span className='ml-64 mt-5 md:ml-40  text-5xl md:text-base'><b>Deposit prices</b></span>
   <br></br><span><b className='ml-52  md:ml-32 md:text-sm text-4xl'>예약금표 (계좌이체 가능)</b></span>
   
        <label className="label cursor-pointer ml-28 text-5xl md:text-base">
          <label>Complete Curl Care - ₩100,000 <br></br>*new clients/첫방문</label>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-28 text-5xl md:text-base">
          <label>Curl Cultivation - ₩75,000<br></br> *existing clients/재방문</label> 
        </label>
      </div>
            <label className="input-group text-4xl md:text-sm m-4 pt-10 md:pt-0 pb-10 mb:pb-0">
              <span className='whitespace-nowrap'>Korean Bank Transfer</span>
              <label className='ml-5'><b>하나은행 876-910169-83207 CHO SOOHYUN</b></label>
            </label>
            <div className="divider">OR</div>
            <span className='md:ml-28 md:text-base text-4xl'><b>Kakao Pay (scan the QR code)</b></span>
            <Image
             src={QRCode} 
             className='w-96 md:w-40 md:ml-32 ml-56' 
             alt='img'
             />
            <div className="divider">OR</div>
              <select 
                id="options" 
                className="select ml-44 md:ml-5 mb-20 w-full max-w-sm text-lg md:text-base"
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



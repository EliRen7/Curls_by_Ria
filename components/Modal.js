import Payments from './Payments'


function Modal() {
  return (
    
    <div>
      <label
        htmlFor="my-modal-5"
        className="btn bg-rose-300 border-rose-300 rounded-3xl md:rounded-lg md:text-base md:w-32 md:h-10 md:mb-30 md:mr-10 ml-80 w-60 h-32 text-4xl ">
        Book Now</label>
      <form>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <label htmlFor="my-modal-5" className="modal cursor-pointer">
        <label className="modal-box relative bg-tan md:w-auto">
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
 


            


   <div className="form-control">
   <span className='ml-44 mt-5'>Deposit prices</span>
        <label className="label cursor-pointer ml-5">
          <label>First/Full visit (첫방문/풀방문) <span> ₩75,000</span></label>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Cut Only visit (커트만) <span className="label-text"> ₩65,000</span></label> 
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Olaplex treatment (올라플렉스 트리트먼트) <span className="label-text"> ₩50,000</span> </label>
        </label>
      </div>
      <div className="form-control">
        <label className="label cursor-pointer ml-5">
          <label>Online Consultation (온라인 상담)<span className="label-text"> ₩30,000</span> </label>
        </label>
      </div>

            <label className="input-group input-group-sm m-4">
              <span>Bank Info</span>
              <label className='ml-5'>NH Bank 2343-2343-54456667 Alice Green</label>
            </label>
        
          {/* <div className="modal-action pb-5">
            <label htmlFor="my-modal" className="btn">
              Submit!
            </label>
          </div> */}
            <div className="divider">OR</div>
              <select id="services" className="select ml-20 mb-10 w-full max-w-xs">
                <option>Select a service</option>
                <option id='first'>First/Full  ₩75,000 </option>
                <option id='cut'>Cut only  ₩65,000 </option>
                <option id='online'>Online Consultation  ₩30,000 </option>
                <option id='olaplex'>Olaplex  ₩50,000 </option>
              </select>
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
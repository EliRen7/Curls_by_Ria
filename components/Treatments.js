import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Expectations1 from '../public/assets/expectations1.jpg'
import Expectations2 from '../public/assets/expectations2.jpg'
import { useEffect } from 'react';

function Treatments(){

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return(
      <div className='bg-white scroll-smooth w-[84rem] md:w-full' id="treatments">
       <div className="flex flex-col w-10/12 pt-40 ml-[8rem]">
       <div className="grid md:grid-cols-2 h-100 card place-items-center pb-10 md:ml-32">
    <section className="pt-5">
    <Image
      src={Expectations1}
      className='w-[90rem] md:w-4/5 h-auto'
      alt='img'
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={Expectations2}
      className='w-[90rem] md:w-4/5 h-auto'
      alt='img'
      />
      </section>
  </div>
  <div className="divider"></div> 
  <div className="grid md:grid-cols-2 mt-48 md:mt-0 md:w-full md:h-90 card bg-tan place-items-center md:border-2 border-tan2 text-xl ">
    <h5 className="font-headers text-8xl md:text-3xl  text-rose-300" data-aos="fade-right">Price List </h5>
    <h5 className='font-koreanHeader md:text-4xl text-7xl text-rose-300' data-aos="fade-right">가격표</h5>
      <ul className="leading-normal list-disc pl:10 text-7xl  md:text-lg md:pl-20 md:pb-0 pb-40">
        <h6 className='text-rose-300 font-headers'>Full Prices</h6>
        <li>
        Complete Curl Care - ₩200,000 <b><br></br>*new clients</b> 
        </li>
        <li>
        Curl Cultivation - ₩150,000 <b><br></br>*existing clients</b>
        </li>
        <h6 className='text-rose-300 font-headers md:mt-5 mt-20'>Add-Ons</h6>
        <li>
        Curl Restoration Treatment - ₩50,000 <br></br><b>*K18 + Olaplex services</b> 
        </li>
        <li>
        Color Services - ₩50,000+  <br></br><b>*price can go up after consultation</b>
        </li> 
      </ul>
      <ul className="leading-normal list-disc pl:10 text-7xl  md:text-lg md:pl-20 md:pb-0 pb-40">
        <li>
        컴플리트 컬 케어 - ₩200,000 <br></br><b>*첫방문</b>
        </li>
        <li>
        컬 컬티베이션 - ₩150,000 <br></br><b>*재방문</b>
        </li>
        <h6 className='text-rose-300 font-koreanHeader md:mt-5 mt-20'>추가 서비스</h6>
        <li>
        복구 트리트먼트 - ₩50,000 <br></br><b>*K18 + 올라플렉스 트리트먼트</b> 
        </li>
        <li>
        염색 - ₩50,000+ <br></br><b>*상담 후 가격 추가될 수 있습니다</b>
        </li>
      </ul>
  </div> 
  <div className="divider"></div> 
  <h5 className="font-headers text-8xl ml-44 mt-32 md:ml-[33rem] md:mt-5 md:text-3xl text-rose-300" data-aos="fade-right">Appointment Prep</h5>
       <div className="grid md:grid-cols-2 h-100 card bg-tan place-items-center md:border-2 border-tan2 text-xl pb-10">
    <section className="text-center text-7xl md:text-lg pt-5 md:p-5">
      <p>
      Come with a fresh, clean hair (no more than 2 days since your last wash) Hair should be detangled and knot-free~
      <br></br>
      Do NOT put your hair up in clips, braids, twist outs, buns, headbands ponytails, etc.
      <br></br>
      Your hair should be in its NATURAL state
      <br></br>
     Please avoid products with silicones, heavy butters, and oils (clarify your hair if you have been using them prior to yor cut)
     <br></br>
      **If you do not follow the proper preparations when you come in for your cut and we need to reschedule due to time restraints, 
      you will be charged the full appointment price and will need to reschedule again at full price**
      </p>
      </section>
      <section className="text-center text-7xl md:text-lg pt-5 font-Korean md:p-5">
       <p>
       깨끗한 머리로 오세요 (마지막 감은 후 2일 이내)
       <br></br>
       머리카락은 헝클어지거나 매듭이 없어야 합니다.
       <br></br>
       머리를 클립, 땋기, 비틀기, 번, 머리띠, 포니테일로 올리지 마세요.
       <br></br>
       실리콘, 헤비버터, 오일이 함유된 제품은 피하세요. (컷 전에 사용하신 경우 디톡스 해 주세요)
       <br></br>
      **커트 준비가 제대로 되어있지 않으면 준비된 상태에서 재방문이 필요합니다.
      재방문으로 다시 예약을 잡아야 할 경우, 당일의 예약비와 재방문 비용 모두를 부담해야 합니다. 재방문 비용은 원가로 진행됩니다. (할인 없음)**
       </p>
      </section>
  </div>
  <div className="divider"></div> 
  <h5 className="font-headers text-8xl ml-64 mt-32 md:ml-[33rem] md:mt-5 md:text-3xl text-rose-300" data-aos="fade-right">Deposit Policy</h5>
       <div className="grid md:grid-cols-2 h-100 card bg-tan place-items-center md:border-2 border-tan2 text-xl pb-10">
    <section className="text-center text-7xl md:text-lg pt-5 md:p-10">
      <p>
      <b>To prevent no-shows and last minute cancellations, </b>there is a deposit policy of <b>half the service total </b>
      to confirm any appointment <br></br><b>(Ex:</b> Complete Curl Care - ₩100,000 deposit)
      </p>
      <p>
      To confirm your appointment, please send the deposit by bank transfer <b>within 1 hour</b> of receiving your appointment details
      </p>
      <p>
      This will go towards the service you scheduled and you will only need to pay the <b>remaining balance</b> after your appointment
      </p>
      
      <h5><b>!! The deposit is non-refundable !!</b> </h5>
      <p>
      For any changes, you must notify me no less than 72 hours before your appointment. Otherwise, your appointment will be considered canceled 
      </p>
      </section>
      <section className="text-center text-7xl md:text-lg pt-20 font-Korean md:p-10">
       
      <p>
      <b>노쇼/당일취소 방지를 위해 부득이하게 예약금제를 시행합니다.</b> 예약금 안내 후 <b>1시간이내에</b> 입금이 확인되면 예약이
      확정됩니다~
      </p>
      <p>
      입금 후 입금완료 문자 보내주세용^^
      </p>
      <p>
      예약금은 고객님이 원하신 서비스
      총 가격의 반값입니다.
    <br></br><b>(예:</b> 첫방문 - 100,000원)
      </p>
      <p>
      서비스 후 남은 잔액만
      지불하면 됩니다.
      </p>
      <p>
      <b>‼️예약금은 환불 불가능합니다‼️</b><br></br>
      예약 변경은 3일전까지 미리 알려주시면 다른 날짜로 변경할수있어요~ 신중하게 생각하시고 예약 부탁 드립니다♥️
      </p>
      </section>
  </div>
  </div>
  </div>
    )
}

export default Treatments;





{/* <p><b>To prevent no-shows and last minute cancellations, </b>there is a deposit policy of <b>half the service total </b>
      to confirm any appointment <br></br><b>(Ex:</b> First visit - 75,000 won deposit)
      </p>
      <p>
      To confirm your appointment, please send the deposit by bank transfer <b>within 1 hour</b> of receiving your appointment details
      </p>
      <p>
      This will go towards the service you scheduled and you will only need to pay the <b>remaining balance</b> after your appointment
      </p>
      
      <h5><b>!! The deposit is non-refundable !!</b> </h5>
      <p>
      For any changes, you must notify me no less than 72 hours before your appointment. Otherwise, your appointment will be considered canceled 
      </p> */}



    

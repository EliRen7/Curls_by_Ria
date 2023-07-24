import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Expectations1 from '../public/assets/expectations1.jpg'
import Expectations2 from '../public/assets/expectations2.jpg'
import Prices1 from '../public/assets/prices1.jpg'
import Prices2 from '../public/assets/prices2.jpg'
import Prep1 from '../public/assets/prep1.jpg'
import Prep2 from '../public/assets/prep2.jpg'

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
       <div className="grid md:grid-cols-2  md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center ">
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
  <div className="grid md:grid-cols-2 md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center">
    <section className="pt-5">
      <Image
      src={Prices1}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={Prices2}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      />
      </section>
  </div> 
  <div className="divider"></div> 
    <div className="grid md:grid-cols-2 md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center">
    <section className="pt-5">
      <Image
      src={Prep1}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={Prep2}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      />
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



    

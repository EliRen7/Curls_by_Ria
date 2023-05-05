import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Treatments(){

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return(
      <div className='bg-tan scroll-smooth w-[80rem] md:w-full' id="treatments">
       <div className="flex flex-col w-10/12 pt-40 ml-[8rem]">
       <h1 className="font-headers text-[9rem] ml-20 md:pt-0 md:ml-0 md:text-6xl text-rose-300" data-aos="fade-right">Services</h1>
       <h6 className="text-justify leading-relaxed text-7xl pt-40 pb-40 font-descriptions md:text-lg md:ml-5 md:pt-5 md:pb-0 ">**During your first visit and any following full visits, we will do a consultation first followed by dry cutting,
        washing, styling, and setting your curls. <br></br> Throughout the entire process, I will be giving you <b>step by step guidance </b> 
         so you will be able to do this at home.
         <br></br>
         첫방문 신 및 이후 풀방문 시, 먼저 상담 후 드라이 커팅, 머리감기, 스타일링, 디퓨즈 등을 진행하겠습니다! 이 모든 과정을 통해 제가단계별 안내를 해드릴서 하실 수 있을 겁니다~**
       </h6>
       <div className="divider md:invisible"></div> 
  <div className="grid mt-48 md:mt-0 md:w-full md:h-90 card bg-tan place-items-center md:border-2 border-tan2 text-xl ">
    <h5 className="font-headers text-9xl md:text-4xl  text-rose-300" data-aos="fade-right">Price List </h5>
    <h3 className='font-korean'>가격표</h3>
      <ul className="leading-normal list-disc pl:10 text-7xl  md:text-lg md:pl-20 md:pb-0 pb-40">
        <li>
          First/Full visit (2-3 hours) <b>150,000 ₩</b>
          <br></br>첫방문/풀방문 (2~3시간) <b>150,000 ₩</b>
        </li>
        <li>
          Cut Only (45 mins-1hour) <b>80,000 ₩ <br/><small>**Offered only to existing clients**</small></b>
          <br></br>커트만 (45분~1시간) <b>80,000 ₩ <br></br><small>**회원들만 가능**</small></b>
        </li>
        <li>
          Olaplex treatment <b>40,000 ₩</b>
          <br></br>올라플렉스 트리트먼트 <b>40,000 ₩ </b>
        </li>
        <li>
           Online Consultation (45mins) <b>60,000 ₩</b> 
           <br></br>온라인 상담 (45분) <b>60,000 ₩</b>
        </li>
      </ul>
  </div> 
  <div className="divider"></div> 
  <div className="grid h-100 card bg-tan place-items-center md:border-2 border-tan2 text-xl ">
    <h5 className="font-headers mt-48 md:mt-0 text-9xl md:text-4xl  text-rose-300" data-aos="fade-right">Appointment Prep</h5> 
  <ul className="list-disc text-7xl md:text-lg md:pl-40 pb-5">
        <li className="pt-5">
          Come with a <b>fresh, clean hair</b> (no more than 2 days since your last wash) 
        </li> 
        <li>
          Hair should be <b>detangled and knot-free </b>
          <small>**If I have to detangle your hair, it will be an extra <b>40,000</b> won charge</small>
        </li>
        <li>
          Do<b> NOT</b> put your hair up in clips, braids, twist outs, buns, headbands ponytails, etc.
        </li>
        <li>
          Your hair should be in its <b>NATURAL state</b> 
        </li>
        <li>
          Please <b>avoid</b> products with silicones, heavy butters, and oils
          (<b>clarify</b> your hair if you have been using them prior to yor cut)
        </li>
      <small><b>**</b>If you do not follow the proper preparations when you come in for your cut and we need to reschedule, you will
        be <b>charged the full appointment price <br></br></b> and will need to <b>reschedule again at full price**</b>
      </small>
      </ul>
      <ul className="list-disc text-7xl pb-40 mt-20 md:text-lg md:pl-20 md:mt-0 md:pb-0">
        <li>
        산뜻하고 깨끗한 머리로 오세요 (마지막 감은 후 2일 이내)
        </li>
        <li>
          머리카락은 헝클어지거나 매듭이 없어야 합니다.
          <small> **머리를 디탱글링 해야 한다면 <b>4만원</b> 추가요금이 부과됩니다**</small>
        </li>
        <li>
        머리를 클립, 땋기, 비틀기, 번,
        머리띠, 포니테일로 올리지 마세요.
        </li>
        <li>  
        머리카락이 자연 상태여야 합니다. 
        </li>
        <li>
        실리콘, 헤비버터, 오일이 함유된 제품은 피하세요.
        (컷 전에 사용하신 경우 머리카락을
        디톡스 해 주세요)
        </li>
      <small>**커트 준비가 제대로 되어있지 않으면 준비된 상태에서재방문이 필요합니다. <br></br>재방문으로 다시 예약을 잡아야 할 경우, 당일의 예약비와 재방문 비용 모두를 부담해야 합니다. 재방문 비용은 원가로 진행됩니다. (할인 없음)**
      </small>
      </ul>
  </div>
  <div className="divider"></div> 
  <div className="grid h-100 card bg-tan place-items-center md:border-2 border-tan2 text-xl pb-10">
    <h5 className="font-headers text-9xl mt-48 md:mt-0 md:text-4xl  text-rose-300" data-aos="fade-right">Deposit Policy 예약금제</h5>
    <section className="text-center text-7xl md:text-lg pt-5">
      <p><b>To prevent no-shows and last minute cancellations, </b>there is a deposit policy of <b>half the service total </b>
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
      </p>
      </section>

      <section className="text-center text-7xl md:text-lg pt-5">
        <p>
        노쇼/당일취소 방지를 위해 부득이하게 예약금제를 시행합니다. 예약금 안내 후 1시간이내에 입금이 확인되면 예약이
        확정됩니다~
        </p>
        <p>
        입금 후 입금완료 문자 보내주세용^^
        </p>
        <p>
        예약금은 고객님이 원하신 서비스
        총 가격의 반값입니다.
        예 첫방문 - 75,000원 예약금
        </p>
        <p>
        서비스 후 남은 잔액만
        지불하면 됩니다.
        </p>
        <p>
        ‼️예약금은 환불 불가능합니다‼️
        예약 변경은 3일전까지 미리 알려주시면 다른 날짜로 변경할수있어요~ 신중하게 생각하시고 예약 부탁 드립니다♥️
        </p>
      </section>
  </div>
  </div>
  </div>
    )
}

export default Treatments;

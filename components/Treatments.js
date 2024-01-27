import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Expectations1 from '../public/assets/expectations1.jpg'
import Expectations2 from '../public/assets/expectations2.jpg'
import Services from '../public/assets/services.jpg'
import KoreanService from '../public/assets/services2.jpg'
import Prep1 from '../public/assets/appoint-prep.jpg'
import Prep2 from '../public/assets/appoint-prep2.jpg'
import Deposit from '../public/assets/depositpolicy.jpg'
import DepositKorean from '../public/assets/depositpolicy2.jpg'
import DesignCurls from '../public/assets/color1.jpg'
import DesignCurls2 from '../public/assets/color2.jpg'


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
      data-aos="zoom-in"
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={Expectations2}
      className='w-[90rem] md:w-4/5 h-auto'
      alt='img'
      data-aos="zoom-in"
      />
      </section>
  </div>
  <div className="divider"></div> 
  <div className="grid md:grid-cols-2 md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center">
    <section className="pt-5">
      <Image
      src={Services}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in"
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={KoreanService}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in"
      />
      </section>
  </div> 
   <div className="divider"></div> 
  <div className="grid md:grid-cols-2 md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center ">
    <section className="pt-5">
    <Image
      src={DesignCurls}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in"
      data-aos-duration="2000"
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={DesignCurls2}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in-down"
      data-aos-duration="2000"
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
      data-aos="zoom-in"
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={Prep2}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in"
      />
      </section>
  </div>
  <div className="divider"></div> 
  <div className="grid md:grid-cols-2 md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center">
    <section className="pt-5">
    <Image
      src={Deposit}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in"
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={DepositKorean}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      data-aos="zoom-in"
      />
      </section>
  </div>
  </div>
  </div>
    )
}

export default Treatments;





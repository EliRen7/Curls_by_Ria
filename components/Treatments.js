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
  </div>
  </div>
    )
}

export default Treatments;





import Image from 'next/image';
import Image from 'next/image';
import Directions from '../public/assets/directions.jpg'
import Address from '../public/assets/address.jpg'

export default function Location(){
    return (
      <div className='bg-white scroll-smooth w-[84rem] md:w-full' id="location">
      <div className="flex flex-col w-10/12 pt-20 ml-[8rem]">
      <div className="grid md:grid-cols-2 md:ml-20 mt-48 md:mt-0 md:w-full md:h-90 card bg-white place-items-center ">
    <section className="pt-5">
      <Image
      src={Directions}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      />
      </section>
      <section className="pt-20 md:pt-5">
      <Image
      src={Address}
      className='w-[90rem] md:w-4/5 md:h-auto'
      alt='img'
      />
      </section>
  </div>
</div>
</div>
    )
    }

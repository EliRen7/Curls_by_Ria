import {AiFillInstagram} from 'react-icons/ai'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Image from 'next/image';
import review4 from '../public/assets/review 4.jpg'
import review3 from '../public/assets/review 3.jpg'
import review5 from '../public/assets/review 5.jpg'
import hairimgs1 from '../public/assets/hairimgs1.jpg'
import hairimgs2 from '../public/assets/hairimgs2.jpg'
import hairimgs3 from '../public/assets/hairimgs3.jpg'
import hairimgs4 from '../public/assets/hairimgs4.jpg'
import hairimgs5 from '../public/assets/hairimgs5.jpg'
import hairimgs6 from '../public/assets/hairimgs6.jpg'
import hairimgs7 from '../public/assets/hairimgs7.jpg'
import hairimgs8 from '../public/assets/hairimgs8.jpg'


function Testimonials(){
    return(
      <div className='bg-white pb-20 w-[84rem] md:w-full' id='testimonials'>
      <div className="mb-8 pt-40 text-center ">
      <h1 className="font-header text-9xl md:text-5xl text-korean-description" data-aos="fade-up">Testimonials</h1>
      <p className=" text-5xl font-header md:text-lg text-korean-description" data-aos="fade-up">Read more reviews on Instagram!</p>
      <a href='https://www.instagram.com/curlsbyria/?igshid=MzRlODBiNWFlZA%3D%3D' target="_blank"> <AiFillInstagram className='w-32 h-32 ml-[38rem] md:w-10 md:h-10 md:ml-[46rem]'/></a>
  </div>

<div className='grid md:grid-cols-3 pb-20 pl-20 pr-20 gap-10 '>
        
  <div className="carousel rounded-box  ml-20 mr-20 md:w-fit md:h-80 lg:w-fit ">
  <div className="carousel-item">
    <Image
    src={hairimgs1} 
    className='w-[75rem] md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs2} 
    className='w-[75rem] md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs3}
    className='w-[75rem] md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs4}
    className='w-[75rem] md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs5}
    className='w-[75rem] md:w-fit md:h-80 '
     alt="img" 
     id='first' />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs6} 
    className='w-[75rem] md:w-fit md:h-80 '
    id='img' 
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs7}
    className='w-[75rem] md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={hairimgs8} 
    className='w-[75rem] md:w-fit md:h-80 ' 
    alt="img" />
  </div> 
</div>
<span className='md:text-xl md:ml-[45rem] text-7xl ml-[32rem] animate-pulse text-korean-description font-header'>Swipe left <FaLongArrowAltLeft className='md:ml-[45rem] w-20 ml-[37rem]'/></span>
 </div>




  <div className="card w-full  bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-left">
  <div className="card-body ">
    <Image 
        src={review4}
        className='h-full'
        alt='img' />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-full bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-right">
  <div className="card-body">
    <Image
        src={review3} 
        className='h-full' 
        alt='img'/>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-full bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-left">
  <div className="card-body">
    <Image 
        src={review5}
        className='h-full'
        alt='img' />
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>

   )
}

export default Testimonials;







import {AiFillInstagram} from 'react-icons/ai'
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Image from 'next/image';
import review4 from '../public/assets/review 4.jpg'
import review3 from '../public/assets/review 3.jpg'
import review5 from '../public/assets/review 5.jpg'
import mediumCurls1 from '../public/assets/medium-curls 1.jpg'
import mediumCurls5 from '../public/assets/medium-curls 5.jpg'
import tightCurls4 from '../public/assets/tight-curls 4.jpg'
import tightCurls2 from '../public/assets/tight-curls 2.jpg'
import lightCurls1 from '../public/assets/light-curls 1.jpg'
import mediumCurls2 from '../public/assets/medium-curls 2.jpg'
import mediumCurls3 from '../public/assets/medium-curls 3.jpg'
import mediumCurls4 from '../public/assets/medium-curls 4.jpg'
import mediumCurls6 from '../public/assets/medium-curls 6.jpg'
import tightCurls3 from '../public/assets/tight-curls 3.jpg'
import lightCurls4 from '../public/assets/light-curls 4.jpg'
import lightCurls5 from '../public/assets/light-curls 5.jpg'
import tightCurls1 from '../public/assets/tight-curls 1.jpg'
import lightCurls3 from '../public/assets/light-curls 3.jpg'
import lightCurls2 from '../public/assets/light-curls 2.jpg'
import lightCurls6 from '../public/assets/light-curls 6.jpg'
import tightCurls5 from '../public/assets/tight-curls 5.jpg'
import tightCurls6 from '../public/assets/tight-curls 6.jpg'


function Testimonials(){
    return(
      <div className='bg-tan pb-20 w-[80rem] md:w-full' id='testimonials'>
      <div className="mb-8 pt-40 text-center ">
      <h1 className="font-headers text-9xl md:text-5xl text-rose-300" data-aos="fade-up">Testimonials <br></br> & Gallery</h1>
      <p className=" text-5xl md:text-lg text-rose-300" data-aos="fade-up">Read more reviews on Instagram!</p>
      <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className='w-32 h-32 ml-[35rem] md:w-10 md:h-10 md:ml-[46rem]'/></a>
  </div>

<div className='grid md:grid-cols-3 pb-20 pl-20 pr-20 gap-10 '>
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

  <div className="carousel rounded-box  ml-20 mr-20 md:w-fit md:h-80 lg:w-fit ">
  <div className="carousel-item">
    <Image
    src={mediumCurls1} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={mediumCurls5} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={tightCurls4}
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={tightCurls2}
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={lightCurls1}
    className=' md:w-fit md:h-80 '
     alt="img" 
     id='first' />
  </div> 
  <div className="carousel-item">
    <Image
    src={mediumCurls2} 
    className='md:w-fit md:h-80 '
    id='img' 
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={mediumCurls3}
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={mediumCurls4} 
    className='md:w-fit md:h-80 ' 
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={mediumCurls6}
    className= 'md:w-fit md:h-80 '
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image
    src={tightCurls3} 
    className='md:w-fit md:h-80 '
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image 
    src={lightCurls4}
    className='md:w-fit md:h-80 '
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image
    src={lightCurls5}
    className='md:w-fit md:h-80 '
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image
    src={tightCurls1} 
    className='md:w-fit md:h-80 '
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image 
    src={lightCurls3} 
    className=' md:w-fit md:h-80 '  
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image
    src={lightCurls2} 
    className='md:w-fit md:h-80 '
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image
    src={lightCurls6} 
    className='md:w-fit md:h-80 ' 
    alt="img" />
  </div>
  <div className="carousel-item">
    <Image
     src={tightCurls5}
     className='md:w-fit md:h-80 '
     alt="img" />
  </div>
  <div className="carousel-item">
    <Image
    src={tightCurls6} 
    className=' md:w-fit md:h-80 '
     alt="img" />
  </div>
</div>
<span className='md:text-xl md:ml-[45rem] text-7xl ml-[32rem] animate-pulse text-rose-400 font-descriptions'>Swipe left <FaLongArrowAltLeft className='md:ml-[45rem] w-20 ml-[37rem]'/></span>
<div className='md:invisible divider pt-40 ml-32 mr-32'></div>
 </div>
    )
}


export default Testimonials;







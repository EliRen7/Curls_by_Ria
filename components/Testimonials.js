import {AiFillInstagram} from 'react-icons/ai'
import {FaLongArrowAltLeft} from 'react-icons/fa'


function Testimonials(){
    return(
      <div className='bg-tan pb-20 w-[80rem] md:w-full' id='testimonials'>
      <div className="mb-8 pt-40 text-center ">
      <h1 className="font-headers text-9xl md:text-5xl text-rose-300" data-aos="fade-up">Testimonials & Gallery</h1>
      <p className=" text-5xl md:text-lg text-rose-300" data-aos="fade-up">Read more reviews on Instagram!</p>
      <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className='w-32 h-32 ml-[35rem] md:w-10 md:h-10 md:ml-[46rem]'/></a>
  </div>

<div className='grid md:grid-cols-3 pb-20 pl-20 pr-20 gap-10 '>
  <div className="card w-full  bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-left">
  <div className="card-body ">
    <img src='./assets/review 4.jpg' className='h-full'></img>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-full bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-right">
  <div className="card-body">
    <img src='./assets/review 3.jpg' className='h-full'></img>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-full bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-left">
  <div className="card-body">
    <img src='./assets/review 5.jpg' className='h-full'></img>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
</div>

  <div className="carousel rounded-box  ml-20 mr-20 md:w-fit md:h-80  ">
  <div className="carousel-item">
    <img src="/assets/medium-curls 1.jpg" alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 5.jpg" alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/tight-curls 4.jpg" alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/tight-curls 2.jpg"  alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/light-curls 1.jpg" alt="img" id='first' />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 2.jpg" id='img' alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 3.jpg" alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 4.jpg"  alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 6.jpg" alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 3.jpg" alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 4.jpg" alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 5.jpg" alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 6.jpg"  alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 3.jpg"   alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 2.jpg" alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 6.jpg"  alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 5.jpg" alt="img" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 6.jpg"  alt="img" />
  </div>
</div>
<span className='md:text-xl md:ml-[45rem] text-7xl ml-[32rem] animate-pulse text-rose-400 font-descriptions'>Swipe left <FaLongArrowAltLeft className='md:ml-[45rem] w-20 ml-[37rem]'/></span>
<div className='md:invisible divider pt-40 ml-32 mr-32'></div>
 </div>
    )
}


export default Testimonials;







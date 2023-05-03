import {AiFillInstagram} from 'react-icons/ai'
import {FaLongArrowAltRight} from 'react-icons/fa'


function Testimonials(){
    return(
      <div className='bg-tan pb-20  w-[80rem] md:w-full ' id='testimonials'>
      <div className="mb-8 pt-40 text-center ">
      <h1 className="font-headers text-9xl md:text-6xl text-rose-300" data-aos="fade-up">Testimonials & Gallery</h1>
      <p className=" text-5xl md:text-lg text-violet-400" data-aos="fade-up">Read more reviews on Instagram!</p>
      <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className='w-32 h-32 ml-[35rem] md:w-10 md:h-10 md:ml-[46rem]'/></a>
  </div>

<div className='grid md:grid-cols-3 pb-20 pl-20 pr-20 gap-10 '>
  <div className="card w-full  bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-left">
  <div className="card-body ">
    {/* <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <img src='./assets/review 4.jpg' className='h-full'></img>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-full bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-right">
  <div className="card-body">
    <img src='./assets/review 3.jpg' className='h-full'></img>
    {/* <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card w-full bg-gradient-to-r from-orange-100 to-rose-100 text-gray-500" data-aos="flip-left">
  <div className="card-body">
    <img src='./assets/review 5.jpg' className='h-full'></img>
    {/* <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p> */}
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
    <img src="/assets/tight-curls 3.jpg" alt="img" id='first' />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 2.jpg" id='second' alt="img" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 3.jpg" alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 4.jpg"  alt="Burger" />
  </div> 
  <div className="carousel-item">
    <img src="/assets/medium-curls 6.jpg" alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 1.jpg" alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 4.jpg" alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 5.jpg" alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 6.jpg"  alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 3.jpg"   alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 2.jpg" alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/light-curls 6.jpg"  alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 5.jpg" alt="Burger" />
  </div>
  <div className="carousel-item">
    <img src="/assets/tight-curls 6.jpg"  alt="Burger" />
  </div>
</div>
<span className='md:text-xl md:ml-[45rem] text-7xl ml-[32rem] animate-pulse text-rose-400 font-descriptions'>Swipe left <FaLongArrowAltRight className='md:ml-[45rem] w-20 ml-[37rem]'/></span>
  {/* <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 m-10 pb-5">
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-100 to-rose-100" data-aos="flip-left">
          <div className="mb-2">
              <img src='./assets/review 3.jpg'></img>
          </div> 
      </div>
      <div className="p-4 h-64 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-200 to-rose-200 " data-aos="flip-right">
          <div className="mb-2">
          <img src='./assets/review 4.jpg' ></img>
          </div>
      </div>
      <div className="p-4 h-56 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-100 to-rose-100" data-aos="flip-left">
          <div className="mb-2">
          <img src='./assets/review 5.jpg' className=""></img>
          </div>
      </div>
  <div className="card lg:card-side  bg-gradient-to-r from-rose-300 to-rose-200 shadow-2xl w-80 mt-40 ml-[4rem]"  data-aos="fade-right">
  <div className="card-body">
  <div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src="/assets/tight-curls 1.jpg" className="w-full object-cover" alt="img-gallery" id='tight-curls 6' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/tight-curls 2.jpg" className="w-full object-cover" alt="img-gallery" id='tight-curls 2' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/tight-curls 3.jpg"  className="w-full object-cover" alt="img-gallery" id='tight-curls 3' />
  </div> 
  <div className="carousel-item w-full">  
    <img src="/assets/tight-curls 4.jpg" className="w-full object-cover" alt="img-gallery" id='tight-curls 4' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/tight-curls 5.jpg"  className="w-full object-cover" alt="img-gallery" id='tight-curls 5' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/tight-curls 6.jpg" className="w-full object-cover" alt="img-gallery" id='tight-curls 1' />
  </div> 
</div> 
<span className='text-xl ml-20 animate-pulse text-white font-descriptions'>Swipe left <FaLongArrowAltRight className='w-20'/></span>
  </div>
</div>
<div className="card lg:card-side  bg-gradient-to-r from-rose-300 to-rose-200 shadow-2xl w-80 mt-20 mb-20 ml-[4rem]"  data-aos="fade-up" data-aos-duration="3000">
  <div className="card-body">
  <div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src="/assets/medium-curls 2.jpg" className="w-full object-cover" alt="img-gallery" id='medium-curls 2' />
  </div> 
  <div className="carousel-item w-full"> 
    <img src="/assets/medium-curls 1.jpg" className="w-full object-cover" alt="img-gallery" id='medium-curls 1' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/medium-curls 3.jpg"  className="w-full object-cover" alt="img-gallery" id='medium-curls 3' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/medium-curls 4.jpg" className="w-full object-cover" alt="img-gallery" id='medium-curls 4' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/medium-curls 5.jpg"  className="w-full object-cover" alt="img-gallery" id='medium-curls 5' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/medium-curls 6.jpg" className="w-full object-cover" alt="img-gallery" id='medium-curls 6' />
  </div> 
</div>
<span className='text-xl ml-20 animate-pulse text-white font-descriptions'>Swipe left <FaLongArrowAltRight className='w-20'/></span>
  </div>
</div>
<div className="card lg:card-side   bg-gradient-to-r from-rose-300 to-rose-200 shadow-2xl w-80 mt-40 ml-[4rem]"  data-aos="fade-left">
  <div className="card-body">
  <div className="w-64 carousel rounded-box">
  <div className="carousel-item w-full">
    <img src="/assets/light-curls 1.jpg" className="w-full object-cover" alt="img-gallery" id='light-curls 1'  />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/light-curls 2.jpg" className="w-full object-cover" alt="img-gallery" id='light-curls 2' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/light-curls 3.jpg"  className="w-full object-cover" alt="img-gallery" id='light-curls 3' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/light-curls 4.jpg" className="w-full object-cover" alt="img-gallery" id='light-curls 4' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/light-curls 5.jpg"  className="w-full object-cover" alt="img-gallery" id='light-curls 5' />
  </div> 
  <div className="carousel-item w-full">
    <img src="/assets/light-curls 6.jpg" className="w-full object-cover" alt="img-gallery" id='light-curls 6' />
  </div> 
</div>
<span className='text-xl ml-20 animate-pulse text-white font-descriptions'>Swipe left <FaLongArrowAltRight className='w-20'/></span>
  </div>
</div>
  </div> */}







 </div>
    )
}


export default Testimonials;







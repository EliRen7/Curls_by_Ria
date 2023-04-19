import {AiFillInstagram} from 'react-icons/ai'
import{AiOutlineArrowLeft} from 'react-icons/ai'


function Testimonials(){
    return(
      <div className='bg-tan pb-20' id='testimonials'>
      <div className="mb-8 pt-40 text-center">
      <h1 className="font-headers text-6xl text-rose-300" data-aos="fade-up">Testimonials & Gallery</h1>
      <p className="text-lg text-violet-400" data-aos="fade-up">Read more reviews on Instagram!</p>
      <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className=' w-10 h-10 ml-[46rem]'/></a>
  </div>
  <div className="lg:grid lg:grid-cols-3 lg:gap-x-6 m-10 pb-5">
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-100 to-rose-100" data-aos="flip-left">
          <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold text-violet-500">John Doe</h5>
                  <div className="w-32 h-32 overflow-hidden rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                          className="object-cover object-center w-full h-full" /> 
                  </div> 
              </div>
          </div> 
      </div>
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-200 to-rose-200 " data-aos="flip-right">
          <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold  text-violet-500">michael james</h5>
              <div className="w-32 h-32 overflow-hidden rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                          className="object-cover object-center w-full h-full" />
                  </div>
              </div>
          </div>
      </div>
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-100 to-rose-100" data-aos="flip-left">
          <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold  text-violet-500">michael james</h5>
              <div className="w-32 h-32 overflow-hidden rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                          className="object-cover object-center w-full h-full" />
                  </div>
              </div>
          </div>
      </div>
  <div className="card lg:card-side bg-violet-300 shadow-2xl w-80 mt-40 ml-[4rem]"  data-aos="fade-up">
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
<div className="flex justify-center w-full gap-2 ">
  <a href="#tight-curls 2" className="btn btn-xs bg-rose-300 border-0 ">1</a> 
  <a href="#tight-curls 6" className="btn btn-xs bg-rose-200 border-0">2</a> 
  <a href="#tight-curls 3" className="btn btn-xs bg-rose-300 border-0">3</a> 
  <a href="#tight-curls 4" className="btn btn-xs bg-rose-200 border-0">4</a>
  <a href="#tight-curls 5" className="btn btn-xs bg-rose-300 border-0">5</a>
  <a href="#tight-curls 1" className="btn btn-xs bg-rose-200 border-0">6</a>
</div>
  </div>
</div>
<div className="card lg:card-side  bg-violet-300 shadow-2xl w-80 mt-20 mb-20 ml-[4rem]"  data-aos="fade-up" data-aos-duration="3000">
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
<div className="flex justify-center w-full gap-2 ">
  <a href="#medium-curls 2" className="btn btn-xs bg-rose-300 border-0">1</a> 
  <a href="#medium-curls 1" className="btn btn-xs bg-rose-200 border-0 ">2</a> 
  <a href="#medium-curls 3" className="btn btn-xs bg-rose-300 border-0">3</a> 
  <a href="#medium-curls 4" className="btn btn-xs bg-rose-200 border-0">4</a>
  <a href="#medium-curls 5" className="btn btn-xs bg-rose-300 border-0">5</a>
  <a href="#medium-curls 6" className="btn btn-xs bg-rose-200 border-0">6</a>
</div>
  </div>
</div>
<div className="card lg:card-side  bg-violet-300  shadow-2xl w-80 mt-40 ml-[4rem]"  data-aos="fade-up">
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
<div className="flex justify-center w-full gap-2 ">
  <a href="#light-curls 1" className="btn btn-xs bg-rose-300 border-0 ">1</a> 
  <a href="#light-curls 2" className="btn btn-xs bg-rose-200 border-0">2</a> 
  <a href="#light-curls 3" className="btn btn-xs bg-rose-300 border-0">3</a> 
  <a href="#light-curls 4" className="btn btn-xs bg-rose-200 border-0">4</a>
  <a href="#light-curls 5" className="btn btn-xs bg-rose-300 border-0">5</a>
  <a href="#light-curls 6" className="btn btn-xs bg-rose-200 border-0">6</a>
</div>
  </div>
</div>
  </div>
 </div>
    )
}


export default Testimonials;






// bg-gradient-to-r from-rose-100 via-rose-50 to-orange-50 



// <div className="pt-40 grid grid-cols-2 bg-tan">
//  <h1 className="font-headers text-6xl mb-10 ml-[8rem] text-rose-300">Testimonials</h1>
//  <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className=' w-10 h-10'/></a>
//  <h6 className="font-descriptions text-end mr-60 mt-5">**Swipe left on the images to view more!</h6> <div className="card card-side bg-base-100  w-2/3 ml-[12rem]">
//  <div className="card card-side bg-base-100 w-2/3 ml-[2rem]">
//       <div className="w-60 carousel rounded-box">
//    <div className="carousel-item w-full">
//      <img src="/assets/testimonial1.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//    </div> 
//    <div className="carousel-item w-full">
//      <img src="/assets/testimonial1.5.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
//    </div> 
//  </div>
//  </div>
//  </div>
//  </div> 




import {AiFillInstagram} from 'react-icons/ai'


function Testimonials(){
    return(
      <div className='bg-tan'>
      <div className="mb-8 pt-40 text-center ">
      <h1 className="font-headers text-6xl text-rose-300">Testimonials</h1>
      <p className="text-lg text-violet-400">What clients say about me</p>
  </div>
  <div className="lg:grid lg:grid-cols-3 lg:gap-x-2 m-10 pb-5">
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-50 via-rose-50 to-rose-100 ">
          <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold text-violet-400">John Doe</h5>
                  <div className="w-32 h-32 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                          className="object-cover object-center w-full h-full" /> 
                  </div>
              </div>
          </div>
      </div>
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-rose-100 via-rose-50 to-orange-50 ">
          <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold  text-violet-400">michael james</h5>
              <div className="w-32 h-32 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                          className="object-cover object-center w-full h-full" />
                  </div>
              </div>
          </div>
      </div>
      <div className="p-4 text-gray-800 rounded-lg shadow-md bg-gradient-to-r from-orange-50 via-rose-50 to-rose-100 ">
          <div className="mb-2">
              <p className="mb-2 text-center text-gray-600 ">
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
                  " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique sapiente iusto esse. "
              </p>
              <div className="flex flex-col items-center justify-center">
              <h5 className="font-bold  text-violet-400">michael james</h5>
              <div className="w-32 h-32 overflow-hidden bg-gray-100 border-2 border-indigo-100 rounded-full">
                      <img src="https://cdn.pixabay.com/photo/2017/05/19/12/38/entrepreneur-2326419__340.jpg" alt="img"
                          className="object-cover object-center w-full h-full" />
                  </div>
              </div>
          </div>
      </div>
      
  </div>
 </div>
    )
}


export default Testimonials;




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




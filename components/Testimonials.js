import {AiFillInstagram} from 'react-icons/ai'


function Testimonials(){
    return(
        
 <div className="pt-40 grid grid-cols-2 bg-tan">
 <h1 className="font-headers text-6xl mb-10 ml-[8rem] text-rose-300">Testimonials</h1>
 <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className=' w-10 h-10'/></a>
 <h6 className="font-descriptions text-end mr-60 mt-5">**Swipe left on the images to view more!</h6> <div className="card card-side bg-base-100  w-2/3 ml-[12rem]">
 <div className="card card-side bg-base-100 w-2/3 ml-[2rem]">
      <div className="w-60 carousel rounded-box">
   <div className="carousel-item w-full">
     <img src="/assets/testimonial1.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
   </div> 
   <div className="carousel-item w-full">
     <img src="/assets/testimonial1.5.jpg" className="w-full" alt="Tailwind CSS Carousel component" />
   </div> 
 </div>
 </div>
 </div>
 </div> 
    )
}


export default Testimonials;






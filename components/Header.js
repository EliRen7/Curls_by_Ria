import {AiOutlineArrowUp} from 'react-icons/ai'
import Image from 'next/image';
import logo from "../public/assets/logo.png"



function Header() {
  return (
<div
      class="hero min-h-screen bg-korean-description w-[84rem] h-[185rem] md:w-full pb-100 md:pb-0 md:hero md:h-screen">
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-lg md:max-w-xl scale-150 md:scale-125 px-6 md:px-12">
      <h1 className="mb-5 text-8xl font-bold">Hello</h1>
      <p className="mb-5 text-lg">
      I’ll be on maternity leave until July! Stay updated by following me on Instagram (@curlsbyria) for any announcements. Thank you for your support, and I can’t wait to see you all when I return!
      </p>
      <button className="btn btn-neutral text-white text-3xl w-full sm:w-auto"><a href='https://www.instagram.com/curlsbyria/?igshid=MzRlODBiNWFlZA%3D%3D' target="_blank">Instagram</a></button>
    </div>
  </div>
</div>
     
  );
}


// ORIGINAL

// <div className="w-[84rem] h-[180rem] md:w-full pb-96 md:pb-0 md:hero md:h-screen bg-logo-background" id="home">
// <div className="hero-content  flex-col lg:flex-row-reverse ">
//   <div>
//   <Image 
//       src={logo}  
//       className="mr-26 w-[92rem] mt-[60rem] md:w-9/12 md:mr-20 md:mt-5 md:ml-40" 
//       alt='img' 
//       data-aos="fade-down-right"/>
//     <p className="text-5xl ml-32 md:ml-56 p-10 md:py-4 md:p-28 md:text-2xl text-black font-header" data-aos="fade-left"> 
//     ✨South Korea&apos;s first official curl specialist!✨ 
//      </p> 
//      <p className="text-5xl text-korean-description p-10 md:py-0 ml-56 md:ml-56 md:p-40 md:text-2xl font-KoreanHeader" data-aos="fade-left">
//      대한민국에 최초의 곱슬머리 전문 헤어살롱 
//      </p>
//      <div className='z-50 invisible fixed ml-[60rem] h-28 w-28 rounded-full mt-[2rem] md:mt-[7rem] md:w-10 md:h-10 md:ml-[81rem] bg-gradient-to-r from-rose-100 to-rose-300 md:rounded-3xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" data-aos="fade-left "' data-aos="fade-up">
//       <a href='#home'>
//     <AiOutlineArrowUp className='w-28 h-28 md:w-10 md:h-10 text-white'/> 
//     </a>
//     </div>
//   </div>
// </div>
// </div>



export default Header;




// invisible md:visible

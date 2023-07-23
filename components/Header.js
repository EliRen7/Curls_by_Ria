import {AiOutlineArrowUp} from 'react-icons/ai'
import Image from 'next/image';
import logo from "../public/assets/logo.png"
 

function Header(){
    return( 
<div className="w-[84rem] h-[185rem] md:w-full pb-96 md:pb-0 md:hero md:h-screen bg-rose-50" id="home">
<div className="hero-content  flex-col lg:flex-row-reverse ">
  <div>
  <Image 
      src={logo}  
      className="mr-26 w-[92rem] mt-[60rem] md:w-9/12 md:mr-20 md:mt-5 md:ml-5" 
      alt='img' 
      data-aos="fade-down-right"/>
    <p className="text-5xl ml-24 md:ml-0 p-10 md:py-4 md:p-28 md:text-2xl  text-black font-about" data-aos="fade-left"> 
    ✨South Korea&apos;s first official curl specialist!✨ 
     </p> 
     <p className="text-5xl text-korean-description p-10 md:py-0 ml-52 md:ml-0 md:p-40 md:text-2xl font-koreanHeader" data-aos="fade-left">
     대한민국에 최초의 곱슬머리 전문 헤어살롱 
     </p>
     <div className='z-50 invisible fixed ml-[60rem] h-28 w-28 rounded-full mt-[2rem] md:mt-[7rem] md:w-10 md:h-10 md:ml-[81rem] bg-gradient-to-r from-rose-100 to-rose-300 md:rounded-3xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" data-aos="fade-left "' data-aos="fade-up">
      <a href='#home'>
    <AiOutlineArrowUp className='w-28 h-28 md:w-10 md:h-10 text-white'/> 
    </a>
    </div>
  </div>
</div>
</div>
    )
}

export default Header;






// invisible md:visible

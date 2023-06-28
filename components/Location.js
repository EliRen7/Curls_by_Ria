import Image from 'next/image';
import {FaLongArrowAltLeft} from 'react-icons/fa'
import Location1 from '../public/assets/location1.jpg'
import Location2 from '../public/assets/location2.jpg'
import Location3 from '../public/assets/location3.jpg'
import Location4 from '../public/assets/location4.jpg'
import Location5 from '../public/assets/location5.jpg'
import Location6 from '../public/assets/location6.jpg'

export default function Location(){
    return (
    <div className="bg-tan w-[80rem] md:w-full pt-[8rem]" id='location'>
    <h1 className="font-headers text-9xl md:text-5xl pt-[3rem] text-rose-300 ml-[15rem] md:ml-[38rem]"  data-aos="fade-right" >Location Guide</h1>
    <div className="flex justify-center ml-5 md:ml-[1px] w-full py-20 md:py-0 gap-3 md:mx-0.5">
  <a href="#englishlocation" className="btn md:text-md text-5xl btn-lg md:btn-xs bg-rose-300 border-none dark:text-white">English</a> 
  <a href="#koreanlocation" className="btn md:text-md text-5xl btn-lg md:btn-xs bg-rose-300 border-none dark:text-white">한국어</a> 
</div> 
<div className="carousel w-full">
 <div id="englishlocation" className="carousel-item w-full">
     <p className="indent-9 pl-20 pr-20 md:pl-20 text-7xl md:text-lg text-justify mt-60 md:mt-[0rem]" > 
     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
      The point of using Lorem Ipsum is that it has a  normal distribution of letters as opposed to using  making it look like readable
       English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their  model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have 
     evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.
 </p>
 </div>
 
       <div id="koreanlocation" className="carousel-item w-full">
         <p className="indent-9 pl-20 pr-20 md:p-20 text-7xl md:text-lg text-justify mt-60 md:mt-[0rem]" > 
         안녕하세요 여러분! 저는 리아라고 하고요, Curls by Ria의 대표입니다 저는  때부터 미용에 대해 열정과 관심이 있었습니다. 그래서 제가 사랑하는 것과 잘하는 것과 다른 사람들이 필요하는 것을 하는 상황이 나타났을 때 운명처럼 보였습니다. 2021년부터 제가 최고의 곱슬머리 전문가가 되기 위해 많은 투자를 했습니다. 그동안  Curly Hair Artistry (반곱슬~곱슬머리 기술 교육) 마스터 프로그램과 Cut it Kinky(강한곱슬머리 기술 교육)를 통해 곱슬머리 전문적인 교육을 받았습니다. 그리고 고객들에게 더 많은 서비스를 제공할 수 있게  이용사 국가기술자격증을 취득했습니다.
         이제, 그 지루한 내용은 그만~! 저는 핑크색에 아주아주 사랑하는 포켓몬 띠부실를 모으는 미국 교포일 뿐이에요 ㅋㅋㅋ 아! 그리고 저는 항상 강아지 두 마리(감자와 슌돌)와 함께 일하</p>
   </div>
   </div>
  <div className="carousel rounded-box ml-20 mr-20 md:w-fit md:h-80 lg:w-fit">
  <div className="carousel-item">
    <Image
    src={Location1} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  
  <div className="carousel-item">
    <Image
    src={Location2} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={Location3} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={Location4} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={Location5} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
  <div className="carousel-item">
    <Image
    src={Location6} 
    className=' md:w-fit md:h-80 '
    alt="img" />
  </div> 
</div>
<span className='md:text-xl md:ml-[45rem] text-7xl ml-[32rem] animate-pulse text-rose-400 font-descriptions'>Swipe left <FaLongArrowAltLeft className='md:ml-[45rem] w-20 ml-[37rem]'/></span>
// <div className='md:invisible divider pt-40 ml-32 mr-32'></div>
</div>
    )
    }

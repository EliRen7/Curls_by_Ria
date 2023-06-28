import Image from 'next/image';
import aboutMePic from '../public/assets/about-pic.jpg'


function About(){
    return (
        <div className="bg-tan w-[80rem] md:w-full" id="about">
     <h1 className="font-headers text-9xl md:text-5xl pt-[3rem] text-rose-300 ml-[25rem] md:ml-[38rem] mb-5"  data-aos="fade-right" >About Me</h1>
    <div className="card lg:card-side w-11/12 md:ml-[7rem]">
  <Image 
    src={aboutMePic}
   className="md:w-96 md:h-full md:mt-10 md:ml-0 ml-48 w-3/4 mt-24 mr-10 rotate-6 rounded-3xl hover:rotate-12"
   alt='img'/>
 <div className="card-body md:gap-4" data-aos="fade-left">
 <div className="flex justify-center ml-5 md:ml-[.5rem] w-full py-20 md:py-0 gap-3 md:mx-0.5">
  <a href="#english" className="btn md:text-md text-5xl btn-lg md:btn-xs bg-rose-300 border-none dark:text-white">English</a> 
  <a href="#korean" className="btn md:text-md text-5xl btn-lg md:btn-xs bg-rose-300 border-none dark:text-white">한국어</a> 
</div> 
 <h2 className="card-title font-about ml-[22rem] md:ml-[22rem] md:mx-[21rem] text-8xl md:text-3xl text-rose-300">Hey y’all!</h2>
 <div className="carousel w-full">
 <div id="english" className="carousel-item w-full">
     <p className="indent-9 pl-20 md:pl-5 text-7xl md:text-lg text-justify mt-60 md:mt-[5rem]" > 
     My name is Ria, and I am the owner of Curls by Ria. I’ve been in the curly hair game personally since 2018 when I started to learn about how to care for my own naturally wavy hair.
    Then, once I got my official hairdresser’s license in South Korea, I launched Curls by Ria in 2021. I’ve actually been passionate about hair and the beauty world in general ever since I was in middle school, so it kind of seemed like fate when circumstances led me to where I am today: doing what I love + what I’m good at + what others need. 
     Since 2021, I’ve invested a lot into becoming the best curl specialist I can be by receiving professional education from Curly Hair Artistry through their Mastery Program and Cut it Kinky (the pioneers of tight curl education). Back in April 2023, I also got officially licensed as a barber in South Korea so I can further serve my clients.
       <br></br>
    But, enough of that ~fancy~ stuff. Really, I’m just a Korean American gal who is obsessed with the color pink and collecting Pokémon stickers hehe. Oh! And, I always have my two pups Gamja and Shoondol working with me, so please let me know if you are allergic or sensitive to dogs~
    <br></br>
     When you visit Curls by Ria, I hope you know that you are in safe hands, and I am always here to listen to what YOU want and need. Thanks for reading, and I can’t wait to meet you!
 </p>
 </div>
       <br></br>
       <div id="korean" className="carousel-item w-full">
         <p className="indent-9 pl-20 md:pl-5 text-7xl md:text-lg text-justify mt-60 md:mt-[5rem]" > 
         안녕하세요 여러분! 저는 리아라고 하고요, Curls by Ria의 대표입니다~ 저는 2018년부터 곱슬머리에 관해 관심을 생겼고 개인적으로 곱슬머리를 관리법에 대해 배우기 시작했습니다. 그러던 2021년에 미용사 (헤어) 국가기술자격증을 취득하고 Curls by Ria를 창립하게 되었습니다. 저는 사실 중학교 때부터 미용에 대해 열정과 관심이 있었습니다. 그래서 제가 사랑하는 것과 잘하는 것과 다른 사람들이 필요하는 것을 하는 상황이 나타났을 때 운명처럼 보였습니다. 2021년부터 제가 최고의 곱슬머리 전문가가 되기 위해 많은 투자를 했습니다. 그동안  Curly Hair Artistry (반곱슬~곱슬머리 기술 교육) 마스터 프로그램과 Cut it Kinky(강한곱슬머리 기술 교육)를 통해 곱슬머리 전문적인 교육을 받았습니다. 그리고 고객들에게 더 많은 서비스를 제공할 수 있게 2023년 4월에 이용사 국가기술자격증을 취득했습니다.
         <br></br>
         이제, 그 지루한 내용은 그만~! 저는 핑크색에 아주아주 사랑하는 포켓몬 띠부실를 모으는 미국 교포일 뿐이에요 ㅋㅋㅋ 아! 그리고 저는 항상 강아지 두 마리(감자와 슌돌)와 함께 일하는데 혹시 강아지 알레르기가 있거나 예민하신 분들은 알려주세요~
         <br></br>
         Curls by Ria를 방문할 때, 저를 정말 믿을 수 있다고 느끼길 바랍니다. 저는 항상 고객님의 의사가 우선되도록 최선을 다하겠습니다. 여기까지 읽어주셔서 감사합니다~ 빨리 만나고 싶어요!</p>
   </div>
   
</div>
</div> 
</div>
</div>
    )
}

export default About; 


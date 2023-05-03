import {AiOutlineArrowUp} from 'react-icons/ai'

function Header(){
    return(
<div className="w-max min-h-screen md:hero md:min-h-screen bg-rose-50" id="home">
<div className="hero-content flex-col lg:flex-row-reverse">
  <img src='/assets/main-pic2.JPG ' className="w-auto mt-2/4 md:visible md:max-w-md md:mt-20 md:h-full md:ml-0  " alt='img'/>
  <div>
  <img src='/assets/curlsbyrialogo2.png'  className="mt-10 mr-20 w-full md:w-9/12 md:mr-20 md:mt-10 md:ml-5" alt='img' data-aos="fade-down-right"/>
    <p className="invisible md:visible md:py-4 md:p-20 md:text-lg" data-aos="fade-left">Provident cupiditate voluptatem et in. 
    Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
    In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in.
    excepturi exercitationem quasi. 
     </p> 
     <p className="invisible md:visible md:py-0 md:p-20 md:text-lg" data-aos="fade-left">은 출판이나 그래픽 디자인 분야에서 폰트, 타이포그래피, 레이아웃 
     같은 그래픽 요소나 시각적 연출을 보여줄 때 사용하는 표준 채우기 텍스트로, 최종 결과물에 들어가는 실제적인 문장 
     내용이 채워지기 전에 시각 디자인 프로젝트
     </p>
     <div className='z-7 fixed ml-[70rem] h-28 w-28 rounded-full md:w-10 md:h-10 md:ml-[81rem] bg-gradient-to-r from-purple-600 to-pink-600 md:rounded-3xl opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" data-aos="fade-left "' data-aos="fade-up">
      <a href='#home'>
    <AiOutlineArrowUp className=' w-28 h-24 md:w-10 md:h-10 text-white'/> 
    </a>
    </div>
  </div>
</div>
</div>
    )
}

export default Header;



// py-32 p-28 text-7xl <p> tag englisht


import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import Image from 'next/image';
import footerLogo from '../public/assets/curls-icon white.png'

function Footer() {
    return(
      <footer className="footer w-[80rem] md:w-full items-center p-4 bg-zinc-300 text-neutral-content">
      <div className="items-center grid-flow-col">
        <Image
          src={footerLogo}
          className="w-72 md:w-40"
          alt='img'/>
      </div> 
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-auto mr-40 mt-10">
        <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className='w-20 h-20 md:w-10 md:h-10 '/></a> 
        <a href='https://www.youtube.com/@WavyCurlyRia' target="_blank"> <AiFillYoutube className='w-20 h-20 md:w-10 md:h-10 '/></a>
        <a href='https://facebook.com/curlsbyria' target="_blank"><AiFillFacebook className='w-20 h-20 md:w-10 md:h-10' /></a>
      </div>
    </footer>
    )
}

export default Footer

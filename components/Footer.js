import {AiFillInstagram} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'

function Footer() {
    return(
      <footer className="footer items-center p-4 bg-zinc-300 text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src="./assets/curls-icon white.png" className="w-40"/>
       
      </div> 
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-auto mr-40 mt-10">
        <a href='https://www.instagram.com/curls.byria/?hl=en' target="_blank"> <AiFillInstagram className=' w-10 h-10'/></a> 
        <a href='https://www.youtube.com/@WavyCurlyRia' target="_blank"> <AiFillYoutube className=' w-10 h-10 '/></a>
        <a href='https://facebook.com/curlsbyria' target="_blank"><AiFillFacebook className=' w-10 h-10' /></a>
      </div>
    </footer>
    )
}

export default Footer
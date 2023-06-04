import {AiOutlineArrowUp} from 'react-icons/ai'


function Contact () {
    return(
     <section className="bg-tan w-[80rem] md:w-full dark:bg-tan pt-40 pb-60" id="contact">
  <div className="py-8 lg:py-16 px-4 mx-auto min-h-screen-xl max-w-screen-lg md:max-w-screen-md rounded-3xl shadow-xl bg-zinc-100 ">
      <h2 className="mb-4 text-9xl md:text-5xl tracking-tight font-extrabold text-center text-rose-300 font-headers">Contact Me!</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 text-5xl md:text-xl sm:text-xl">Got a technical issue? Want to send feedback about a service? Need more details about a treatment option? Let me know.</p>
      <form action="https://formcarry.com/s/5pQxq6cPy5" method="POST" accept-charset="UTF-8" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-5xl md:text-sm font-medium text-gray-900 dark:text-gray-300 ">Your email</label>
              <input name="email" type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-4xl md:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@curlsbyria.com" required />
          </div>
          <div>
              <label for="subject" className="block mb-2 text-5xl md:text-sm font-medium text-gray-900 dark:text-gray-300 ">Subject</label>
              <input name="subject"type="text" id="subject" className="block p-3 w-full text-4xl md:text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let me know how I can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-5xl md:text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' rows="6" className="block p-2.5 w-full text-4xl md:text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:bg-white dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className=" py-8 md:py-3 px-5 text-5xl md:text-sm font-medium text-center text-white rounded-lg bg-rose-300 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
      </form> 
  </div>
    
</section>


    )
}

export default Contact;





function About(){
    return (
        <div className="bg-tan">
     <h1 className="font-headers text-6xl pt-40 text-rose-300 ml-[8rem] mb-10" >About Me</h1>
    <div className="card lg:card-side w-11/12">
  <img src="./assets/profile2.jpg" className="w-96 ml-40 mr-5 rotate-6 rounded-3xl border-dotted border-black border-8"/>
  <div className="card-body">
    <h2 className="card-title font-descriptions text-3xl">Hello, I'm Ria!</h2>
    <p className="text-lg text-justify mt-5"> 
        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
        software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</div>
</div>
    )
}

export default About; 
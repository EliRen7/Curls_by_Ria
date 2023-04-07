function Footer() {
    return(
    <footer className="footer p-10 bg-base-200 text-base-content mt-40">
  <div>
    <span className="footer-title">Services</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div> 
  <div>
    <span className="footer-title">Contact</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Full Name</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="First & Last name" className="input input-bordered w-full pr-16" /> 
      </div>
      <label className="label">
        <span className="label-text">Email Address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer
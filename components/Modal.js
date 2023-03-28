
function Modal() {

  return (
    <div>
      <label
        htmlFor="my-modal-4"
        className="btn bg-rose-300 border-rose-300 text-base mb-30">
        Book Now
      </label>
      <form>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">Request an appointment</h3>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Submit!
            </label>
          </div>
        </label>
      </label>
      </form>
    </div>
  );
}

export default Modal;
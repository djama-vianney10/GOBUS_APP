
function Download() {
  return (
    <div>    
    <section >
    <div className="container py-5" data-aos="fade-right" data-aos-delay="500">
    <div className="row align-items-center">

      <div className="col-md-6 text-center mb-4 mb-md-0">
        <img
          src="/images/phone.webp"
          alt="phone"
          className="img-fluid"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </div>

      <div className="col-md-6 text-md-start text-center">
        <h3>Téléchargez notre application</h3>
        <p>
          Si vous voulez profiter pleinement de nos services, notre application est disponible sur :
        </p>

        <div className="d-flex justify-content-center justify-content-md-start gap-3">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/google_store.png"
              alt="Play Store"
              style={{ maxWidth: "150px", height: "auto" }}
            />
          </a>
        </div>
      </div>

    </div>
  </div>
</section> 
</div>
  )
}

export default Download

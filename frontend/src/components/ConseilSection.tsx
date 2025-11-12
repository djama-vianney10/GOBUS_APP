import { Link } from "react-router-dom"

function ConseilSection() {

  return (
    <div className="conseil">
      <div className='bg-success py-5'>
      <section className="container " data-aos="fade-in" data-aos-delay="300">
        <div className="row align-items-center py-4">
        
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <img
              src="/images/escro.webp"
              alt="image"
              className="img-fluid"
              style={{ width: '500px', height: 'auto' }}
            />
          </div>

          <div className="col-md-6 text-white">
            <h2 className="mb-4 h2">
              Collaborez avec nous pour prévenir les escroqueries et assurer votre sécurité.
            </h2>
            <p className="mb-4 lead">
              Chez <strong>Bus Go</strong>, nous nous engageons à offrir une plateforme sécurisée, bien que les tentatives d'arnaque persistent à travers le monde.  
              Pour nous aider à vous protéger, suivez nos conseils et signalez toute activité suspecte.  
              Votre collaboration renforce notre sécurité commune.
            </p>
            <Link to={"/conseil"} className='btn btn-light py-3 text-secondary fs-5'>Consultez nos conseils</Link>
          </div>
        </div>
      </section> 
     </div>
    </div>
  )
}

export default ConseilSection

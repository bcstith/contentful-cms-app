import heroImage from './assets/hero.svg'


const Hero = () => {
  return <section className="hero">
    <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos reiciendis dolore corporis aut tempora deleniti ipsum iure.
            Dolorem vero qui quaerat itaque alias? Commodi nulla distinctio minus suscipit nobis ab.</p>
        </div>
        <div className="img-container">
          <img src={heroImage} alt="Hero Image" className='img'/>
        </div>
    </div>
  </section>
}

export default Hero
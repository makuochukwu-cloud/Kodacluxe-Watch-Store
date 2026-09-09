import "../stylesheet/AboutUs.css";

export default function AboutUs() {
  return (
    <section>
      <div className="about-hero">
        <div className="about-texts">
          <h4>About us</h4>
          <h2>TIMELESS BY CHOICE</h2>
          <p>
            At Kodacluxe, we curate more than just watches - we currate
            statements of style, succes, and individuality.
          </p>
        </div>
      </div>
      <div className="our-story">
        <div className="card1">
          <h4>Our Story</h4>
          <h2>BUILT ON PASSION. DRIVEN BY EXCELLENCE.</h2>
          <p>
            KodacLuxe began with a simple belief: everyone deserves to own a
            timepiece that reflects who they are and where they're going.
          </p>

          <p>
            From iconic classics to modern masterpieces, we handpick each watch
            with a commitment to quality, authenticity, and elegance
          </p>

          <div className="signatory">
            <p className="sign">Makuo Victor</p>
            <h5>FOUNDER</h5>
          </div>
        </div>
        <div className="card2"></div>
      </div>
      <div className="Our-values">
        <h2 className="values-header">WHAT DEFINES US</h2>
        <div className="card-wrapper">
          <div className="cards">
            <img src="" alt="" />
            <h2>Authenticity</h2>
            <p>Every timepiece is Grade A. No compromises, no exceptions</p>
          </div>
          <div className="cards">
            <img src="" alt="" />
            <h2>Quality</h2>
            <p>
              We source the finest materials and ensure exceptional craftmanship
            </p>
          </div>
          <div className="cards">
            <img src="" alt="" />
            <h2>Exclusitivity</h2>
            <p>
              Our collection is curated for those who value uniqueness and
              distinctions
            </p>
          </div>
          <div className="cards">
            <img src="" alt="" />
            <h2>Experience</h2>
            <p>
              From browsing to delivery, we provide a seamless luxury
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

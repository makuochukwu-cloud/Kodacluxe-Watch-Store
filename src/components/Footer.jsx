import "../stylesheet/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <h2>
            <a href="/">KODACLUXE</a>
          </h2>
          <span>Time Elevated</span>
          <p>Where Elegance Meets Time.</p>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>SHOP</h3>
            <a href="#">Shop All</a>
            <a href="#">Collections</a>
            <a href="#">Men's</a>
            <a href="#">Women's</a>
          </div>

          <div className="footer-column">
            <h3>COMPANY</h3>
            <a href="/about">About Us</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-column">
            <h3>FOLLOW</h3>
            <a href="/contact">Instagram</a>
            <a href="/contact">TikTok</a>
            <a href="/contact">Facebook</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 KodacLuxe. All rights reserved.</p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

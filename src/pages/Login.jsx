import "../stylesheet/Login.css";
import { useState } from "react";

export default function Login() {
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="login-body">
      <div className="container">
        <h2>KODACLUXE</h2>

        <p className="login-intro">
          Create a Kodacluxe Account to unlock the full Client experience.
        </p>

        <div className="login-signup-btn">
          <div className={!signUp ? "login-btn active" : "login-btn"}>
            <button onClick={() => setSignUp(false)}>
              Login
            </button>
          </div>

          <div className={signUp ? "signup-btn active" : "signup-btn"}>
            <button onClick={() => setSignUp(true)}>
              Signup
            </button>
          </div>
        </div>

        {!signUp ? (
          <div className="login-container">
            <form>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                required
              />

              <input
                type="password"
                name="password"
                placeholder="PASSWORD"
                required
              />

              <button type="submit">LOGIN</button>
            </form>

            <a href="#">Forgot Password</a>
          </div>
        ) : (
          <div className="signup-container">
            <form>
              <select name="title" defaultValue="" required>
                <option value="" disabled hidden>
                  TITLE
                </option>
                <option value="Mr">Mr.</option>
                <option value="Mrs">Mrs.</option>
                <option value="Other">Other</option>
              </select>

              <input type="text" placeholder="FIRST NAME" required />

              <input type="text" placeholder="LAST NAME" required />

              <input type="email" placeholder="EMAIL ADDRESS" required />

              <input type="password" placeholder="PASSWORD" required />

              <div className="agree-checkbox">
                <input type="checkbox" required />

                <p>
                  I agree that my personal data is used to inform me about
                  personalized offers, news and updates through various
                  channels. I confirm to have read and understood the privacy
                  notice.
                </p>
              </div>

              <button type="submit">CREATE ACCOUNT</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
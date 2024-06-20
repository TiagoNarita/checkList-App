import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.signUp}>
          <form className={styles.form}>
            <h1 className={styles.title}>Create Account</h1>
            <div className={styles.socialContainer}>
              <a href="#">
                <i>
                  <FaGooglePlusG />
                </i>
              </a>
              <a href="#">
                <i></i>
              </a>
              <a href="#">
                <i></i>
              </a>
            </div>
            <p className={styles.p}>or use email for registration</p>

            <FaGooglePlusG />
            <input
              className={styles.inputPlace}
              type="text"
              placeholder="Name"
            />
            <input
              className={styles.inputPlace}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.inputPlace}
              type="password"
              placeholder="Password"
            />
            <button className={styles.buttonPut}>Sign Up</button>
          </form>
        </div>
        {/* login div part */}
        <div className={styles.signIn}>
          <form className={styles.form}>
            <h1 className={styles.title}>sign In</h1>
            <div className={styles.socialContainer}>
              <a href="#" className={styles.icon}>
                <i>
                  <FaFacebookF />
                </i>
              </a>
              <a href="#" className={styles.icon}>
                <i>
                  <FaGooglePlusG />
                </i>
              </a>
              <a href="#" className={styles.icon}>
                <i>
                  <FaLinkedinIn />
                </i>
              </a>
            </div>
            <p className={styles.p}>or use your account</p>

            <input
              className={styles.inputPlace}
              type="email"
              placeholder="Email"
            />
            <input
              className={styles.inputPlace}
              type="password"
              placeholder="Password"
            />
            <a href="#" className={styles.icon}>
              Forget your Password?
            </a>
            <button className={styles.buttonPut}>Sign In</button>
          </form>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            <div className={styles.overlayLeft}>
              <h1 className={styles.title}>Welcome Back!</h1>
              <p className={styles.p}>
                To keep connected with us please login with your personal info
              </p>
              <button className={styles.buttonPut} id={styles.signInButton}>
                Sign In
              </button>
            </div>
            <div className={styles.overlayRight}>
              <h1 className={styles.title}>Hello, Friend</h1>
              <p className={styles.p}>
                Enter your personal details and start journey with us
              </p>
              <button className={styles.buttonPut} id={styles.signInButton}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <script type="text/javascript"></script>
    </main>
  );
}

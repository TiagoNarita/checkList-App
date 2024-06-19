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
                <i></i>
              </a>
              <a href="#">
                <i></i>
              </a>
              <a href="#">
                <i></i>
              </a>
            </div>
            <p className={styles.p}>or use email for registration</p>
            <input
              className={styles.inputPlace}
              type="text"
              placeholder="Name"
            />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        {/* login div part */}
        <div className={styles.signIn}>
          <form className={styles.form}>
            <h1 className={styles.title}>sign In</h1>
            <div className={styles.socialContainer}>
              <a href="#">
                <i></i>
              </a>
              <a href="#">
                <i></i>
              </a>
              <a href="#">
                <i></i>
              </a>
            </div>
            <p className={styles.p}>or use your account</p>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forget your Password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div className={styles.overlayContainer}>
          <div className={styles.overlayLeft}>
            <h1 className={styles.title}>Welcome Back!</h1>
            <p className={styles.p}>
              To keep connected with us please login with your personal info
            </p>
            <button>Sign In</button>
          </div>
          <div className={styles.overlayRight}>
            <h1 className={styles.title}>Hello, Friend</h1>
            <p className={styles.p}>
              Enter your personal details and start journey with us
            </p>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </main>
  );
}

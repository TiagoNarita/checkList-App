"use client";

import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import styles from "./page.module.css";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const { register } = useForm();

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <main id="main" className={styles.main}>
        <div
          className={`${styles.container} ${
            isRightPanelActive ? styles.rightPanelActive : ""
          }`}
        >
          <div className={styles.signUp}>
            <form className={styles.form}>
              <h1 className={styles.title}>Create Account</h1>
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
              <p className={styles.p}>or use email for registration</p>

              <input
                className={styles.inputPlace}
                type="text"
                placeholder="Name"
                {...register("name")}
              />
              <input
                className={styles.inputPlace}
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              <input
                className={styles.inputPlace}
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <button onClick={handleLogin} className={styles.buttonPut}>
                Sign Up
              </button>
            </form>
          </div>
          {/* login div part */}
          <div className={styles.signIn}>
            <form className={styles.form}>
              <h1 className={styles.title}>Todo-APP</h1>
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
                <button
                  onClick={handleSignInClick}
                  className={styles.buttonPut}
                  id={styles.signInButton}
                >
                  Sign In
                </button>
              </div>
              <div className={styles.overlayRight}>
                <h1 className={styles.title}>Hello, Friend</h1>
                <p className={styles.p}>
                  Enter your personal details and start journey with us
                </p>
                <button
                  onClick={handleSignUpClick}
                  className={styles.buttonPut}
                  id={styles.signInButton}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
        <script type="text/javascript">const</script>
      </main>
    </>
  );
}

"use client";

import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import styles from "../styles/page.module.scss";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logoImage from "../public/Gray and Black Simple Studio Logo.png";
import Image from "next/image";
import { SignUp } from "../components/SignUp";
import { SignIN } from "@/components/SignIn";

export default function Home() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <>
      <main id="main" className={styles.main}>
        <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ""}`}>
          <SignUp />
          <SignIN />
          {/* transition part */}
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
                <p className={styles.p}>Enter your personal details and start journey with us</p>
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
      </main>
    </>
  );
}

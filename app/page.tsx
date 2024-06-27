"use client";

import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import styles from "./page.module.scss";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import logoImage from "../public/Gray and Black Simple Studio Logo.png";
import Image from "next/image";

const signUpDataSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string({
      required_error: "Enter a valid email",
      invalid_type_error: "Enter a valid email",
      message: "Enter a valid email",
    })
    .email({ message: "Enter a valid email" }),
  password: z.string().min(6, "The password must be at least 6 characters"),
});

type signUpDataSchema = z.infer<typeof signUpDataSchema>;

export default function Home() {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpDataSchema>({
    resolver: zodResolver(signUpDataSchema),
  });
  console.log(errors);
  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  function handleSingUp(data: signUpDataSchema) {
    console.log(data);
  }

  async function handleLogin(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <>
      <main id="main" className={styles.main}>
        <div className={`${styles.container} ${isRightPanelActive ? styles.rightPanelActive : ""}`}>
          <div className={styles.signUp}>
            <form className={styles.form} onSubmit={handleSubmit(handleSingUp)}>
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
                {...register("name", { required: true })}
              />
              {errors.name && <p className={styles.errors}>{errors.name.message}</p>}
              <input
                className={styles.inputPlace}
                type="email"
                placeholder="Email"
                {...register("email")}
              />
              {errors.email && <p className={styles.errors}>{errors.email.message}</p>}
              <input
                className={styles.inputPlace}
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && <p className={styles.errors}>{errors.password?.message}</p>}
              <button className={styles.buttonPut} type="submit">
                Sign Up
              </button>
            </form>
          </div>
          {/* login div part */}
          <div className={styles.signIn}>
            <form className={styles.form}>
              <Image src={logoImage} alt="Logo" className={styles.logo} />
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

              <input className={styles.inputPlace} type="email" placeholder="Email" />
              <input className={styles.inputPlace} type="password" placeholder="Password" />
              <a href="#" className={styles.icon}>
                Forget your Password?
              </a>
              <button onClick={handleLogin} className={styles.buttonPut}>
                Sign In
              </button>
            </form>
          </div>
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

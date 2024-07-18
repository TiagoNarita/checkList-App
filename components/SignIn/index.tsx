import { z } from "zod";
import styles from "../../styles/page.module.scss";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import logoImage from "../../public/Gray and Black Simple Studio Logo.png";
import Image from "next/image";

const signInDataSchema = z.object({
  email: z.string().email({ message: "Enter a valid email" }),
  password: z.string().min(6, "The password must be at least 6 characters"),
});

type signInDataSchema = z.infer<typeof signInDataSchema>;

export const SignIN = () => {
  async function handleLogin(data: signInDataSchema) {
    console.log(data);
  }

  const {
    register: signInRegister,
    handleSubmit: handleSignInSubmit,
    formState: { errors: signInErrors },
  } = useForm<signInDataSchema>({
    resolver: zodResolver(signInDataSchema),
  });

  return (
    <div className={styles.signIn}>
      <form className={styles.form} onSubmit={handleSignInSubmit(handleLogin)}>
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
        <p className={styles.p} id={styles.useAccount}>
          or use your account
        </p>

        <input
          className={styles.inputPlace}
          type="email"
          placeholder="Email"
          {...signInRegister("email")}
        />
        {signInErrors && <p className={styles.errors}>{signInErrors.email?.message}</p>}
        <input
          className={styles.inputPlace}
          type="password"
          placeholder="Password"
          {...signInRegister("password")}
        />
        {signInErrors && <p className={styles.errors}>{signInErrors.password?.message}</p>}
        <a href="#" className={styles.icon}>
          Forget your Password?
        </a>
        <button id={styles.signUpButton} className={styles.buttonPut}>
          Sign In
        </button>
      </form>
    </div>
  );
};

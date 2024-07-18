import { z } from "zod";
import styles from "../../styles/page.module.scss";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

type SignUpDataSchema = z.infer<typeof signUpDataSchema>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpDataSchema>({
    resolver: zodResolver(signUpDataSchema),
  });

  function handleSignUp(data: SignUpDataSchema) {
    console.log("ooi");
    console.log(data);
  }

  console.log("Errors:", errors); // Adicionando este console.log para ver se os erros estão sendo capturados

  return (
    <div className={styles.signUp}>
      <form className={styles.form} onSubmit={handleSubmit(handleSignUp)}>
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
  );
};

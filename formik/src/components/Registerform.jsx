import { useFormik } from "formik";
import RegisterFormSchema from "../schemas/RegisterFormSchema";

function Registerform() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      passwordConfirmation: "",
      terms: false,
    },
    validationSchema: RegisterFormSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email ? <div>{errors.email}</div> : null}
      </div>
      <div>
        <label>Age</label>
        <input
          type="number"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        {errors.age ? <div>{errors.age}</div> : null}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password ? <div>{errors.password}</div> : null}
      </div>
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={handleChange}
        />
        {errors.passwordConfirmation ? (
          <div>{errors.passwordConfirmation}</div>
        ) : null}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={handleChange}
          />
          Accept Terms
        </label>
        {errors.terms ? <div>{errors.terms}</div> : null}
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Registerform;

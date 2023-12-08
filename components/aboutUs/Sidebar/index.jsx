import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./style.module.scss";

function Sidebar({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function SubmitButton() {
    if (email && password) {
      return (
        <button className="btn btn-danger" type="button">
          Submit
        </button>
      );
    } else {
      return (
        <button className="btn btn-danger" type="button" disabled>
          Submit
        </button>
      );
    }
  }

  return (
    <>
      <div className={styles.sidebarMain}>
        <div class={styles.sideNav}>
          <form className={styles.form} action="mt-4">
            <div class="form-group mb-3">
              <label htmlFor="" className="mb-1">
                Email Address
              </label>
              <input
                type="email"
                name=""
                id=""
                className="form-control"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div class="form-group">
              <label htmlFor="" className="mb-1">
                Password
              </label>
              <div className={styles.eyeInput}>
                <input
                  type={values.showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  name=""
                  id=""
                  className="form-control"
                  required
                />
                <span
                  className={styles.eyePass}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>

            <div className="form-group d-flex justify-content-end mt-4">
              <SubmitButton />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { Sidebar };

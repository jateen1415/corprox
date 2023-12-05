import styles from "./style.module.scss";

function Sidebar({}) {
  return (
    <>
      <div className={styles.sidebarMain}>
        <div class={styles.sideNav}>
          <form className="p-4">
            <div class="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                class="form-control"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                class="form-control"
                placeholder="Password"
              />
            </div>
            <div class="form-group mt-3">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label mx-2">Check me out</label>
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" class="btn btn-danger mt-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export { Sidebar };

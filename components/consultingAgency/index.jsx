import styles from "./style.module.scss";

function ConsultingAgency() {
  return (
    <div className={styles.agencyMain}>
      <div className="container">
        <div className="row justify-content-around align-items-center">
          <div className="col-md-7">
            <div className={styles.subscribeContent}>
              <h3>Consulting Agency for Your Business</h3>
              <p className="mb-lg-0 mb-md-0">
                Rapaciously engage fully tested e-commerce with progressive
                architectures.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div className={styles.actionButton}>
              <button className="btn btn-primary">Contact With Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ConsultingAgency };

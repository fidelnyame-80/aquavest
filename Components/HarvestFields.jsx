import styles from "./harvestFields.module.css";

const harvests = [
  {
    crop: "Tomatoes",
    field: "Greenhouse",
    cycle: "12–16 weeks",
    note: "Fast cycle",
    theme: "tomato",
  },
  {
    crop: "Maize",
    field: "Open field",
    cycle: "16–20 weeks",
    note: "Staple crop",
    theme: "maize",
  },
  {
    crop: "Peppers",
    field: "Irrigated field",
    cycle: "12–14 weeks",
    note: "High demand",
    theme: "pepper",
  },
  {
    crop: "Plantain",
    field: "Orchard",
    cycle: "9–12 months",
    note: "Long season",
    theme: "plantain",
  },
];

export default function HarvestFields() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <div>
          <p className={styles.eyebrow}>Harvest catalogue</p>
          <h2>Different fields. Different wins.</h2>
        </div>
        <p className={styles.intro}>
          Choose a crop that fits your timeline. Every field is verified and
          every season is visible.
        </p>
      </header>

      <div className={styles.grid}>
        {harvests.map((harvest, index) => (
          <article
            key={harvest.crop}
            className={`${styles.card} ${styles[harvest.theme]}`}
          >
            <div className={styles.visual} aria-hidden="true">
              <span className={styles.fieldLabel}>{harvest.field}</span>
              <div className={styles.plot}>
                {Array.from({ length: 18 }, (_, dotIndex) => (
                  <i key={dotIndex} />
                ))}
              </div>
              <span className={styles.cardIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            <div className={styles.cardBody}>
              <div>
                <p className={styles.note}>{harvest.note}</p>
                <h3>{harvest.crop}</h3>
              </div>
              <dl className={styles.meta}>
                <div>
                  <dt>Field</dt>
                  <dd>{harvest.field}</dd>
                </div>
                <div>
                  <dt>Cycle</dt>
                  <dd>{harvest.cycle}</dd>
                </div>
              </dl>
              <button type="button" className={styles.action}>
                View harvest <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

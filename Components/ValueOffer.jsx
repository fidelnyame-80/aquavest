"use client";

import styles from "./styles.module.css";

export default function ValueOfferSection({ sectionRef, stageRef }) {
  return (
    <section ref={sectionRef} className={styles.valueSection}>
      <div className={styles.intro}>
        <span className={styles.eyebrow}>A new kind of ownership</span>
        <h2>
          Produce is the <span>PRODUCT</span>
        </h2>
      </div>

      <div ref={stageRef} className={styles.offerStage}>
        <article className={`${styles.copyPanel} ${styles.copyPanelLeft}`}>
          <p className={styles.panelNumber}>01</p>
          <h3>You don&apos;t need to own the farm.</h3>
          <p className={styles.panelBody}>
            Start with the harvest—not the hectares. Invest directly in the
            produce farmers are already growing.
          </p>
        </article>

        <div className={styles.tomatoWrap} aria-hidden="true">
          <div className={styles.backShadow} />
        </div>

        <article className={`${styles.copyPanel} ${styles.copyPanelRight}`}>
          <p className={styles.panelNumber}>02</p>
          <h3>You can own what it produces.</h3>
          <p className={styles.panelBody}>
            Your investment helps a real crop reach its potential—and lets you
            participate in the value it creates.
          </p>
        </article>
      </div>

      <p className={styles.closingLine}>
        Agriculture, made tangible. <span>One harvest at a time.</span>
      </p>
    </section>
  );
}

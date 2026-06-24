"use client";

import styles from "./ownershipSteps.module.css";

const steps = [
  {
    title: "Pick a harvest",
    detail: "Choose a verified crop with a clear season and target.",
  },
  {
    title: "Back the grower",
    detail: "Put capital behind the farmer, inputs and fieldwork.",
  },
  {
    title: "Track the season",
    detail: "Follow real milestones from planting through harvest.",
  },
  {
    title: "Receive the produce",
    detail: "The harvest is delivered to you—the virtual farmer.",
  },
];

export default function OwnershipSteps({ sectionRef }) {
  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.tomatoField} aria-hidden="true" />

      <div className={styles.content}>
        <p className={styles.eyebrow}>Own the outcome</p>
        <h2>Your farm, minus the land.</h2>
        <p className={styles.subhead}>Four steps. Zero acres required.</p>

        <ol className={styles.steps}>
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{step.title}</h3>
              <p>{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

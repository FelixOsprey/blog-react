import { useState } from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Navn er påkrævet.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email er påkrævet.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ugyldig email adresse.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Besked er påkrævet.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Beskeden skal være mindst 10 tegn.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);

    console.log("FORM SUBMITTED:", formData);

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <article className={styles.container}>
      <h1 className={styles.title}>Kontakt mig</h1>

      <p className={styles.description}>
        Vil du kontakte mig? Eller har du blot et spørgsmål? Tøv ikke med at
        skrive herunder. Jeg bestræber på at svare inden for 24 timer.
      </p>

      {submitted && (
        <p className={styles.success}>
          Tak for din besked! Jeg vender tilbage ❤
        </p>
      )}

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* NAME */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            id="name"
            placeholder="Indtast dit navn"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className={styles.error}>{errors.name}</p>}
        </div>

        {/* EMAIL */}
        <div className={styles.inputGroup}>
          <input
            type="email"
            id="email"
            placeholder="Indtast din email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>

        {/* MESSAGE */}
        <div className={styles.inputGroup}>
          <textarea
            id="message"
            placeholder="Skriv din besked her"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>

        <button type="submit" className={styles.button}>
          Send besked
        </button>
      </form>
    </article>
  );
};

export default Contact;

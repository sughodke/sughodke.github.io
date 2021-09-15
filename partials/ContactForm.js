import styles from "../styles/ContactForm.module.css";

export default function ContactForm() {
    return <section className={styles.contact}>
        <p>
            Feel free to contact me. I can be reached by sending a message to <a
            href="#">sid.ghodke@gmail.com</a> or by using the form below.
        </p>
        <form className={styles.contactForm} action="MAILTO:sid.ghodke@gmail.com" method="get" encType="text/plain">
            <input className={styles.inputBlockLevel} type="text" name="subject" placeholder="Name" required/>
            {/*
            <input class="input-block-level" type="email" name="email" placeholder="Email" required />
            */}
            <textarea className={styles.inputBlockLevel} name="body" placeholder="Message" rows="5" required/>
            <button type="submit" className={styles.sendButton}>SEND</button>
        </form>

    </section>
}

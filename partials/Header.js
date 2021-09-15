import styles from "../styles/Header.module.css";
import Image from "next/image";

export default function Header() {
    return <>
    <header className={styles.header}>
        <h1 className={styles.title}>Sid Ghodke</h1>
        {/* <span className={styles.logo}></span> */}
        <Image src="/avatar.jpeg" alt="Sid Ghodke avatar" width={224} height={224}/>
    </header>

    <section className={styles.about}>
        <p>
            I'm Sid, I live in Northern Califonia. These days I'm involved mostly in software - but I still
            find time for surfing, reading, writing, and beer. A lot of my recent work involves
            visualization and machine learning. I blog at <a href="//medium.com/@sid.ghodke">on Medium</a>.
            <a href="http://sughodke.github.io/Siddharth%20Ghodke%20(Eng%20Leader).pdf">My Resume</a>.
        </p>
    </section>
    </>
}

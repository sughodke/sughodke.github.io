import styles from "../styles/Header.module.css";
import Link from 'next/link';

export default function Header() {
    return <>
    <header className={styles.header}>
        <h1 className={styles.title}>Sid Ghodke</h1>
        {/* <Image src="/avatar.jpeg" alt="Sid Ghodke avatar" width={224} height={224}/> */}
        <img src="/avatar.jpeg" alt="Sid Ghodke avatar"/>
    </header>

    <section className={styles.about}>
        <p>
            I&apos;m Sid, I live in Northern California. These days I&apos;m involved mostly in software - but I still
            find time for surfing, reading, and writing. A lot of my recent work involves
            digital health and team building. I blog at <a href="//medium.com/@sid.ghodke">on Medium</a>.{' '}
            <Link href="/Siddharth%20Ghodke%20(Digital%20Health%20Leader).pdf">My Resume</Link>.
        </p>
    </section>
    </>
}

import styles from "../styles/Header.module.css";
import Link from 'next/link';

export default function Header() {
    return <>
    <header className={styles.header}>
        <h1 className={styles.title}>Sid Ghodke</h1>
        {/* <Image src="/avatar.jpeg" alt="Sid Ghodke avatar" width={224} height={224}/> */}
        <img src="/avatar.jpeg" alt="Sid Ghodke avatar"/>
    </header>

    <section className={styles.about}><p>
        I&apos;m Sid, I live in Northern California.
        I am an entrepreneur engineer working in the intersection of Healthcare, Technology and Capital.
        When I can I make time for surfing, reading, and writing.
        I blog <a href="//medium.com/@sid-ghodke">on Medium</a>.{' '}
        And this is <Link href="/Siddharth%20Ghodke%20(Digital%20Health%20Leader).pdf">my Resume</Link>.
    </p></section>
    </>
}

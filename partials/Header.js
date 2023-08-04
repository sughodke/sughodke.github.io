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
        I am an entrepreneur and engineer working in the intersection of Healthcare and Technology.
        Here&apos;s what I bring to the table:{" "}
        <ul>
            <li>🔑 Unique Blend of Skills and Experience</li>
            <li>🚀 Proven Track Record of Innovation</li>
            <li>🧩 Holistic Approach to Team Building</li>
            <li>🌐 Deep Industry Knowledge</li>
            <li>💡 Growth Mindset</li>
        </ul>
        You can find my resume <Link href="/Siddharth%20Ghodke%20(Digital%20Health%20Leader).pdf">here</Link>.
    </p></section>
    </>
}

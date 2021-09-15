import styles from '../styles/Home.module.css'

export default function Project({ children, className }) {
    return (
        <section className={styles.article}>
            { children }
        </section>
    )
}

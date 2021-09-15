import styles from "../styles/SocialLinks.module.css";

export default function SocialLinks() {
    return <section className={styles.social}>
        <div>
            <a href="//stackoverflow.com/users/721564/sid-ghodke"><i className="fab fa-stack-overflow"/></a>
            <a href="//facebook.com/sid.ghodke"><i className="fab fa-facebook"/></a>
            <a href="//twitter.com/MultigrainSid"><i className="fab fa-twitter"/></a>
            <a href="//plus.google.com/+SidGhodke/posts"><i className="fab fa-google-plus-g"/></a>
            <a href="//linkedin.com/in/sidghodke"><i className="fab fa-linkedin"/></a>
            <a href="//github.com/sughodke"><i className="fab fa-github-alt"/></a>
            <a href="//bitbucket.com/sid_ghodke"><i className="fab fa-bitbucket"/></a>
            <a href="//www.angel.co/sid-ghodke"><i className="fab fa-angellist"/></a>
            <a href="//www.medium.com/@sid.ghodke"><i className="fab fa-medium"/></a>
            <a href="//www.medium.com/@sid.ghodke"><i className="fab fa-kaggle"/></a>
        </div>
    </section>
}

import Head from 'next/head'
import Image from 'next/image'
import SocialLinks from '../partials/SocialLinks'
import Project from '../components/Project'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Sid Ghodke</title>
                <meta charset="UTF-8"/>
                <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"/>
                <meta name="description" content="A healthy dose of what I'm working on currently"/>
                <meta name="author" content="Sid Ghodke"/>
                <link rel="icon" href="/favicon.png"/>

                {/* TODO figure out font cross loading */}
                <link href="//fonts.googleapis.com/css?family=Raleway:400,100,300,500,800" rel="stylesheet"
                      type="text/css"/>

                {/* TODO figure out font awesome */}
                <link href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css" rel="stylesheet"/>

                {/* TODO import google analytics UA-62915331-1 */}
            </Head>


            <main>

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

                <SocialLinks/>

                <Project className={styles.description}>
                    <p><a>RentMetrics</a> is a companion tool to help Turo, Uber and Lyft drivers understand cost and
                        earnings per-mile. The models are trained on custom datasets and are accurate to major Metros. I
                        am currently working on adding mapping and a Material Design UI.</p>
                </Project>

            </main>

            <footer className={styles.footer}></footer>
        </div>
    )
}

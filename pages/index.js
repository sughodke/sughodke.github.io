import Head from 'next/head'
import Image from 'next/image'
import Header from "../partials/Header";
import SocialLinks from '../partials/SocialLinks'
import ContactForm from "../partials/ContactForm";
import Project from '../components/Project'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <div>
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

                <Header />

                <SocialLinks/>

                <Project className={styles.description}>
                    <p><a>RentMetrics</a> is a companion tool to help Turo, Uber and Lyft drivers understand cost and
                        earnings per-mile. The models are trained on custom datasets and are accurate to major Metros. I
                        am currently working on adding mapping and a Material Design UI.</p>
                </Project>

            </main>

            <ContactForm />
        </div>
    )
}

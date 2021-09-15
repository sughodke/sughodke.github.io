import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sid Ghodke</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width" />
        <meta name="description" content="A healthy dose of what I'm working on currently" />
        <meta name="author" content="Sid Ghodke" />
        {/* would need to import this css */}
        <link href="//fonts.googleapis.com/css?family=Raleway:400,100,300,500,800" rel="stylesheet" type="text/css" />
        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.0/css/all.min.css" />
        {/* would need to import this css */}
        <link rel="icon" href="/favicon.png" />
      </Head>


      <main className={styles.main}>

      <header className="header">
        <h1 className={styles.title}>Sid Ghodke</h1>
        <img src="avatar.jpeg"/>
      </header>

      <section className="about">
        <p>
        I'm Sid, I live in Northern Califonia. These days I'm involved mostly in software - but I still find time for surfing, reading, writing, and beer. A lot of my recent work involves visualization and machine learning. I blog at <a href="//medium.com/@sid.ghodke">on Medium</a>.
        <a href="http://sughodke.github.io/Siddharth%20Ghodke%20(Eng%20Leader).pdf">My Resume</a>.
        </p>
      </section>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

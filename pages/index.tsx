import styles from '@styles/Index.module.scss'
import Head from 'next/head'


export default function Index() {
  return (
    <>
      <Head>
        <title>NextJS Template</title>
        <meta name="description" content="NextJS template" />
      </Head>

      <main className={styles.main}>
        Hello
      </main>
    </>
  )
}

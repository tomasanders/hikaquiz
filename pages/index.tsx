import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <div className="app-wrap">
      <Head>
        <title>HiKaQuiz</title>
        <meta name="description" content="A Simple Hiragana and Katakana Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <button>Click</button>
    </div>
  )
}

export default Home

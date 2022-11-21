import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-slate-700">
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

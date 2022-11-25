import type { NextPage } from 'next'
import Head from 'next/head'
import { QuizCard } from './components/QuizCard'

const Home: NextPage = () => {

  return (
    <div className="app-wrap">
      <Head>
        <title>HiKaQuiz</title>
        <meta name="description" content="A Simple Hiragana and Katakana Quiz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <QuizCard />
    </div>
  )
}

export default Home

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import { Header } from '../components/Header'
// import { Sidebar } from '../components/Sidebar'
// import { Footer } from '../components/Footer'
// import { Modal } from '../components/Modal'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Twitter Clone App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Header /> */}
        {/* <Sidebar /> */}
        {/* <Footer /> */}

        {/* <Modal /> */}
      </main>

      <footer></footer>
    </div>
  )
}

export default Home

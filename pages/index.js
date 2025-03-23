import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const vid = document.getElementById('heroVideo')
    if (vid) {
      vid.onended = () => vid.pause()
    }
  }, [])

  return (
    <>
      <Head>
        <title>April Wang – Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="hero-section">
        <video id="heroVideo" autoPlay muted playsInline>
          <source src="https://cdn.pixabay.com/video/2023/05/10/164671-825599119_large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay">
          <h1>April Wang</h1>
          <p>AI + Industrial Design</p>
        </div>
      </header>

      <main className="main-content">
        <section>
          <h2>Featured Work</h2>
          <div className="grid">
            <img src="/assets/work1.jpg" alt="Project 1" />
            <img src="/assets/work2.jpg" alt="Project 2" />
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 April Wang</p>
      </footer>
    </>
  )
}
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return(
    <div>
      <Head>
        <title>Events App</title>
      </Head>
        
      <main>
        <header>
          <nav>
            <img/>
            <a href="/">Home</a>
            <a href="/events/event">Events</a>
            <a href="/about">About Us</a>
          </nav>
        </header>
        <div>
          <h2>Events in London</h2>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>
        
        

      </main>
      <footer>

      </footer>
    </div>

  )
    
  
}

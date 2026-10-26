
export default function Home() {
  return (
    <main className="container">
      <header className="navbar">
        <a href="/" className="logo">
          SimpleSite
        </a>

        <nav>
          <a href="#home">Home</a>
          <a href="#articles">Articles</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <h1>Simple Ideas for Everyday Life</h1>
        <p>
          Discover helpful tips, useful guides, and practical
          ideas for your everyday life.
        </p>
        <a href="#articles" className="button">
          Explore Articles
        </a>
      </section>

      <section className="advertisement">
        <p>ADVERTISEMENT</p>
        <div className="ad-box">
          Your advertisement will appear here.
        </div>
      </section>

      <section id="articles" className="articles">
        <h2>Latest Articles</h2>

        <div className="article-grid">
          <article className="card">
            <h3>Technology Tips</h3>
            <p>Learn useful technology tips for everyday life.</p>
          </article>

          <article className="card">
            <h3>Productivity</h3>
            <p>Discover ways to manage your time effectively.</p>
          </article>

          <article className="card">
            <h3>Everyday Guides</h3>
            <p>Explore practical guides and helpful ideas.</p>
          </article>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Us</h2>
        <p>
          We share useful information and simple guides
          to make everyday life easier.
        </p>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} SimpleSite</p>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact</a>
      </footer>
    </main>
  );
}

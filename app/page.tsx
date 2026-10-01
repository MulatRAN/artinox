import Image from "next/image";
import WorkShowcase from "./work-showcase";

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#accueil" aria-label="Artinox Design, accueil">
          <Image
            src="/logo.jpg"
            alt="Artinox Design"
            width={112}
            height={112}
            priority
            className="brand-logo"
          />
          <span className="brand-location">Andoharanofotsy · Madagascar</span>
        </a>
        <nav className="main-nav" aria-label="Navigation principale">
          <a href="#savoir-faire">Savoir-faire</a>
          <a href="#realisations">Réalisations</a>
          <a href="#apropos">À propos</a>
        </nav>
        <a className="header-contact" href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Atelier d’inox · Madagascar</p>
          <h1>
            L’inox prend forme.
            <br />
            <span>Vos idées aussi.</span>
          </h1>
          <p className="hero-description">
            Artinox conçoit des ouvrages en inox sur mesure, des pare-chocs de voiture
            aux rampes d’escalier et balcons. Plus de 15 ans de savoir-faire, partout
            à Madagascar.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Parlons de votre projet <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#realisations">
              Découvrir nos réalisations <span aria-hidden="true">↓</span>
            </a>
          </div>
          <p className="experience-line">
            <strong>15+</strong> ans d’expérience <span className="line-divider" />
            Intervention dans tout Madagascar
          </p>
        </div>
        <div className="hero-brand" aria-label="Artinox Design">
          <Image
            src="/logo.jpg"
            alt="Logo Artinox Design"
            width={600}
            height={600}
            priority
            className="hero-logo"
          />
          <span className="hero-brand-caption">Le travail de l’inox, avec précision.</span>
        </div>
        <span className="hero-index" aria-hidden="true">01 / 04</span>
      </section>

      <WorkShowcase />

      <section className="about section-wrap" id="apropos">
        <div className="about-stamp">
          <span>ARTINOX</span>
          <strong>15+</strong>
          <span>ANNÉES D’EXPÉRIENCE</span>
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> À propos d’Artinox</p>
          <h2>De l’expérience,<br /><span>et le goût du travail bien fait.</span></h2>
          <p>
            Basée à Andoharanofotsy, l’équipe Artinox met plus de 15 ans d’expérience
            au service de vos projets en inox. Nous intervenons partout à Madagascar.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light"><span /> Contact</p>
            <h2>Parlons de<br /><span>votre projet.</span></h2>
            <p>Une question ou une idée d’ouvrage en inox ? Contactez directement Artinox.</p>
          </div>
          <div className="contact-details">
            <a className="contact-whatsapp" href="https://wa.me/261328810067" target="_blank" rel="noreferrer">
              <span>WhatsApp</span><strong>032 88 100 67</strong><span aria-hidden="true">↗</span>
            </a>
            <div className="contact-phones">
              <span className="contact-label">Téléphones</span>
              <div className="contact-phone-links">
                <a href="tel:+261386464213">038 64 642 13</a>
                <a href="tel:+261338410516">033 84 105 16</a>
              </div>
            </div>
            <a href="mailto:artinox72@gmail.com"><span>Email</span><strong>artinox72@gmail.com</strong></a>
            <a href="https://www.facebook.com/profile.php?id=100077385742329" target="_blank" rel="noreferrer">
              <span>Facebook</span><strong>Artinox Design</strong><span aria-hidden="true">↗</span>
            </a>
            <p className="contact-location">Andoharanofotsy · Intervention partout à Madagascar</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#accueil">ARTINOX <span>DESIGN</span></a>
        <p>Ouvrages en inox · Andoharanofotsy, Madagascar</p>
        <a href="#accueil">Retour en haut ↑</a>
      </footer>
    </main>
  );
}

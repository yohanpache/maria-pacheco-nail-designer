import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Instagram, MapPin, Menu, MessageCircle, Music2, X } from "lucide-react";

/**
 * Estilo da página: minimalismo rosé sofisticado, fotografia como protagonista,
 * tipografia editorial e interações suaves que valorizam o portfólio de unhas.
 */

/* ─────────────────────────────────────────────────────────────── */
/*  Navbar                                                          */
/* ─────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 40);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.98_0.008_60)]/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={siteContent.logoImage}
            alt="MP"
            className="w-10 h-10 rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <span
            className="font-display text-xl tracking-wide text-foreground"
            style={{ fontWeight: 500 }}
          >
            Maria Pacheco
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-foreground/70 hover:text-primary transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${siteContent.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Agendar
            </Button>
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[oklch(0.98_0.008_60)]/95 backdrop-blur-xl border-t border-border">
          <div className="container flex flex-col py-4 gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-foreground/80 py-2 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button size="sm" className="w-full rounded-full bg-primary text-primary-foreground">
                Agendar Horário
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Hero                                                            */
/* ─────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteContent.heroImage}
          alt="Nail design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.18_0.02_50)]/70 via-[oklch(0.18_0.02_50)]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-24">
        <div className="max-w-xl">
          <p
            className="font-display italic text-lg md:text-xl text-[oklch(0.90_0.03_40)] mb-4 reveal visible"
            style={{ opacity: 1 }}
          >
            {siteContent.city} · {siteContent.profession}
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-white mb-6">
            Maria Pacheco
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 max-w-md leading-relaxed font-light">
            {siteContent.tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity text-base"
              >
                Agendar Horário
              </Button>
            </a>
            <a href="#galeria">
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-white/40 text-white hover:bg-white/10 hover:text-white text-base"
              >
                Ver Trabalhos
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-[1px] h-12 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  About                                                           */
/* ─────────────────────────────────────────────────────────────── */
function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div ref={ref} className={`max-w-3xl ${visible ? "reveal visible" : "reveal"}`}>
          <p className="font-display italic text-primary text-lg mb-3">Sobre</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8 leading-tight">
            Unhas como expressão de personalidade
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            {siteContent.about}
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Cada cliente é única, e cada par de mãos conta uma história. Aqui você
            encontra técnica, cuidado e arte em cada detalhe — do clássico ao ousado.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Services                                                        */
/* ─────────────────────────────────────────────────────────────── */
function Services() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary/40">
      <WaveDivider color="var(--background)" position="top" className="-mb-[1px]" />
      <div className="container">
        <div ref={ref} className={`text-center mb-16 ${visible ? "reveal visible" : "reveal"}`}>
          <p className="font-display italic text-primary text-lg mb-3">Serviços</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            O que oferecemos
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
            visible ? "reveal-stagger visible" : "reveal-stagger"
          }`}
        >
          {siteContent.services.map((service, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-8 border border-border/50 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-primary/30 hover:-translate-y-1"
            >
              <h3 className="font-display text-2xl text-foreground mb-3">{service.name}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Presentation carousel                                             */
/* ─────────────────────────────────────────────────────────────── */
function Gallery() {
  const { ref, visible } = useScrollReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = siteContent.gallery.length;
  const activeSlide = siteContent.gallery[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div ref={ref} className={`text-center mb-12 ${visible ? "reveal visible" : "reveal"}`}>
          <p className="font-display italic text-primary text-lg mb-3">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Unhas em destaque
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Uma apresentação dos trabalhos criados com atenção a cada detalhe.
          </p>
        </div>

        <div className={`max-w-5xl mx-auto ${visible ? "reveal visible" : "reveal"}`}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.22_0.02_50)] shadow-[0_18px_65px_rgba(76,40,44,0.18)]">
            <div className="relative aspect-[4/5] sm:aspect-[16/10]">
              <img
                key={activeSlide.src + activeIndex}
                src={activeSlide.src}
                alt={activeSlide.title}
                className="w-full h-full object-cover animate-in fade-in duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.17_0.02_50)]/85 via-transparent to-transparent" />
              <div className="absolute left-6 right-6 bottom-6 sm:left-10 sm:right-10 sm:bottom-9 flex items-end justify-between gap-6">
                <div>
                  <p className="text-white/65 text-xs tracking-[0.18em] uppercase mb-2">
                    {activeSlide.category}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl text-white">{activeSlide.title}</h3>
                </div>
                <span className="text-sm text-white/75 whitespace-nowrap">
                  {String(activeIndex + 1).padStart(2, "0")} / {String(totalSlides).padStart(2, "0")}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={showPrevious}
              aria-label="Mostrar trabalho anterior"
              className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-foreground flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronLeft size={21} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Mostrar próximo trabalho"
              className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/90 text-foreground flex items-center justify-center transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              <ChevronRight size={21} />
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3 overflow-x-auto pb-1">
            {siteContent.gallery.map((item, index) => (
              <button
                type="button"
                key={`${item.src}-${index}`}
                aria-label={`Exibir ${item.title}`}
                aria-current={index === activeIndex}
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 w-12 sm:h-20 sm:w-16 shrink-0 overflow-hidden rounded-xl transition-all duration-300 ${
                  index === activeIndex
                    ? "ring-2 ring-primary ring-offset-2 ring-offset-background opacity-100"
                    : "opacity-55 hover:opacity-90"
                }`}
              >
                <img src={item.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Contact                                                         */
/* ─────────────────────────────────────────────────────────────── */
function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary/40">
      <div className="container">
        <div ref={ref} className={`max-w-5xl mx-auto ${visible ? "reveal visible" : "reveal"}`}>
          <div className="text-center mb-16">
            <p className="font-display italic text-primary text-lg mb-3">Contato</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Vamos agendar?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Entre em contato para reservar seu horário. Será um prazer cuidar das suas unhas.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
            {/* Contact info */}
            <div className="grid sm:grid-cols-2 gap-5">
              <a
                href={`https://wa.me/${siteContent.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageCircle size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">WhatsApp</p>
                  <p className="text-foreground font-medium">Falar no WhatsApp</p>
                </div>
              </a>

              <a
                href={siteContent.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Instagram size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Instagram</p>
                  <p className="text-foreground font-medium">{siteContent.contact.instagram}</p>
                </div>
              </a>

              <a
                href={siteContent.contact.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Music2 size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">TikTok</p>
                  <p className="text-foreground font-medium">{siteContent.contact.tiktok}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Endereço</p>
                  <p className="text-foreground font-medium">{siteContent.contact.address}</p>
                </div>
              </div>
            </div>

            <div className="bg-[oklch(0.22_0.02_50)] rounded-2xl p-8 md:p-10 flex flex-col justify-between min-h-[260px]">
              <div>
                <p className="font-display italic text-[oklch(0.83_0.06_30)] text-lg mb-3">Seu momento de cuidado</p>
                <h3 className="font-display text-3xl text-white leading-tight mb-4">Pronta para transformar suas unhas?</h3>
                <p className="text-white/65 leading-relaxed text-sm">
                  Para informações, disponibilidade e agendamentos, fale diretamente pelo WhatsApp.
                </p>
              </div>
              <a
                href={`https://wa.me/${siteContent.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block"
              >
                <Button className="w-full rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                  Agendar via WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Footer                                                           */
/* ─────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[oklch(0.18_0.02_50)] text-white/70 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <img
            src={siteContent.logoImage}
            alt="MP"
            className="w-12 h-12 rounded-full object-cover"
          />
          <p className="font-display text-2xl text-white">{siteContent.name}</p>
          <p className="text-sm tracking-wide">
            {siteContent.profession} · {siteContent.city}
          </p>
          <div className="flex gap-6 mt-2">
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <MessageCircle size={20} />
            </a>
            <a
              href={siteContent.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href={siteContent.contact.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="TikTok de Maria Pacheco Nail"
            >
              <Music2 size={20} />
            </a>
          </div>
          <p className="text-xs text-white/40 mt-4">
            © {new Date().getFullYear()} {siteContent.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Page                                                             */
/* ─────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

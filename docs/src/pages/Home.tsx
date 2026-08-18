import { useEffect, useState } from "react";
import { siteContent } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Instagram, MapPin, Menu, Music2, X } from "lucide-react";

/**
 * Estilo da página: minimalismo rosé sofisticado, fotografia como protagonista,
 * tipografia editorial e logo em traços, sem cartões ou molduras decorativas.
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
          ? "bg-background/90 backdrop-blur-xl shadow-[0_1px_20px_rgba(83,53,63,0.10)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container relative flex flex-col items-center py-3 md:py-4">
        {/* Assinatura de marca acima da navegação */}
        <a href="#inicio" className="flex items-center justify-center group mb-2 md:mb-3">
          <img
            src={siteContent.logoImage}
            alt="Maria Pacheco Nail Designer"
            className={`h-20 md:h-24 w-40 md:w-52 object-contain opacity-100 transition-transform duration-300 group-hover:scale-[1.03] ${
              scrolled
                ? "drop-shadow-[0_2px_5px_rgba(91,57,68,0.10)]"
                : "brightness-0 invert drop-shadow-[0_3px_12px_rgba(37,20,25,0.45)]"
            }`}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled
                  ? "text-foreground/70 hover:text-primary after:bg-primary"
                  : "text-white/85 hover:text-white after:bg-white"
              }`}
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
          className={`absolute right-4 top-1/2 -translate-y-1/2 md:hidden ${
            scrolled ? "text-foreground" : "text-white drop-shadow-sm"
          }`}
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
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.27_0.05_10)]/78 via-[oklch(0.27_0.05_10)]/36 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-40 md:pt-48">
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
                Criar meu design
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

      <img
        src={siteContent.logoImage}
        alt="Logo Maria Pacheco Nail Designer"
        className="hidden lg:block absolute z-10 right-[8%] bottom-14 w-60 h-auto brightness-0 invert opacity-90 drop-shadow-[0_8px_18px_rgba(37,20,25,0.35)]"
      />

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
    <section id="sobre" className="relative overflow-hidden py-24 md:py-36 bg-background">
      <div className="container relative">
        <div ref={ref} className={`grid md:grid-cols-12 gap-10 md:gap-16 ${visible ? "reveal visible" : "reveal"}`}>
          <div className="md:col-span-5 lg:col-span-4">
            <p className="font-display italic text-primary text-lg mb-4">Sobre</p>
            <div className="w-12 h-px bg-primary/60 mb-7" />
            <h2 className="font-display text-4xl md:text-5xl text-foreground leading-[1.05]">
              Unhas como expressão de personalidade
            </h2>
          </div>
          <div className="md:col-span-7 lg:col-span-6 lg:col-start-7 pt-1">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {siteContent.about}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Cada cliente é única, e cada par de mãos conta uma história. Aqui você
              encontra técnica, cuidado e arte em cada detalhe — do clássico ao ousado.
            </p>
          </div>
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
    <section id="servicos" className="relative overflow-hidden py-24 md:py-32 bg-secondary/40">
      <WaveDivider color="var(--background)" position="top" className="-mb-[1px]" />
      <div className="container relative">
        <div ref={ref} className={`max-w-2xl mb-14 md:mb-16 ${visible ? "reveal visible" : "reveal"}`}>
          <p className="font-display italic text-primary text-lg mb-4">Serviços</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
            Técnica para a sua assinatura pessoal
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
            Técnica, acabamento e estilo para deixar suas mãos ainda mais especiais.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 ${
            visible ? "reveal-stagger visible" : "reveal-stagger"
          }`}
        >
          {siteContent.services.map((service, i) => (
            <div
              key={i}
              className="group grid grid-cols-[2.75rem_1fr] gap-4 border-t border-primary/20 py-6 transition-colors duration-300 hover:border-primary/75"
            >
              <span className="font-display text-xl italic text-primary/65 pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-2xl text-foreground mb-2 transition-transform duration-300 group-hover:translate-x-1">
                  {service.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
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
    <section id="galeria" className="relative overflow-hidden py-24 md:py-36 bg-background">
      <div className="container">
        <div ref={ref} className={`grid md:grid-cols-12 items-end gap-6 mb-12 ${visible ? "reveal visible" : "reveal"}`}>
          <div className="md:col-span-7">
            <p className="font-display italic text-primary text-lg mb-3">Portfólio</p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground leading-[1.02]">
              Unhas em destaque
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-end gap-6">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Uma apresentação dos trabalhos criados com atenção a cada detalhe.
            </p>
          </div>
        </div>

        <div className={`max-w-6xl ml-auto ${visible ? "reveal visible" : "reveal"}`}>
          <div className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.22_0.02_50)] shadow-[0_22px_75px_rgba(76,40,44,0.2)]">
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

          <div className="mt-5 flex items-center justify-end gap-3 overflow-x-auto pb-1">
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
        <div ref={ref} className={`max-w-3xl mx-auto ${visible ? "reveal visible" : "reveal"}`}>
          <p className="font-display italic text-primary text-lg mb-6">Contato</p>

          <div className="grid sm:grid-cols-2 gap-5">
              <a
                href={`https://wa.me/${siteContent.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-6 h-6 text-primary">
                    <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.75.46 3.39 1.26 4.82L2 22l5.38-1.42a9.84 9.84 0 0 0 4.66 1.17c5.46 0 9.89-4.43 9.89-9.89S17.5 2 12.04 2Zm0 18.08c-1.49 0-2.89-.4-4.1-1.08l-.29-.17-3.19.84.85-3.11-.19-.31a8.13 8.13 0 0 1-1.24-4.36c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16-3.66 8.19-8.16 8.19Zm4.48-6.1c-.25-.13-1.45-.72-1.68-.8-.23-.08-.4-.13-.57.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.14.16-.25.24-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.43-.56-.43-.15-.01-.32-.01-.49-.01-.17 0-.44.06-.68.31-.23.25-.89.87-.89 2.13s.91 2.47 1.04 2.65c.13.17 1.8 2.75 4.36 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.45-.59 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.16-.48-.29Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">WhatsApp</p>
                  <p className="text-foreground font-medium">Agende seu horário</p>
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
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-primary">
                    <path d="M12.53.02c1.3-.02 2.6-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.99-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.93-3.54 3.2-5.88 3.27-1.44.08-2.88-.31-4.12-1.04-2.06-1.21-3.5-3.43-3.71-5.82-.02-.51-.03-1.02-.01-1.53.18-1.94 1.17-3.79 2.71-5 1.75-1.42 4.18-2.11 6.41-1.69.02 1.48-.04 2.96-.04 4.44-1.03-.33-2.22-.24-3.13.32-.66.39-1.16 1.02-1.41 1.73-.21.51-.15 1.07-.14 1.61.24 1.66 1.82 3.05 3.5 2.94 1.12-.01 2.19-.66 2.77-1.62.19-.34.4-.69.41-1.09.1-1.79.06-3.58.07-5.37.01-4.02-.01-8.03.02-12.05Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">TikTok</p>
                  <p className="text-foreground font-medium">{siteContent.contact.tiktok}</p>
                </div>
              </a>

              <a
                href={siteContent.contact.addressUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir endereço de Maria Pacheco Nail Designer no Google Maps"
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Endereço</p>
                  <p className="text-foreground font-medium">{siteContent.contact.address}</p>
                </div>
              </a>
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
    <footer className="bg-[oklch(0.22_0.045_10)] text-white/70 py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <img
            src={siteContent.logoImage}
            alt="Maria Pacheco Nail Designer"
            className="w-44 h-auto object-contain brightness-0 invert opacity-90"
          />
          <p className="text-sm tracking-[0.12em] uppercase text-white/70">{siteContent.city}</p>
          <div className="flex gap-6 mt-2">
            <a
              href={`https://wa.me/${siteContent.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="WhatsApp de Maria Pacheco Nail"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5">
                <path d="M12.04 2C6.58 2 2.15 6.43 2.15 11.89c0 1.75.46 3.39 1.26 4.82L2 22l5.38-1.42a9.84 9.84 0 0 0 4.66 1.17c5.46 0 9.89-4.43 9.89-9.89S17.5 2 12.04 2Zm0 18.08c-1.49 0-2.89-.4-4.1-1.08l-.29-.17-3.19.84.85-3.11-.19-.31a8.13 8.13 0 0 1-1.24-4.36c0-4.5 3.66-8.16 8.16-8.16s8.16 3.66 8.16 8.16-3.66 8.19-8.16 8.19Zm4.48-6.1c-.25-.13-1.45-.72-1.68-.8-.23-.08-.4-.13-.57.13-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.5.11-.11.25-.3.37-.45.12-.14.16-.25.24-.42.08-.17.04-.32-.02-.45-.06-.13-.56-1.36-.77-1.86-.2-.49-.41-.43-.56-.43-.15-.01-.32-.01-.49-.01-.17 0-.44.06-.68.31-.23.25-.89.87-.89 2.13s.91 2.47 1.04 2.65c.13.17 1.8 2.75 4.36 3.86.61.26 1.08.42 1.45.54.61.19 1.16.16 1.6.1.49-.07 1.45-.59 1.66-1.17.21-.58.21-1.07.15-1.17-.06-.1-.23-.16-.48-.29Z" />
              </svg>
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

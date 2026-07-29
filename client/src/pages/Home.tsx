import { useState, useMemo } from "react";
import { siteContent, type GalleryItem } from "@/data/siteContent";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import WaveDivider from "@/components/WaveDivider";
import { Button } from "@/components/ui/button";
import { Instagram, Phone, MapPin, Clock, MessageCircle, Menu, X, Music } from "lucide-react";

/* ─────────────────────────────────────────────────────────────── */
/*  Navbar                                                          */
/* ─────────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 40), { passive: true });
  }

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
              {service.price && (
                <p className="text-primary font-medium text-sm tracking-wide">{service.price}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Gallery                                                          */
/* ─────────────────────────────────────────────────────────────── */
function Gallery() {
  const { ref, visible } = useScrollReveal();
  const [filter, setFilter] = useState<string>("Todos");

  const categories = useMemo(() => {
    const cats = new Set(siteContent.gallery.map((g) => g.category));
    return ["Todos", ...Array.from(cats)];
  }, []);

  const filteredItems = useMemo(() => {
    if (filter === "Todos") return siteContent.gallery;
    return siteContent.gallery.filter((g) => g.category === filter);
  }, [filter]);

  return (
    <section id="galeria" className="py-24 md:py-32 bg-background">
      <div className="container">
        <div ref={ref} className={`text-center mb-12 ${visible ? "reveal visible" : "reveal"}`}>
          <p className="font-display italic text-primary text-lg mb-3">Portfólio</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Galeria de Trabalhos
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Uma seleção dos designs criados com dedicação. Toque em cada foto para ver os detalhes.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm tracking-wide transition-all duration-200 ${
                filter === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div
          className={`columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] ${
            visible ? "reveal-stagger visible" : "reveal-stagger"
          }`}
        >
          {filteredItems.map((item: GalleryItem, i) => (
            <div
              key={`${item.src}-${i}`}
              className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.18_0.02_50)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white/70 text-xs tracking-widest uppercase mb-1">
                  {item.category}
                </p>
                <h3 className="font-display text-xl text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Contact + Schedule                                              */
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
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
                  <p className="text-foreground font-medium">{siteContent.contact.phone}</p>
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

              <div className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Endereço</p>
                  <p className="text-foreground font-medium">{siteContent.contact.address}</p>
                </div>
              </div>

              <a
                href={`tel:${siteContent.contact.phone.replace(/\D/g, "")}`}
                className="flex items-center gap-4 p-5 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground tracking-widest uppercase">Telefone</p>
                  <p className="text-foreground font-medium">{siteContent.contact.phone}</p>
                </div>
              </a>
            </div>

            {/* Schedule */}
            <div className="bg-card rounded-2xl border border-border/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Clock size={20} className="text-primary" />
                <h3 className="font-display text-2xl text-foreground">Horários</h3>
              </div>
              <div className="space-y-3">
                {siteContent.schedule.map((s, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-2 border-b border-border/30 last:border-0"
                  >
                    <span className="text-foreground/80 text-sm">{s.day}</span>
                    <span
                      className={`text-sm ${
                        s.hours === "Fechado"
                          ? "text-muted-foreground"
                          : "text-foreground font-medium"
                      }`}
                    >
                      {s.hours}
                    </span>
                  </div>
                ))}
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
            >
              <Music size={20} />
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

/**
 * ═══════════════════════════════════════════════════════════════════
 *  CONTEÚDO DO SITE — EDITÁVEL
 * ═══════════════════════════════════════════════════════════════════
 *
 *  Este arquivo contém todas as informações exibidas na página.
 *  Para alterar textos, serviços, horários ou contato, basta editar
 *  os valores abaixo. Para trocar as fotos da galeria, substitua as
 *  URLs nas entradas `gallery` por novas imagens.
 *
 *  Dica: cada item da galeria tem `src` (URL da foto), `title` (título
 *  exibido no hover) e `category` (categoria/filtro).
 * ═══════════════════════════════════════════════════════════════════
 */

export interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

export interface ServiceItem {
  name: string;
  description: string;
  price?: string;
}

export const siteContent = {
  // ── Informações principais ──────────────────────────────────────
  name: "Maria Pacheco",
  profession: "Nail Designer",
  city: "Guarapuava",
  tagline: "Cada unha é uma tela em branco — sua personalidade é a arte.",
  about:
    "Com anos de experiência e paixão por nail art, Maria Pacheco transforma unhas em verdadeiras obras de arte. Especializada em técnicas modernas e produtos de alta qualidade, oferece um atendimento personalizado em um ambiente acolhedor no coração de Guarapuava.",

  // ── Contato ─────────────────────────────────────────────────────
  contact: {
    phone: "(42) 99999-9999",
    whatsapp: "5542999999999",
    instagram: "@maria_pacheco_nail",
    instagramUrl: "https://instagram.com/",
    address: "Guarapuava, PR",
  },

  // ── Horários de atendimento ────────────────────────────────────
  schedule: [
    { day: "Segunda", hours: "09h00 — 18h00" },
    { day: "Terça", hours: "09h00 — 18h00" },
    { day: "Quarta", hours: "09h00 — 18h00" },
    { day: "Quinta", hours: "09h00 — 18h00" },
    { day: "Sexta", hours: "09h00 — 19h00" },
    { day: "Sábado", hours: "08h00 — 16h00" },
    { day: "Domingo", hours: "Fechado" },
  ],

  // ── Serviços oferecidos ────────────────────────────────────────
  services: [
    {
      name: "Esmaltação em Gel",
      description:
        "Durabilidade e brilho incomparáveis. Mais de 3 semanas de perfeição sem deslizar.",
      price: "A partir de R$ 50",
    },
    {
      name: "Nail Art Personalizada",
      description:
        "Designs exclusivos criados sob medida — florais, geométricos, francesinha moderna e muito mais.",
      price: "A partir de R$ 80",
    },
    {
      name: "Alongamento de Unhas",
      description:
        "Estrutura perfeita em fibra de vidro, acrigel ou polygel. Comprimento e formato à sua escolha.",
      price: "A partir de R$ 120",
    },
    {
      name: "Manicure Russa",
      description:
        "Técnica premium de cutícula — limpeza profunda e acabamento impecável para um visual duradouro.",
      price: "A partir de R$ 45",
    },
    {
      name: "Spa das Mãos",
      description:
        "Hidratação intensa, esfoliação e massagem relaxante. Suas mãos merecem esse carinho.",
      price: "A partir de R$ 60",
    },
    {
      name: "Remoção de Esmalte",
      description:
        "Remoção segura e cuidadosa de esmalte em gel ou alongamento, preservando a saúde natural das unhas.",
      price: "A partir de R$ 25",
    },
  ] as ServiceItem[],

  // ── Galeria de trabalhos ───────────────────────────────────────
  // Para adicionar fotos: copie um item e troque a URL em `src`.
  // Para remover: apague o item. Para reordenar: mova os itens.
  gallery: [
    {
      src: "/manus-storage/portfolio-1_273c22bd.jpg",
      title: "Ombre Rosé",
      category: "Esmaltação",
    },
    {
      src: "/manus-storage/portfolio-2_71d55b03.jpg",
      title: "Floral Delicado",
      category: "Nail Art",
    },
    {
      src: "/manus-storage/portfolio-3_e27baf07.jpg",
      title: "Vinho Profundo",
      category: "Esmaltação",
    },
    {
      src: "/manus-storage/portfolio-1_273c22bd.jpg",
      title: "Nude Elegante",
      category: "Esmaltação",
    },
    {
      src: "/manus-storage/portfolio-2_71d55b03.jpg",
      title: "Minimalista",
      category: "Nail Art",
    },
    {
      src: "/manus-storage/portfolio-3_e27baf07.jpg",
      title: "Glossy Burgundy",
      category: "Esmaltação",
    },
  ] as GalleryItem[],

  // ── Imagem do hero (banner principal) ─────────────────────────
  heroImage: "/manus-storage/hero-nail-designer_b899145c.jpg",
  logoImage: "/manus-storage/logo-mp_2831026e.png",
};

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
}

export const siteContent = {
  // ── Informações principais ──────────────────────────────────────
  name: "Maria Pacheco",
  profession: "Nail Designer",
  city: "Guarapuava",
  tagline: "Cada unha é uma tela em branco — sua personalidade é a arte.",
  about:
    "Com paixão por nail art, Maria Pacheco transforma unhas em verdadeiras obras de arte. Especializada em técnicas modernas e produtos de alta qualidade, oferece um atendimento personalizado em um ambiente acolhedor no coração de Guarapuava.",

  // ── Contato ─────────────────────────────────────────────────────
  contact: {
    whatsapp: "5542998000654",
    instagram: "@maria_pacheco_nail",
    instagramUrl: "https://www.instagram.com/maria_pacheco_nail/",
    tiktok: "@maria_pacheco_nail",
    tiktokUrl: "https://www.tiktok.com/@maria_pacheco_nail",
    address: "Vila Bela, Guarapuava — Paraná",
    addressUrl: "https://maps.app.goo.gl/3Evn5JBogT2tSBwQ9",
  },

  // ── Serviços oferecidos ────────────────────────────────────────
  services: [
    {
      name: "Esmaltação em Gel",
      description:
        "Brilho intenso, acabamento elegante e cor impecável para valorizar suas unhas.",
    },
    {
      name: "Alongamento em Molde F1 com Gel",
      description:
        "Estrutura leve, resistente e personalizada no formato que combina com você.",
    },
    {
      name: "Alongamento em Molde F1 com Pó Acrílico",
      description:
        "Alongamento com acabamento preciso e alta durabilidade para unhas ainda mais bonitas.",
    },
    {
      name: "Manutenção do Alongamento",
      description:
        "Cuidado periódico para renovar a estrutura e manter suas unhas saudáveis e impecáveis.",
    },
    {
      name: "Blindagem",
      description:
        "Camada de proteção para fortalecer as unhas naturais sem perder a leveza e a elegância.",
    },
    {
      name: "Banho em Gel",
      description:
        "Reforço com gel para unhas naturais, proporcionando resistência e um acabamento sofisticado.",
    },
    {
      name: "Remoção",
      description:
        "Remoção cuidadosa de esmaltação, gel ou alongamento, preservando a saúde das unhas naturais.",
    },
    {
      name: "Nail Art Personalizada",
      description:
        "Designs criados para expressar seu estilo — do delicado ao marcante, sempre com atenção aos detalhes.",
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
  logoImage: "/manus-storage/maria-pacheco-logo-final_5be67cf5.png",
};

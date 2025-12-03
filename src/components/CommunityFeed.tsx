import { useState } from "react";
import {
  FileText,
  Video,
  Mic,
  Share2,
  Filter,
  Book,
  ExternalLink,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Tipos de conteúdo
type ContentType = "all" | "article" | "video" | "audio" | "book";

interface Contribution {
  id: string;
  type: "article" | "video" | "audio" | "book";
  title: string;
  author: string;
  authorRole: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  link?: string;
}

// Mock data - contribuições da comunidade
const contributions: Contribution[] = [
  {
    id: "2",
    type: "book",
    title: "E-book: Ética do Jornalismo - Desafios da Contemporaneidade",
    author: "Luiz Felipe Bolis, Zulmira Nóbrega e orgs.",
    authorRole: "Mestrandos e Pesquisadores PPJ/UFPB | 2025",
    date: "Lançamento 2025",
    excerpt:
      "Obra coletiva que debate os conflitos éticos em tempos de Inteligência Artificial e desinformação, reunindo entrevistas com grandes pesquisadores da área.",
    imageUrl: "/img/etica-jornalismo.png",
    category: "Publicação Acadêmica",
    link: "/arquivos/ebook_etica.pdf",
  },
  {
    id: "3",
    type: "video",
    title: "Aula Inaugural: Luiz Custódio (In Memoriam)",
    author: "PPJ UFPB",
    authorRole: "Homenagem Acadêmica",
    date: "Março 2025",
    excerpt:
      "Aula inaugural especial dedicada à memória e ao legado científico e afetivo do Professor Custódio, reunindo depoimentos de pesquisadores, colegas e ex-alunos.",
    imageUrl: "https://img.youtube.com/vi/2CIMPeWQT80/maxresdefault.jpg",
    category: "Evento Acadêmico",
    link: "https://www.youtube.com/live/2CIMPeWQT80",
  },
  {
    id: "4",
    type: "book",
    title: "Livro: The Folkcommunication Theory",
    author: "Rede Folkcom (Org. Marcelo Pires et al.)",
    authorRole: "Publicação Internacional | 2025",
    date: "Lançamento 2025",
    excerpt:
      "Obra histórica em inglês que consolida a teoria brasileira no exterior. O livro traz uma dedicatória especial à memória do Prof. Luiz Custódio, reconhecendo seu papel fundamental na área.",
    imageUrl: "/img/capa-folkcom.png",
    category: "Reconhecimento Internacional",
    link: "https://www.redefolkcom.com.br/_files/ugd/d9bc9e_e7f888a2689544ccb525841fec5f3818.pdf",
  },
  {
    id: "5",
    type: "video",
    title: "Homenagem Comunicurtas: O Legado do Educador",
    author: "Festival Comunicurtas UEPB",
    authorRole: "Tributo Institucional",
    date: "Novembro 2025",
    excerpt:
      "O Festival Audiovisual de Campina Grande realizou uma sessão especial no Cine São José com a exibição de um vídeo celebrando a trajetória de Luiz Custódio na formação de comunicadores.",
    imageUrl:
      "https://uepb.edu.br/wp-content/uploads/2025/11/Professor-Luiz-Custodio-Homenageado-Comunicurtas-UEPB-2025.jpeg",
    category: "Homenagem Audiovisual",
    link: "https://uepb.edu.br/comunicurtas-uepb-homenageia-professor-luiz-custodio-com-exibicao-de-video-sobre-legado-do-educador/",
  },
  {
    id: "6", 
    type: "article", 
    title: "Aspectos do Folkmarketing na Festa Achiropita",
    author: "Iêda Cezar, Camila Escudero et al.",
    authorRole: "Revista Internacional de Folkcomunicação",
    date: "2022",
    excerpt: "Artigo científico que utiliza referenciais teóricos de Luiz Custódio para analisar as estratégias de comunicação e sobrevivência das festas populares durante a pandemia de Covid-19.",
    imageUrl: "/img/Aspectos_do_folkmarket.png", 
    category: "Pesquisa Aplicada",
    link: "/arquivos/Aspectos_do_folkmarketing.pdf" 
  },
  {
    id: "7",
    type: "book",
    title: "Tese: A Festa do Maior São João do Mundo",
    author: "Zulmira Nóbrega",
    authorRole: "Doutora em Cultura e Sociedade (UFBA)",
    date: "2010",
    excerpt: "Tese de doutorado que analisa as dimensões culturais do São João de Campina Grande. O Prof. Luiz Custódio compôs a banca examinadora e é citado por sua coordenação no Seminário Folkcom.",
    imageUrl: "/img/A_festa_do_maior_sao_joao.png", 
    category: "Tese de Doutorado",
    link: "/arquivos/A_festa_do_Maior_São_João_do_Mundo.pdf"
  },
];

export function CommunityFeed() {
  const [filter, setFilter] = useState<ContentType>("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredContributions =
    filter === "all"
      ? contributions
      : contributions.filter((c) => c.type === filter);

  // Mostrar apenas as obras visíveis
  const displayedContributions = filteredContributions.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleMinimize = () => {
    setVisibleCount(3);
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video;
      case "audio":
        return Mic;
      case "book":
        return Book;
      default:
        return FileText;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "Vídeo";
      case "audio":
        return "Áudio";
      case "book":
        return "Livro";
      default:
        return "Artigo";
    }
  };

  const handleContributionClick = (contribution: Contribution) => {
    if (contribution.link) {
      window.open(contribution.link, "_blank");
    }
  };

  const handleShare = (contribution: Contribution, event: React.MouseEvent) => {
    event.stopPropagation(); // Impede que o clique abra o link da obra

    const shareData = {
      title: contribution.title,
      text: `${contribution.title} - ${contribution.excerpt}`,
      url: contribution.link || window.location.href,
    };

    if (navigator.share) {
      // API nativa de compartilhamento (mobile)
      navigator.share(shareData);
    } else {
      // Fallback: copiar para clipboard
      const shareText = `${contribution.title}\n\n${contribution.excerpt}\n\n${
        contribution.link || window.location.href
      }`;
      navigator.clipboard.writeText(shareText).then(() => {
        alert("Link copiado para a área de transferência!");
      });
    }
  };

  return (
    <section className="py-20 px-6 bg-sepia-cream">
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-12">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-16 bg-sepia-warm" />
                <div className="w-2.5 h-2.5 bg-sepia-warm rounded-full animate-pulse" />
                <div className="h-px w-16 bg-sepia-warm" />
              </div>

              <h2 className="mb-3">Novas Contribuições da Comunidade</h2>

              <p className="text-sepia-dark max-w-2xl">
                O legado continua através das vozes dos ex-alunos. Explore
                artigos, vídeos e podcasts produzidos pela comunidade, mantendo
                vivos os princípios do Professor Custódio.
              </p>
            </div>

            {/* Filtros */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 bg-white border-2 border-sepia-brown text-sepia-brown hover:bg-sepia-brown hover:text-sepia-cream px-6 py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm"
              >
                <Filter className="w-4 h-4" />
                Filtrar
              </button>

              {isFilterOpen && (
                <div className="absolute right-0 mt-2 bg-white border-2 border-sepia-brown rounded-sm shadow-xl p-2 min-w-[200px] z-10">
                  {[
                    { value: "all", label: "Todos" },
                    { value: "article", label: "Artigos" },
                    { value: "video", label: "Vídeos" },
                    { value: "audio", label: "Áudios" },
                    { value: "book", label: "Livros" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        setFilter(option.value as ContentType);
                        setIsFilterOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 rounded-sm transition-colors ${
                        filter === option.value
                          ? "bg-sepia-brown text-sepia-cream"
                          : "text-sepia-coffee hover:bg-sepia-light"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Grid de Contribuições */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedContributions.map((contribution) => {
            const TypeIcon = getTypeIcon(contribution.type);

            return (
              <article
                key={contribution.id}
                onClick={() => handleContributionClick(contribution)}
                className={`bg-white border-2 border-sepia-light hover:border-sepia-warm transition-all duration-300 rounded-sm shadow-sm hover:shadow-xl group overflow-hidden ${
                  contribution.link ? "cursor-pointer" : ""
                }`}
              >
                {/* Imagem */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <ImageWithFallback
                    src={contribution.imageUrl}
                    alt={contribution.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Badge de Tipo */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-sepia-coffee/90 backdrop-blur-sm text-sepia-cream px-3 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    <TypeIcon className="w-3.5 h-3.5" />
                    {getTypeLabel(contribution.type)}
                  </div>

                  {/* Categoria */}
                  <div className="absolute top-4 right-4 bg-sepia-warm/90 backdrop-blur-sm text-sepia-coffee px-3 py-1.5 rounded-full text-xs uppercase tracking-wider">
                    {contribution.category}
                  </div>

                  {/* Link indicator */}
                  {contribution.link && (
                    <div className="absolute bottom-4 right-4 bg-sepia-brown/90 backdrop-blur-sm text-sepia-cream p-2 rounded-full">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Conteúdo */}
                <div className="p-6">
                  <h3 className="mb-3 group-hover:text-sepia-warm transition-colors">
                    {contribution.title}
                  </h3>

                  <p className="text-sm text-sepia-dark leading-relaxed mb-4 line-clamp-3">
                    {contribution.excerpt}
                  </p>

                  {/* Autor */}
                  <div className="mb-4 pb-4 border-b border-sepia-light">
                    <p className="text-sepia-coffee">{contribution.author}</p>
                    <p className="text-xs text-sepia-brown italic">
                      {contribution.authorRole}
                    </p>
                  </div>

                  {/* Interações */}
                  {/* Interações */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-sepia-brown">
                      {contribution.date}
                    </span>

                    <button
                      onClick={(e) => handleShare(contribution, e)}
                      className="flex items-center gap-2 text-sepia-brown hover:text-sepia-warm transition-colors px-3 py-1.5 rounded-sm hover:bg-sepia-light/50"
                    >
                      <Share2 className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">
                        Compartilhar
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Botões de Controle */}
        <div className="text-center mt-12 space-y-4">
          {visibleCount < filteredContributions.length && (
            <button
              onClick={handleLoadMore}
              className="bg-sepia-brown hover:bg-sepia-coffee text-sepia-cream px-10 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider text-sm mr-4"
            >
              Carregar Mais Contribuições (
              {filteredContributions.length - visibleCount} restantes)
            </button>
          )}

          {visibleCount > 3 && (
            <button
              onClick={handleMinimize}
              className="border-2 border-sepia-brown text-sepia-brown hover:bg-sepia-brown hover:text-sepia-cream px-10 py-4 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Mostrar Menos
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

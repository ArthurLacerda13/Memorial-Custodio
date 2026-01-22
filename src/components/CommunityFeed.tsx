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


export function CommunityFeed({ contributions = [] }) {
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

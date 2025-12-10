import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, FileText, Mic, Camera, Newspaper, Feather, BookOpen } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback'; // Ajuste o caminho se necessário (ex: ./ImageWithFallback)

// Função auxiliar para escolher o ícone com base no tipo
const getIconByType = (type) => {
  switch (type) {
    case 'video': return Play;
    case 'audio': return Mic;
    case 'book': return BookOpen;
    case 'article': return Newspaper;
    case 'photo': return Camera;
    default: return Feather;
  }
};

export function HeroCarousel({ items = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying || items.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, items.length]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Se não houver itens cadastrados (ou carregando), não mostra nada
  if (!items || items.length === 0) return null;

  const currentWork = items[currentIndex];
  // Pega o ícone certo ou usa Feather como padrão
  const IconComponent = getIconByType(currentWork.type);

  return (
    <section className="relative bg-gradient-to-br from-sepia-coffee to-sepia-brown py-20 px-6 overflow-hidden">
      <div className="container mx-auto max-w-7xl relative">
        {/* Controles de Navegação Desktop - Nas extremidades */}
        <button
          onClick={goToPrevious}
          className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2 w-14 h-14 bg-sepia-warm/20 hover:bg-sepia-warm/40 backdrop-blur-sm border border-sepia-warm/40 rounded-full items-center justify-center transition-all duration-300 z-10"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-7 h-7 text-sepia-cream" />
        </button>
        
        <button
          onClick={goToNext}
          className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2 w-14 h-14 bg-sepia-warm/20 hover:bg-sepia-warm/40 backdrop-blur-sm border border-sepia-warm/40 rounded-full items-center justify-center transition-all duration-300 z-10"
          aria-label="Próximo"
        >
          <ChevronRight className="w-7 h-7 text-sepia-cream" />
        </button>

        {/* Conteúdo do Carrossel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
          {/* Lado Esquerdo - Conteúdo */}
          <div className="space-y-6 order-3 lg:order-1 animate-fade-in">
            <div className="flex items-center gap-3">
              <IconComponent className="w-6 h-6 text-sepia-warm" />
              <span className="text-sm uppercase tracking-wider text-sepia-warm font-semibold">
                {currentWork.type === 'book' ? 'Acervo Histórico' : 'Destaque da Comunidade'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-serif font-bold text-sepia-cream leading-tight">
              {currentWork.title}
            </h1>

            <p className="text-sepia-light text-lg leading-relaxed line-clamp-4">
              {currentWork.description}
            </p>

            {/* Se tiver autor (alguns podem não ter) */}
            {currentWork.author && (
              <div className="flex items-center gap-3 pt-2">
                <div className="h-px w-12 bg-sepia-warm" />
                <p className="text-sm text-sepia-warm italic">
                  por {currentWork.author}
                </p>
              </div>
            )}

            <div className="flex gap-4 pt-6">
              {currentWork.link && (
                <a 
                  href={currentWork.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sepia-warm hover:bg-sepia-light text-sepia-coffee px-8 py-3 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider text-sm font-bold flex items-center gap-2"
                >
                  {currentWork.type === 'book' ? <BookOpen className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  Explorar
                </a>
              )}
              
              <button 
                onClick={() => document.getElementById('acervo')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-sepia-warm text-sepia-warm hover:bg-sepia-warm hover:text-sepia-coffee px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm font-bold"
              >
                Ver Acervo Completo
              </button>
            </div>
          </div>

          {/* Lado Direito - Imagem */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-sepia-warm/30 group">
              <ImageWithFallback
                src={currentWork.imageUrl}
                alt={currentWork.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-sepia-coffee/60 via-transparent to-transparent" />
            </div>

            {/* Indicadores do Carrossel */}
            <div className="flex justify-center gap-2 mt-6">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-12 bg-sepia-warm'
                      : 'w-6 bg-sepia-warm/30 hover:bg-sepia-warm/50'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Controles de Navegação Mobile - Entre imagem e conteúdo */}
          <div className="flex justify-center gap-4 order-2 lg:hidden">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 bg-sepia-warm/20 hover:bg-sepia-warm/40 backdrop-blur-sm border border-sepia-warm/40 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-sepia-cream" />
            </button>
            
            <button
              onClick={goToNext}
              className="w-12 h-12 bg-sepia-warm/20 hover:bg-sepia-warm/40 backdrop-blur-sm border border-sepia-warm/40 rounded-full flex items-center justify-center transition-all duration-300"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6 text-sepia-cream" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
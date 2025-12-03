import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, FileText, Mic, Camera, Newspaper, Feather } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Obras agregadas em destaque
const featuredWorks = [
  {
    id: "retratos", // Mude o ID se necessário
    type: "photo",
    title: "Retratos: A Face Humana de Luiz Custódio",
    author: "Coletivo F8",
    description: "Um ensaio visual intimista capturado pelo Coletivo F8, revelando as nuances, o sorriso e a presença marcante do mestre além da sala de aula.",
    imageUrl: "https://static.wixstatic.com/media/8fd669_12197c99a806488b9c27036c4787e86d~mv2.jpg/v1/fill/w_740,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8fd669_12197c99a806488b9c27036c4787e86d~mv2.jpg",
    category: "Fotorreportagem",
    icon: Camera,
    date: "Acervo F8"
  },
  {
    id: "18-folkcom",
    type: "news",
    title: "18º Folkcom: Homenagens aos 50 Anos do Jornalismo",
    author: "Portal UEPB",
    description: "Cobertura oficial da abertura do evento, marcada por depoimentos emocionantes e pelo reconhecimento do legado histórico do curso na região.",
    imageUrl: "https://uepb.edu.br/wp-content/uploads/2023/06/Abertura-do-18a-Folkcomunicacao-03.jpeg",
    category: "Matéria Institucional",
    icon: Newspaper,
    date: "Setembro 2018"
  },
  {
    id: "cronica",
    type: "chronicle",
    title: "Crônica: O Jovem Custódio e o Cineclube",
    author: "Braulio Tavares",
    description: "O escritor Braulio Tavares relembra, em texto emocionante, a juventude ao lado de Custódio e a paixão compartilhada pelo cinema nos anos 60.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDaCDoN5QFyyfX28NNbx_b5sGajWT6m9SRRuL7xswppbXrMCbax_6p8ThpUTSzP9-miY2j8QuOYe77AZJX1CjOaAy2rO1zc2l-rW6NyaGV13z5GudBkiYUmKY6X2ZupV91NLlIKS611BCAqRUyt1PX3Cdpl02NaVVp_SmxMTYvrVgMQcTupv0P7I2vu1g/s728/Cineclube%20de%20Campina%20Grande%201967.jpg",
    category: "Crônica & Memória",
    icon: Feather,
    date: "Fevereiro 2025"
  }
];

interface HeroCarouselProps {
  works?: Array<{
    id: string;
    title: string;
    date: string;
    description: string;
    imageUrl: string;
    pdfUrl?: string;
  }>;
}

export function HeroCarousel({ works }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play do carrossel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredWorks.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + featuredWorks.length) % featuredWorks.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % featuredWorks.length);
  };

  const handleExploreWork = () => {
    const currentWorkData = works?.find(work => work.id === featuredWorks[currentIndex].id);
    if (currentWorkData?.pdfUrl) {
      window.open(currentWorkData.pdfUrl, '_blank');
    }
  };

  const currentWork = featuredWorks[currentIndex];
  const IconComponent = currentWork.icon;

  return (
    <section className="relative bg-gradient-to-br from-sepia-coffee to-sepia-brown py-20 px-6">
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
          <div className="space-y-6 order-3 lg:order-1">
            <div className="flex items-center gap-3">
              <IconComponent className="w-6 h-6 text-sepia-warm" />
              <span className="text-sm uppercase tracking-wider text-sepia-warm">
                {currentWork.category} • {currentWork.date}
              </span>
            </div>

            <h1 className="text-sepia-cream">
              {currentWork.title}
            </h1>

            <p className="text-sepia-light text-lg leading-relaxed">
              {currentWork.description}
            </p>

            <div className="flex items-center gap-3 pt-4">
              <div className="h-px w-12 bg-sepia-warm" />
              <p className="text-sm text-sepia-warm italic">
                por {currentWork.author}
              </p>
            </div>

            <div className="flex gap-4 pt-6">
              <button 
                onClick={handleExploreWork}
                className="bg-sepia-warm hover:bg-sepia-light text-sepia-coffee px-8 py-3 rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wider text-sm"
              >
                Explorar Obra
              </button>
              <button className="border-2 border-sepia-warm text-sepia-warm hover:bg-sepia-warm hover:text-sepia-coffee px-8 py-3 rounded-sm transition-all duration-300 uppercase tracking-wider text-sm">
                Ver Detalhes
              </button>
            </div>
          </div>

          {/* Lado Direito - Imagem */}
          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-2xl border-4 border-sepia-warm/30">
              <ImageWithFallback
                src={currentWork.imageUrl}
                alt={currentWork.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay sutil */}
              <div className="absolute inset-0 bg-gradient-to-t from-sepia-coffee/60 to-transparent" />
            </div>

            {/* Indicadores do Carrossel */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredWorks.map((_, index) => (
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

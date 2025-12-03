import { WorkCard } from './WorkCard';
import { Archive, ArrowRight } from 'lucide-react';

interface Work {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  pdfUrl?: string;
}

interface HistoricalFoundationProps {
  works: Work[];
}

export function HistoricalFoundation({ works }: HistoricalFoundationProps) {
  // Mostrar apenas as 3 primeiras obras
  const displayedWorks = works.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-sepia-light to-sepia-cream border-t-2 border-sepia-warm/30">
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-16 bg-sepia-brown/40" />
              <Archive className="w-7 h-7 text-sepia-brown" />
              <div className="h-px w-16 bg-sepia-brown/40" />
            </div>
            
            <h2 className="mb-4 text-sepia-coffee">
              A Fundação Histórica
            </h2>
            
            <p className="text-sepia-dark max-w-3xl mx-auto opacity-90">
              As obras fundamentais do Professor Luiz Custódio que estabeleceram as bases éticas e 
              metodológicas do jornalismo brasileiro, servindo como alicerce para toda a produção atual.
            </p>
          </div>

          {/* Badge informativo */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-sepia-warm/10 border border-sepia-warm/30 px-4 py-2 rounded-full">
              <div className="w-1.5 h-1.5 bg-sepia-brown rounded-full" />
              <span className="text-xs uppercase tracking-wider text-sepia-brown">
                1975 - 2020 • 45 anos de contribuições acadêmicas
              </span>
            </div>
          </div>
        </div>

        {/* Grade Reduzida de Obras */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {displayedWorks.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              date={work.date}
              description={work.description}
              imageUrl={work.imageUrl}
              pdfUrl={work.pdfUrl}
            />
          ))}
        </div>

        {/* CTA para Ver Arquivo Completo */}
        <div className="bg-white border-2 border-sepia-brown rounded-sm p-10 text-center shadow-md">
          <div className="max-w-2xl mx-auto">
            <h3 className="mb-4 text-sepia-coffee">
              Explore o Arquivo Completo
            </h3>
            
            <p className="text-sepia-dark mb-6">
              Acesse todas as {works.length} obras, publicações e pesquisas acadêmicas do Professor Luiz Custódio, 
              organizadas cronologicamente e por tema.
            </p>

            <button className="group inline-flex items-center gap-2 bg-sepia-brown hover:bg-sepia-coffee text-sepia-cream px-8 py-3 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider text-sm">
              Ver Arquivo Histórico Completo
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Ornamento decorativo de fechamento */}
        <div className="mt-16 flex items-center justify-center gap-4 opacity-40">
          <div className="w-2 h-2 bg-sepia-brown rotate-45" />
          <div className="h-px w-24 bg-sepia-brown" />
          <div className="w-3 h-3 bg-sepia-brown rounded-full" />
          <div className="h-px w-24 bg-sepia-brown" />
          <div className="w-2 h-2 bg-sepia-brown rotate-45" />
        </div>
      </div>
    </section>
  );
}

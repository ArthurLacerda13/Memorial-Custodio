import { WorkCard } from './WorkCard';
import { BookOpen, ArrowRight } from 'lucide-react';

interface Work {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
}

interface WorksGalleryProps {
  works: Work[];
}

export function WorksGallery({ works }: WorksGalleryProps) {
  return (
    <section id="galeria" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho da seção */}
        <div className="mb-16">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-16 bg-sepia-warm" />
              <BookOpen className="w-8 h-8 text-sepia-brown" />
              <div className="h-px w-16 bg-sepia-warm" />
            </div>
            
            <h2 className="mb-4">
              Principais Obras e Contribuições
            </h2>
            
            <p className="text-sepia-dark max-w-2xl mx-auto">
              Uma seleção das publicações, pesquisas e trabalhos acadêmicos 
              que marcaram sua trajetória no ensino do jornalismo.
            </p>
          </div>
          
          {/* Botão Ver mais */}
          <div className="flex justify-end mt-6">
            <button className="group flex items-center gap-2 text-sepia-brown hover:text-sepia-coffee transition-colors text-sm uppercase tracking-wider">
              Ver mais
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        
        {/* Grade de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              date={work.date}
              description={work.description}
              imageUrl={work.imageUrl}
            />
          ))}
        </div>
        
        {/* Rodapé decorativo */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="w-2 h-2 bg-sepia-brown rotate-45" />
          <div className="h-px w-24 bg-sepia-warm/40" />
          <div className="w-3 h-3 bg-sepia-brown rounded-full" />
          <div className="h-px w-24 bg-sepia-warm/40" />
          <div className="w-2 h-2 bg-sepia-brown rotate-45" />
        </div>
      </div>
    </section>
  );
}
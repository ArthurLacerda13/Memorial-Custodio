import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar } from 'lucide-react';

interface WorkCardProps {
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  pdfUrl?: string;
}

export function WorkCard({ title, date, description, imageUrl, pdfUrl }: WorkCardProps) {
  const handleClick = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    }
  };

  return (
    <article 
      className={`group relative bg-sepia-cream border-2 border-sepia-warm/40 rounded-sm shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${pdfUrl ? 'cursor-pointer' : ''}`}
      onClick={handleClick}>      
      {/* Efeito de papel envelhecido */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" 
           style={{
             backgroundImage: `repeating-linear-gradient(
               0deg,
               transparent,
               transparent 8px,
               rgba(139, 111, 71, 0.03) 8px,
               rgba(139, 111, 71, 0.03) 9px
             )`
           }} 
      />
      
      {/* Imagem com efeito sépia */}
      <div className="relative h-48 overflow-hidden border-b-2 border-sepia-warm/40">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover sepia contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-300"
        />
        {/* Overlay sépia */}
        <div className="absolute inset-0 bg-sepia-brown/20 mix-blend-multiply" />
        
        {/* Tag de data no estilo jornal */}
        <div className="absolute top-3 right-3 bg-sepia-coffee text-sepia-cream px-3 py-1 text-sm flex items-center gap-1.5 shadow-lg">
          <Calendar className="w-3.5 h-3.5" />
          <span>{date}</span>
        </div>
      </div>
      
      {/* Conteúdo */}
      <div className="relative p-5">
        {/* Ornamento superior */}
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1 h-1 bg-sepia-brown rounded-full" />
          <div className="h-px flex-1 bg-sepia-warm/30" />
          <div className="w-1 h-1 bg-sepia-brown rounded-full" />
        </div>
        
        <h3 className="mb-3 group-hover:text-sepia-brown transition-colors">
          {title}
        </h3>
        
        <p className="text-sepia-dark leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Rodapé decorativo */}
        <div className="mt-4 pt-4 border-t border-sepia-warm/30 flex justify-between items-center">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-sepia-brown rotate-45" />
            <div className="w-1 h-1 bg-sepia-brown rotate-45" />
            <div className="w-1 h-1 bg-sepia-brown rotate-45" />
          </div>
          
          <span className="text-xs text-sepia-brown uppercase tracking-wider">
            Arquivo
          </span>
        </div>
      </div>
      
      {/* Borda externa decorativa */}
      <div className="absolute top-2 left-2 w-6 h-6 border-t border-l border-sepia-brown/20 pointer-events-none" />
      <div className="absolute bottom-2 right-2 w-6 h-6 border-b border-r border-sepia-brown/20 pointer-events-none" />
    </article>
  );
}

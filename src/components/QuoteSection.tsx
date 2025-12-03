import { Quote } from 'lucide-react';

interface QuoteSectionProps {
  quote: string;
  author?: string;
}

export function QuoteSection({ quote, author = "Professor Luiz Custódio" }: QuoteSectionProps) {
  return (
    <section className="py-16 px-6 bg-sepia-light/30">
      <div className="container mx-auto max-w-4xl">
        <div className="relative">
          {/* Padrão de papel vintage */}
          <div className="absolute -inset-8 bg-gradient-to-br from-sepia-warm/5 to-sepia-brown/5 rounded-lg" 
               style={{
                 backgroundImage: `repeating-linear-gradient(
                   45deg,
                   transparent,
                   transparent 10px,
                   rgba(139, 111, 71, 0.02) 10px,
                   rgba(139, 111, 71, 0.02) 20px
                 )`
               }} 
          />
          
          <div className="relative bg-sepia-cream border-2 border-sepia-warm/30 rounded-lg p-10 md:p-14 shadow-lg">
            {/* Ícone de aspas decorativo */}
            <div className="absolute -top-6 left-8 bg-sepia-brown text-sepia-cream p-3 rounded-full shadow-lg">
              <Quote className="w-6 h-6" />
            </div>
            
            {/* Citação */}
            <blockquote className="relative">
              <p className="text-sepia-dark italic mb-6 leading-relaxed text-center md:text-left">
                "{quote}"
              </p>
              
              {/* Linha decorativa */}
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1 bg-sepia-warm/40" />
                <div className="w-1.5 h-1.5 bg-sepia-brown rounded-full" />
                <div className="h-px flex-1 bg-sepia-warm/40" />
              </div>
              
              {/* Autor */}
              <footer className="text-center md:text-right">
                <cite className="not-italic text-sepia-brown">
                  — {author}
                </cite>
              </footer>
            </blockquote>
            
            {/* Cantos decorativos */}
            <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-sepia-brown/20" />
            <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-sepia-brown/20" />
            <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-sepia-brown/20" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-sepia-brown/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

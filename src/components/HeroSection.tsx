import { ImageWithFallback } from './figma/ImageWithFallback';

interface HeroSectionProps {
  imageUrl: string;
  name: string;
  startYear: string;
  endYear: string;
}

export function HeroSection({ imageUrl, name, startYear, endYear }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative py-20 px-6 overflow-hidden">
      {/* Padrão de fundo decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            #8b6f47 2px,
            #8b6f47 3px
          )`
        }} />
      </div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Foto do Professor com moldura sépia */}
          <div className="flex-shrink-0">
            <div className="relative">
              <div className="absolute -inset-4 bg-sepia-brown/10 rounded-sm" />
              <div className="relative border-8 border-sepia-warm/40 rounded-sm shadow-2xl overflow-hidden">
                <ImageWithFallback
                  src={imageUrl}
                  alt={name}
                  className="w-80 h-96 object-cover sepia contrast-110 brightness-95"
                />
                {/* Overlay sépia */}
                <div className="absolute inset-0 bg-sepia-brown/15 mix-blend-multiply" />
              </div>
              {/* Canto decorativo */}
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-4 border-l-4 border-sepia-dark" />
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-4 border-r-4 border-sepia-dark" />
            </div>
          </div>
          
          {/* Informações do Professor */}
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-6 py-2 border-t-2 border-b-2 border-sepia-brown">
              <p className="text-sepia-brown tracking-widest uppercase">Memorial</p>
            </div>
            
            <h1 className="mb-4">
              {name}
            </h1>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="h-px flex-1 max-w-20 bg-sepia-warm" />
              <p className="text-sepia-brown tracking-wide">
                {startYear} — {endYear}
              </p>
              <div className="h-px flex-1 max-w-20 bg-sepia-warm" />
            </div>
            
            <p className="text-sepia-dark max-w-xl mx-auto md:mx-0 leading-relaxed">
              Dedicou 45 anos à formação de gerações de jornalistas, 
              deixando um legado indelével no ensino e na prática do jornalismo brasileiro.
            </p>
            
            {/* Ornamento decorativo */}
            <div className="mt-8 flex items-center justify-center md:justify-start gap-2">
              <div className="w-2 h-2 bg-sepia-brown rotate-45" />
              <div className="w-2 h-2 bg-sepia-brown rotate-45" />
              <div className="w-2 h-2 bg-sepia-brown rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from 'react';

export function ImageWithFallback({ src, alt, className, ...props }) {
  const [error, setError] = useState(false);

  // Imagem reserva (Placeholder) caso a original quebre
  const fallbackImage = "https://portal.crea-sc.org.br/agenda_evento/responsabilidade-tecnica-e-preservacao-ambiental-3/imagem-indisponivel-para-produtos-sem-imagem_15_5/";

  return (
    <img
      {...props}
      alt={alt}
      className={className}
      src={error || !src ? fallbackImage : src}
      onError={() => setError(true)}
    />
  );
}
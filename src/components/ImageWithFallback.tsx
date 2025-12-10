import { useState } from 'react';

export function ImageWithFallback({ src, alt, className, ...props }) {
  const [error, setError] = useState(false);

  // Imagem reserva (Placeholder) caso a original quebre
  const fallbackImage = "https://placehold.co/600x400/D4A373/FFFFFF?text=Imagem+Indispon%C3%ADvel";

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
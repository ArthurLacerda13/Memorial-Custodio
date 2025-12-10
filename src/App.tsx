import { useState, useEffect } from 'react';
import { HeroCarousel } from "./components/HeroCarousel";
import { CommunityFeed } from "./components/CommunityFeed";
import { HistoricalFoundation } from "./components/HistoricalFoundation";
import { QuoteSection } from "./components/QuoteSection";
import { Header } from "./components/Header";
import { client } from './sanity';

// Dados mockados do memorial (Estáticos)
const professorData = {
  name: "Prof. Luiz Custódio",
  startYear: "1975",
  endYear: "2020",
  imageUrl:
    "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzY0MDAwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  quote:
    "O jornalismo não é apenas uma profissão, é um compromisso ético com a verdade e a sociedade. Formar jornalistas é formar cidadãos conscientes do seu papel transformador.",
};

export default function App() {
  const [works, setWorks] = useState([]); // Obras dele (Acervo)
  const [contributions, setContributions] = useState([]); // Comunidade (Feed)
  const [featured, setFeatured] = useState([]); // Destaques (Carrossel)

  useEffect(() => {
    // 1. Query para o Carrossel (Pega Obras E Contribuições marcadas como destaque)
    // "coalesce" é um comando esperto: se não tiver linkExterno, ele pega o link do PDF
    const featuredQuery = `*[_type in ["obra", "contribuicao"] && destaque == true] {
      _id,
      titulo,
      resumo,
      "imageUrl": imagemCapa.asset->url,
      "link": coalesce(linkExterno, arquivoPdf.asset->url),
      tipo
    }`;

    // 2. Query Obras (Acervo Histórico)
    const worksQuery = `*[_type == "obra"] | order(data desc) {
      _id,
      titulo,
      data,
      resumo,
      "imageUrl": imagemCapa.asset->url,
      "pdfUrl": arquivoPdf.asset->url
    }`;

    // 3. Query Contribuições da Comunidade
    const contributionsQuery = `*[_type == "contribuicao"] | order(_createdAt desc) {
      _id,
      titulo,
      tipo,
      autor,
      cargoAutor,
      data,
      resumo,
      categoria,
      linkExterno,
      "imageUrl": imagemCapa.asset->url
    }`;

    // Buscando tudo junto (Mais rápido)
    Promise.all([
      client.fetch(featuredQuery),
      client.fetch(worksQuery),
      client.fetch(contributionsQuery)
    ])
    .then(([featuredData, worksData, contributionsData]) => {
      
      // Formata Destaques (Carrossel)
      const formattedFeatured = featuredData.map(item => ({
        id: item._id,
        title: item.titulo,
        description: item.resumo,
        imageUrl: item.imageUrl,
        link: item.link, 
        type: item.tipo
      }));
      setFeatured(formattedFeatured);

      // Formata Obras (Acervo)
      const formattedWorks = worksData.map(item => ({
        id: item._id,
        title: item.titulo,
        date: item.data,
        description: item.resumo,
        imageUrl: item.imageUrl,
        pdfUrl: item.pdfUrl
      }));
      setWorks(formattedWorks);

      // Formata Contribuições (Feed)
      const formattedContributions = contributionsData.map(item => ({
        id: item._id,
        type: item.tipo, 
        title: item.titulo,
        author: item.autor,
        authorRole: item.cargoAutor,
        date: item.data,
        excerpt: item.resumo,
        category: item.categoria,
        link: item.linkExterno,
        imageUrl: item.imageUrl
      }));
      setContributions(formattedContributions);
    })
    .catch((error) => {
      console.error("ERRO NO FETCH:", error);
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero agora recebe 'items' (os destaques) em vez de 'works' */}
      <HeroCarousel items={featured} /> 
      
      {/* Feed da Comunidade */}
      <CommunityFeed contributions={contributions} /> 

      <QuoteSection quote={professorData.quote} />
      
      {/* Fundação Histórica (Acervo) */}
      <HistoricalFoundation works={works} />
      
      {/* Rodapé */}
      <footer className="bg-sepia-coffee text-sepia-cream py-12 px-6 border-t-4 border-sepia-brown">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-16 bg-sepia-warm" />
              <div className="w-2 h-2 bg-sepia-warm rounded-full" />
              <div className="h-px w-16 bg-sepia-warm" />
            </div>

            <p className="text-sepia-light mb-2">
              Em memória de uma vida dedicada ao jornalismo e à educação
            </p>

            <p className="text-sepia-warm text-sm">
              © 2024 Memorial Professor Luiz Custódio. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
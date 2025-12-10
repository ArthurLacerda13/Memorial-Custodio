import { useState, useEffect } from 'react'; // <--- ADICIONEI ISSO
import { HeroCarousel } from "./components/HeroCarousel";
import { CommunityFeed } from "./components/CommunityFeed";
import { HistoricalFoundation } from "./components/HistoricalFoundation";
import { QuoteSection } from "./components/QuoteSection";
import { Header } from "./components/Header";
import { client } from './sanity'; // Removi urlFor se não for usar aqui direto

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
  // Estado para guardar as obras que vêm do Sanity
  const [works, setWorks] = useState([]);

  // Busca os dados assim que o site carrega
  useEffect(() => {
    // Query para pegar Obras (Livros/Teses) ordenados por data
    const query = `*[_type == "obra" && tipo == "book"] | order(data desc) {
      _id,
      titulo,
      data,
      resumo,
      "imageUrl": imagemCapa.asset->url,
      "pdfUrl": arquivoPdf.asset->url
    }`;

    client.fetch(query)
      .then((data) => {
        console.log("DADOS RECEBIDOS DO SANITY:", data);
        
        // Formata os dados para o padrão que o seu componente espera
        const formattedWorks = data.map(item => ({
          id: item._id,
          title: item.titulo,
          date: item.data,
          description: item.resumo,
          imageUrl: item.imageUrl, // O Sanity já manda a URL completa aqui
          pdfUrl: item.pdfUrl
        }));
        
        setWorks(formattedWorks);
      })
      .catch((error) => {
        console.error("ERRO NO FETCH:", error);
      });
  }, []); // <--- ISSO AQUI (}, []);) ESTAVA FALTANDO

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Carousel */}
      {/* Nota: Se o Hero precisar de obras, passe 'works'. Se for estático, ok. */}
      <HeroCarousel works={works} />

      {/* Feed da Comunidade */}
      <CommunityFeed />

      {/* Citação */}
      <QuoteSection quote={professorData.quote} />

      {/* Fundação Histórica (Onde as teses vão aparecer) */}
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
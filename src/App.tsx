import { HeroCarousel } from "./components/HeroCarousel";
import { Download, FileText } from "lucide-react";
import { CommunityFeed } from "./components/CommunityFeed";
import { HistoricalFoundation } from "./components/HistoricalFoundation";
import { QuoteSection } from "./components/QuoteSection";
import { Header } from "./components/Header";

// Dados mockados do memorial
const professorData = {
  name: "Prof. Luiz Custódio",
  startYear: "1975",
  endYear: "2020",
  imageUrl:
    "https://images.unsplash.com/photo-1758685734511-4f49ce9a382b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGRlcmx5JTIwcHJvZmVzc29yJTIwYWNhZGVtaWN8ZW58MXx8fHwxNzY0MDAwNjM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  quote:
    "O jornalismo não é apenas uma profissão, é um compromisso ético com a verdade e a sociedade. Formar jornalistas é formar cidadãos conscientes do seu papel transformador.",
};

const works = [
  {
    id: "1",
    title: "A Influência do Rádio nas Cantorias (Dissertação)",
    date: "1983",
    description: "Estudo pioneiro que desafiou previsões pessimistas da época, demonstrando como o rádio serviu de instrumento de resistência e adaptação para os violeiros na Paraíba, em vez de extinguí-los.",
    imageUrl: "/img/influencia-do-radio.png",
    pdfUrl: "/arquivos/A-influencia-do-Radio.pdf",
  },
  {
    id: "2",
    title: "A História da Imprensa Brasileira",
    date: "1990",
    description: "Análise histórica detalhada sobre o desenvolvimento da imprensa no Brasil desde o período colonial até a redemocratização.",
    imageUrl: "https://images.unsplash.com/photo-1759495594991-35631f1c1863?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBqb3VybmFsaXNtJTIwdHlwZXdyaXRlcnxlbnwxfHx8fDE3NjQwMDA2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "3",
    title: "Jornalismo Investigativo: Técnicas e Práticas",
    date: "1998",
    description: "Guia prático sobre metodologias de investigação jornalística, com estudos de caso de grandes reportagens brasileiras.",
    imageUrl: "https://images.unsplash.com/photo-1551300329-dc0a750a7483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2Mzk2ODU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "4",
    title: "Comunicação e Sociedade",
    date: "2005",
    description: "Coletânea de ensaios sobre o papel dos meios de comunicação na formação da opinião pública e na democracia moderna.",
    imageUrl: "https://images.unsplash.com/photo-1643970118347-e11ad4d48a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBsaWJyYXJ5JTIwYm9va3N8ZW58MXx8fHwxNzY0MDAwNjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "5",
    title: "O Jornalismo na Era Digital",
    date: "2012",
    description: "Reflexões sobre as transformações do jornalismo com o advento da internet e das redes sociais, mantendo princípios éticos fundamentais.",
    imageUrl: "https://images.unsplash.com/photo-1758562235072-876b0135cfda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwbmV3c3BhcGVyJTIwYXJjaGl2ZXxlbnwxfHx8fDE3NjQwMDA2MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "6",
    title: "Formação do Jornalista Contemporâneo",
    date: "2018",
    description: "Últimas contribuições sobre o ensino de jornalismo, abordando competências necessárias para o profissional do século XXI.",
    imageUrl: "https://images.unsplash.com/photo-1551300329-dc0a750a7483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW50YWdlJTIwYm9vayUyMGNvdmVyfGVufDF8fHx8MTc2Mzk2ODU4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "retratos",
    title: "Retratos: A Face Humana de Luiz Custódio",
    date: "Acervo F8",
    description: "Um ensaio visual intimista capturado pelo Coletivo F8, revelando as nuances, o sorriso e a presença marcante do mestre além da sala de aula.",
    imageUrl: "https://static.wixstatic.com/media/8fd669_12197c99a806488b9c27036c4787e86d~mv2.jpg/v1/fill/w_740,h_490,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/8fd669_12197c99a806488b9c27036c4787e86d~mv2.jpg",
    pdfUrl: "https://www.coletivof8.com/post/retratos-luiz-custodio"
  },
  {
    id: "18-folkcom",
    title: "18º Folkcom: Homenagens aos 50 Anos do Jornalismo",
    date: "Setembro 2018",
    description: "Cobertura oficial da abertura do evento, marcada por depoimentos emocionantes e pelo reconhecimento do legado histórico do curso na região.",
    imageUrl: "https://uepb.edu.br/wp-content/uploads/2023/06/Abertura-do-18a-Folkcomunicacao-03.jpeg",
    pdfUrl: "https://uepb.edu.br/homenagens-depoimentos-e-importancia-dos-50-anos-do-curso-de-jornalismo-marcam-abertura-do-18o-folkcom/" // Link para o site do evento
  },
  {
    id: "cronica",
    title: "Crônica: O Jovem Custódio e o Cineclube",
    date: "Fevereiro 2025",
    description: "O escritor Braulio Tavares relembra, em texto emocionante, a juventude ao lado de Custódio e a paixão compartilhada pelo cinema nos anos 60.",
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDaCDoN5QFyyfX28NNbx_b5sGajWT6m9SRRuL7xswppbXrMCbax_6p8ThpUTSzP9-miY2j8QuOYe77AZJX1CjOaAy2rO1zc2l-rW6NyaGV13z5GudBkiYUmKY6X2ZupV91NLlIKS611BCAqRUyt1PX3Cdpl02NaVVp_SmxMTYvrVgMQcTupv0P7I2vu1g/s728/Cineclube%20de%20Campina%20Grande%201967.jpg",
    pdfUrl: "https://mundofantasmo.blogspot.com/2025/02/5150-luis-custodio-1950-2025-722025.html" // Link para as crônicas do Braulio Tavares
  },
];


export default function App() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho com Logo e Navegação */}
      <Header />

      {/* Hero Carousel - Obras Agregadas em Destaque */}
      <HeroCarousel works={works} />

      {/* Seção Principal - Feed da Comunidade */}
      <CommunityFeed />

      {/* Citação Inspiracional */}
      <QuoteSection quote={professorData.quote} />

      {/* Seção Secundária - Fundação Histórica */}
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
              © 2024 Memorial Professor Luiz Custódio. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

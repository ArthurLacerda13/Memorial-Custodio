import { FileText, Users, Radio, ArrowRight } from 'lucide-react';

// Dados mockados dos artigos dos ex-alunos
const articles = [
  {
    id: "1",
    title: "Desinformação na Era Digital: Novos Desafios Éticos",
    author: "Marina Silva Santos",
    category: "Ética",
    excerpt: "Uma análise sobre como os princípios éticos do jornalismo se aplicam ao combate à desinformação nas redes sociais.",
    categoryIcon: FileText
  },
  {
    id: "2",
    title: "Podcast e o Futuro do Radiojornalismo",
    author: "Carlos Eduardo Mendes",
    category: "Radiojornalismo",
    excerpt: "Explorando como o formato podcast está transformando a narrativa do jornalismo de áudio contemporâneo.",
    categoryIcon: Radio
  },
  {
    id: "3",
    title: "Jornalismo Colaborativo: Novas Práticas Investigativas",
    author: "Ana Paula Rodrigues",
    category: "Investigação",
    excerpt: "Como a colaboração entre jornalistas de diferentes países fortalece reportagens investigativas de interesse público.",
    categoryIcon: Users
  }
];

export function LegacySection() {
  return (
    <section className="bg-[#faf8f3] py-24 px-6 border-t-2 border-sepia-light">
      <div className="container mx-auto max-w-7xl">
        {/* Cabeçalho da Seção */}
        <div className="mb-16">
          <div className="text-center mb-4">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-20 bg-sepia-warm" />
              <div className="w-3 h-3 bg-sepia-warm rounded-full" />
              <div className="h-px w-20 bg-sepia-warm" />
            </div>
            
            <h2 className="mb-4">O Legado Continua</h2>
            
            <p className="text-sepia-dark max-w-3xl mx-auto opacity-90">
              As novas gerações de jornalistas continuam a tradição de excelência e ética do Professor Luiz Custódio, 
              trazendo suas vozes e pesquisas para os desafios contemporâneos da comunicação.
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

        {/* Grade de Artigos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => {
            const IconComponent = article.categoryIcon;
            return (
              <article 
                key={article.id}
                className="bg-white border-2 border-sepia-light hover:border-sepia-warm transition-all duration-300 p-8 rounded-sm shadow-sm hover:shadow-md group"
              >
                {/* Categoria */}
                <div className="flex items-center gap-2 mb-4">
                  <IconComponent className="w-4 h-4 text-sepia-warm" />
                  <span className="text-sm uppercase tracking-wider text-sepia-warm">
                    {article.category}
                  </span>
                </div>

                {/* Título do Artigo */}
                <h3 className="mb-3 group-hover:text-sepia-warm transition-colors">
                  {article.title}
                </h3>

                {/* Autor */}
                <p className="text-sm text-sepia-brown mb-4 italic">
                  por {article.author}
                </p>

                {/* Excerpt */}
                <p className="text-sepia-dark text-sm leading-relaxed opacity-80">
                  {article.excerpt}
                </p>

                {/* Ornamento decorativo */}
                <div className="mt-6 pt-4 border-t border-sepia-light flex items-center gap-2 opacity-60">
                  <div className="h-px w-8 bg-sepia-warm" />
                  <div className="w-1.5 h-1.5 bg-sepia-warm rounded-full" />
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA - Chamada para Ação */}
        <div className="bg-gradient-to-br from-sepia-cream to-sepia-light border-2 border-sepia-brown rounded-sm p-12 text-center shadow-lg">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-px w-12 bg-sepia-brown" />
              <div className="w-2.5 h-2.5 bg-sepia-brown rounded-full" />
              <div className="h-px w-12 bg-sepia-brown" />
            </div>

            <h3 className="mb-4 text-sepia-coffee">
              Faça Parte Desta História
            </h3>
            
            <p className="text-sepia-dark mb-8 max-w-xl mx-auto">
              Você foi aluno do Professor Luiz Custódio? Compartilhe sua pesquisa, memória ou reflexão 
              sobre como seus ensinamentos influenciaram sua carreira jornalística.
            </p>

            <button className="bg-sepia-brown hover:bg-sepia-coffee text-sepia-cream px-10 py-4 rounded-sm transition-all duration-300 shadow-md hover:shadow-lg uppercase tracking-wider text-sm">
              Contribua com sua pesquisa ou memória
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
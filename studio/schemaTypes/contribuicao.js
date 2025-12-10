export default {
  name: 'contribuicao',
  title: 'Feed da Comunidade (Homenagens)', // Nome no menu
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título',
      type: 'string',
      validation: rule => rule.required()
    },
    {
      name: 'tipo',
      title: 'Tipo de Mídia',
      type: 'string',
      options: {
        list: [
          { title: 'Vídeo (YouTube/Vimeo)', value: 'video' },
          { title: 'Artigo / Notícia', value: 'article' },
          { title: 'Livro / Tese', value: 'book' },
          { title: 'Áudio', value: 'audio' }
        ],
        layout: 'radio'
      },
      initialValue: 'article'
    },
    {
      name: 'autor',
      title: 'Autor ou Instituição (Ex: UEPB, Jornal da Paraíba)',
      type: 'string'
    },
    {
      name: 'cargoAutor',
      title: 'Descrição do Autor (Ex: Tributo Institucional | Ex-aluno)',
      type: 'string'
    },
    {
      name: 'data',
      title: 'Data (Ex: Novembro 2025)',
      type: 'string'
    },
    {
      name: 'resumo',
      title: 'Resumo / Trecho',
      type: 'text',
      rows: 3
    },
    {
      name: 'categoria',
      title: 'Categoria (Etiqueta)',
      type: 'string',
      description: 'Ex: Homenagem, Tese de Doutorado, Notícia'
    },
    {
      name: 'imagemCapa',
      title: 'Imagem de Destaque',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'linkExterno',
      title: 'Link para o conteúdo (URL)',
      type: 'url'
    },
    {
      name: 'destaque',
      title: 'Destacar no Carrossel (Topo do Site)?',
      type: 'boolean',
      initialValue: false,
      description: 'Marque isso se quiser que este item apareça no topo do site.'
    },
  ]
}
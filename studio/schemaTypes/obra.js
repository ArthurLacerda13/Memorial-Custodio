export default {
  name: 'obra',
  title: 'Acervo e Contribuições', // Nome que aparece no menu
  type: 'document',
  fields: [
    {
      name: 'titulo',
      title: 'Título da Obra',
      type: 'string',
      validation: rule => rule.required()
    },
    {
      name: 'tipo',
      title: 'Tipo de Mídia',
      type: 'string',
      options: {
        list: [
          { title: 'Livro / E-book / Tese', value: 'book' },
          { title: 'Vídeo', value: 'video' },
          { title: 'Áudio / Podcast', value: 'audio' },
          { title: 'Artigo / Notícia', value: 'article' }
        ],
        layout: 'radio' // Aparece como bolinhas para marcar, bem fácil
      },
      validation: rule => rule.required()
    },
    {
      name: 'autor',
      title: 'Autor(es)',
      type: 'string'
    },
    {
      name: 'papelAutor',
      title: 'Descrição do Autor (Ex: Turma de 2012 | Tese de Doutorado)',
      type: 'string'
    },
    {
      name: 'data',
      title: 'Data ou Ano (Ex: 1983 ou Novembro 2025)',
      type: 'string'
    },
    {
      name: 'resumo',
      title: 'Resumo / Descrição',
      type: 'text',
      rows: 3
    },
    {
      name: 'categoria',
      title: 'Categoria (Ex: Jornalismo Político, Homenagem, Tese)',
      type: 'string'
    },
    {
      name: 'imagemCapa',
      title: 'Capa ou Foto',
      type: 'image',
      options: {
        hotspot: true // Permite cortar a foto
      }
    },
    {
      name: 'arquivoPdf',
      title: 'Arquivo PDF (Para livros e teses)',
      type: 'file',
      description: 'Se for um vídeo do YouTube, deixe vazio e use o campo abaixo.'
    },
    {
      name: 'linkExterno',
      title: 'Link Externo (YouTube ou Site da Notícia)',
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
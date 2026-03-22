import { articles } from '../data/articles.js'

export const getArticles = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles)
    }, 300)
  })
}

export const getArticleById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const article = articles.find(a => a.id === parseInt(id))
      resolve(article)
    }, 300)
  })
}

export const getArticlesByCategory = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (category === '全部') {
        resolve(articles)
      } else {
        const filtered = articles.filter(a => a.category === category)
        resolve(filtered)
      }
    }, 300)
  })
}

export const searchArticles = (keyword) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = articles.filter(a => 
        a.title.toLowerCase().includes(keyword.toLowerCase()) ||
        a.summary.toLowerCase().includes(keyword.toLowerCase()) ||
        a.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
      )
      resolve(filtered)
    }, 300)
  })
}
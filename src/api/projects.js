import { projects } from '../data/projects.js'

export const getProjects = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects)
    }, 300)
  })
}

export const getProjectById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const project = projects.find(p => p.id === parseInt(id))
      resolve(project)
    }, 300)
  })
}

export const getProjectsByStatus = (status) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = projects.filter(p => p.status === status)
      resolve(filtered)
    }, 300)
  })
}

export const searchProjects = (keyword) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = projects.filter(p => 
        p.name.toLowerCase().includes(keyword.toLowerCase()) ||
        p.description.toLowerCase().includes(keyword.toLowerCase()) ||
        p.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
      )
      resolve(filtered)
    }, 300)
  })
}
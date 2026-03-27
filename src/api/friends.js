import { friends } from '../data/friends.js'

export const getFriends = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(friends)
    }, 300)
  })
}

export const getFriendById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const friend = friends.find(f => f.id === parseInt(id))
      resolve(friend)
    }, 300)
  })
}

export const searchFriends = (keyword) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = friends.filter(f => 
        f.name.toLowerCase().includes(keyword.toLowerCase()) ||
        f.description.toLowerCase().includes(keyword.toLowerCase()) ||
        f.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
      )
      resolve(filtered)
    }, 300)
  })
}
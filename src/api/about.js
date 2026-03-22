export const getAboutInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '开发者小鼠',
        title: '苦逼初二学生兼前端开发者',
        avatar: 'https://cdn4.winhlb.com/2026/03/21/69bea1155c14f.jpg',
        bio: '热爱技术（存疑）。',
        techStack: [
          { name: 'Vue.js', icon: '🟢' },
          { name: 'React', icon: '⚛️' },
          { name: 'TypeScript', icon: '📘' },
          { name: 'Node.js', icon: '🟢' },
          { name: 'Element Plus', icon: '🎨' },
          { name: 'Vite', icon: '⚡' },
          { name: 'Git', icon: '📦' },
          { name: 'MySQL', icon: '🗄️' }
        ],
        learning: [
          {
            year: '2024',
            title: '深入学习 Vue3',
            description: '系统学习 Vue3 的 Composition API、响应式原理和性能优化'
          },
          {
            year: '2023',
            title: '掌握 TypeScript',
            description: '深入学习 TypeScript 的类型系统、泛型、装饰器等高级特性'
          },
          {
            year: '2022',
            title: '学习 Node.js',
            description: '学习后端开发，掌握 Express、Koa 等框架'
          }
        ],
        hobbies: [
          { name: '阅读', icon: '📚', description: '技术书籍、小说、散文' },
          { name: '摄影', icon: '📷', description: '风景摄影、人像摄影' },
          { name: '运动', icon: '🏃', description: '跑步、羽毛球、游泳' },
          { name: '音乐', icon: '🎵', description: '吉他、钢琴' },
          { name: '旅行', icon: '✈️', description: '探索不同的城市和文化' }
        ]
      })
    }, 300)
  })
}
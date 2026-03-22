export const articles = [
  {
    id: 1,
    title: '欢迎来到我的博客',
    summary: '这是我的第一篇文章，欢迎来到我的个人博客。这里将分享我的技术心得、项目经验和学习笔记。',
    content: `
      <p>欢迎来到我的个人博客！这是一个基于 Vue3 + Element Plus 构建的现代化博客系统。</p>
      
      <h2>关于这个博客</h2>
      <p>这个博客系统具有以下特点：</p>
      <ul>
        <li>响应式设计，支持桌面端和移动端</li>
        <li>毛玻璃风格，简洁美观</li>
        <li>文章管理功能</li>
        <li>项目展示功能</li>
        <li>联系方式页面</li>
      </ul>
      
      <h2>技术栈</h2>
      <p>本项目使用以下技术构建：</p>
      <ul>
        <li>Vue 3 - 渐进式 JavaScript 框架</li>
        <li>Vue Router 5 - 官方路由管理器</li>
        <li>Element Plus - Vue 3 组件库</li>
        <li>Vite - 下一代前端构建工具</li>
      </ul>
      
      <h2>未来规划</h2>
      <p>我计划在未来添加以下功能：</p>
      <ul>
        <li>文章评论系统</li>
        <li>标签云功能</li>
        <li>文章归档</li>
        <li>RSS 订阅</li>
        <li>搜索功能优化</li>
      </ul>
      
      <p>感谢您的访问，希望我的分享对您有所帮助！</p>
    `,
    cover: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=400&fit=crop'
    ],
    date: '2024-03-21',
    category: '博客介绍',
    tags: ['Vue3', '博客', '技术']
  }
]

export const categories = ['全部', '博客介绍', '前端开发', '后端开发', '技术分享', '项目经验']

export const tags = ['Vue3', '博客', '技术', '前端', '后端', 'JavaScript', 'TypeScript']
export const getAboutInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '开发者小鼠',
        title: '苦逼初二学生兼前端开发者',
        avatar: 'https://cdn4.winhlb.com/2026/03/21/69bea1155c14f.jpg',
        bio: '热爱技术（存疑）。',
        techStack: [
          { 
            name: 'Vue.js', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 19L12 2L22 19H16.5L12 10.5L7.5 19H2Z" fill="#42b883"/>
              <path d="M7.5 19L12 10.5L16.5 19H7.5Z" fill="#35495e"/>
            </svg>`
          },
          { 
            name: 'React', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" stroke-linecap="round" transform="rotate(0 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" stroke-linecap="round" transform="rotate(60 12 12)"/>
              <ellipse cx="12" cy="12" rx="10" ry="4" stroke="#61dafb" stroke-width="1.5" stroke-linecap="round" transform="rotate(120 12 12)"/>
              <circle cx="12" cy="12" r="2" fill="#61dafb"/>
            </svg>`
          },
          { 
            name: 'TypeScript', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178c6"/>
              <path d="M8 16V8H10V16H8Z" fill="#ffffff"/>
              <path d="M12 16V8H14L16 12L18 8H20V16H18V11L16 14L14 11V16H12Z" fill="#ffffff"/>
            </svg>`
          },
          { 
            name: 'Node.js', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#339933"/>
              <path d="M12 4L6 8V16L12 20L18 16V8L12 4Z" fill="#ffffff" fill-opacity="0.2"/>
              <path d="M12 6L8 9V15L12 18L16 15V9L12 6Z" fill="#ffffff" fill-opacity="0.3"/>
              <path d="M12 8L10 10V14L12 16L14 14V10L12 8Z" fill="#ffffff" fill-opacity="0.5"/>
              <path d="M12 10L11 11V13L12 14L13 13V11L12 10Z" fill="#ffffff"/>
            </svg>`
          },
          { 
            name: 'Element Plus', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#409eff"/>
              <circle cx="12" cy="12" r="6" fill="#ffffff" fill-opacity="0.2"/>
              <circle cx="12" cy="12" r="4" fill="#ffffff" fill-opacity="0.3"/>
              <circle cx="12" cy="12" r="2" fill="#ffffff" fill-opacity="0.5"/>
              <circle cx="12" cy="12" r="1" fill="#ffffff"/>
            </svg>`
          },
          { 
            name: 'Vite', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 20H20L12 2Z" fill="#646cff"/>
              <path d="M12 4L6 18H18L12 4Z" fill="#ffffff" fill-opacity="0.2"/>
              <path d="M12 6L8 16H16L12 6Z" fill="#ffffff" fill-opacity="0.3"/>
              <path d="M12 8L10 14H14L12 8Z" fill="#ffffff" fill-opacity="0.5"/>
              <path d="M12 10L11 12H13L12 10Z" fill="#ffffff"/>
            </svg>`
          },
          { 
            name: 'Git', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="#f05032"/>
              <circle cx="8" cy="8" r="2" fill="#ffffff" fill-opacity="0.4"/>
              <circle cx="16" cy="16" r="2" fill="#ffffff" fill-opacity="0.4"/>
              <circle cx="16" cy="8" r="2" fill="#ffffff" fill-opacity="0.4"/>
              <circle cx="8" cy="8" r="1" fill="#ffffff"/>
              <circle cx="16" cy="16" r="1" fill="#ffffff"/>
              <circle cx="16" cy="8" r="1" fill="#ffffff"/>
              <path d="M8 10V16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M16 10V14" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M8 16H16" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"/>
            </svg>`
          },
          { 
            name: 'MySQL', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="12" cy="18" rx="8" ry="3" fill="#4479a1"/>
              <ellipse cx="12" cy="16" rx="7" ry="2.5" fill="#ffffff" fill-opacity="0.15"/>
              <ellipse cx="12" cy="14" rx="6" ry="2" fill="#ffffff" fill-opacity="0.2"/>
              <ellipse cx="12" cy="12" rx="5" ry="1.5" fill="#ffffff" fill-opacity="0.25"/>
              <ellipse cx="12" cy="10" rx="4" ry="1" fill="#ffffff" fill-opacity="0.3"/>
              <ellipse cx="12" cy="8" rx="3" ry="0.8" fill="#ffffff" fill-opacity="0.4"/>
              <ellipse cx="12" cy="6" rx="2" ry="0.5" fill="#ffffff" fill-opacity="0.5"/>
              <ellipse cx="12" cy="4" rx="1" ry="0.3" fill="#ffffff"/>
            </svg>`
          }
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
          { 
            name: '阅读', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="4" width="16" height="16" rx="2" fill="#3b82f6" fill-opacity="0.1"/>
              <rect x="5" y="5" width="14" height="14" rx="1.5" fill="#3b82f6" fill-opacity="0.2"/>
              <rect x="6" y="7" width="12" height="1" rx="0.5" fill="#3b82f6" fill-opacity="0.3"/>
              <rect x="6" y="10" width="10" height="1" rx="0.5" fill="#3b82f6" fill-opacity="0.3"/>
              <rect x="6" y="13" width="11" height="1" rx="0.5" fill="#3b82f6" fill-opacity="0.3"/>
              <rect x="6" y="16" width="9" height="1" rx="0.5" fill="#3b82f6" fill-opacity="0.3"/>
              <path d="M12 5V19" stroke="#3b82f6" stroke-width="0.5" stroke-linecap="round"/>
            </svg>`,
            description: '技术书籍、小说、散文' 
          },
          { 
            name: '摄影', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="5" width="18" height="14" rx="2" fill="#ec4899" fill-opacity="0.1"/>
              <rect x="4" y="6" width="16" height="12" rx="1.5" fill="#ec4899" fill-opacity="0.2"/>
              <circle cx="12" cy="12" r="4" fill="#ec4899" fill-opacity="0.3"/>
              <circle cx="12" cy="12" r="2.5" fill="#ec4899" fill-opacity="0.4"/>
              <circle cx="12" cy="12" r="1" fill="#ec4899"/>
              <rect x="8" y="19" width="8" height="1" rx="0.5" fill="#ec4899" fill-opacity="0.3"/>
              <circle cx="18" cy="8" r="1" fill="#ec4899" fill-opacity="0.5"/>
            </svg>`,
            description: '风景摄影、人像摄影' 
          },
          { 
            name: '运动', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8" fill="#10b981" fill-opacity="0.1"/>
              <circle cx="12" cy="12" r="6" fill="#10b981" fill-opacity="0.2"/>
              <circle cx="12" cy="12" r="4" fill="#10b981" fill-opacity="0.3"/>
              <path d="M12 6V18" stroke="#10b981" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M6 12H18" stroke="#10b981" stroke-width="1.5" stroke-linecap="round"/>
              <circle cx="12" cy="12" r="1.5" fill="#10b981"/>
              <path d="M7 7L17 17" stroke="#10b981" stroke-width="1" stroke-linecap="round"/>
              <path d="M17 7L7 17" stroke="#10b981" stroke-width="1" stroke-linecap="round"/>
            </svg>`,
            description: '跑步、羽毛球、游泳' 
          },
          { 
            name: '音乐', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="8" cy="16" r="3" fill="#f59e0b" fill-opacity="0.2"/>
              <circle cx="8" cy="16" r="2" fill="#f59e0b" fill-opacity="0.3"/>
              <circle cx="8" cy="16" r="1" fill="#f59e0b"/>
              <circle cx="16" cy="14" r="3" fill="#f59e0b" fill-opacity="0.2"/>
              <circle cx="16" cy="14" r="2" fill="#f59e0b" fill-opacity="0.3"/>
              <circle cx="16" cy="14" r="1" fill="#f59e0b"/>
              <path d="M10 16V6L18 4V14" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="10" cy="6" r="1" fill="#f59e0b"/>
              <circle cx="18" cy="4" r="1" fill="#f59e0b"/>
              <path d="M11 8L17 6" stroke="#f59e0b" stroke-width="0.5" stroke-linecap="round"/>
              <path d="M11 11L17 9" stroke="#f59e0b" stroke-width="0.5" stroke-linecap="round"/>
            </svg>`,
            description: '吉他、钢琴' 
          },
          { 
            name: '旅行', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 8V20H20V8L12 2Z" fill="#06b6d4" fill-opacity="0.1"/>
              <path d="M12 3L5 8.5V19H19V8.5L12 3Z" fill="#06b6d4" fill-opacity="0.2"/>
              <rect x="10" y="11" width="4" height="6" rx="0.5" fill="#06b6d4" fill-opacity="0.3"/>
              <rect x="11" y="12" width="2" height="4" rx="0.5" fill="#06b6d4" fill-opacity="0.5"/>
              <rect x="11" y="13" width="2" height="2" rx="0.5" fill="#06b6d4"/>
              <path d="M12 3V8" stroke="#06b6d4" stroke-width="1" stroke-linecap="round"/>
              <path d="M8 8H16" stroke="#06b6d4" stroke-width="1" stroke-linecap="round"/>
            </svg>`,
            description: '探索不同的城市和文化' 
          }
        ]
      });
    }, 300);
  });
};
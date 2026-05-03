export const getAboutInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: '开发者小k',
        title: '苦逼初二学生兼前端开发者',
        avatar: 'https://img.cdn1.vip/i/69f6e45732a2b_1777787991.webp',
        bio: '热爱技术（存疑）。',
        techStack: [
          { 
            name: 'javascript', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#f7df1e"/>
              <text x="12" y="17" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#000000" text-anchor="middle">JS</text>
              <circle cx="6" cy="6" r="1" fill="#000000" fill-opacity="0.3"/>
              <circle cx="18" cy="6" r="1" fill="#000000" fill-opacity="0.3"/>
              <circle cx="6" cy="18" r="1" fill="#000000" fill-opacity="0.3"/>
              <circle cx="18" cy="18" r="1" fill="#000000" fill-opacity="0.3"/>
            </svg>`
          },
          { 
            name: 'VUE3', 
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
            name: 'Typescript', 
            icon: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="2" fill="#3178c6"/>
              <text x="12" y="16" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">TS</text>
              <path d="M6 6H18" stroke="#ffffff" stroke-width="0.5" stroke-linecap="round" stroke-opacity="0.3"/>
              <path d="M6 18H18" stroke="#ffffff" stroke-width="0.5" stroke-linecap="round" stroke-opacity="0.3"/>
              <circle cx="6" cy="6" r="0.8" fill="#ffffff" fill-opacity="0.4"/>
              <circle cx="18" cy="6" r="0.8" fill="#ffffff" fill-opacity="0.4"/>
              <circle cx="6" cy="18" r="0.8" fill="#ffffff" fill-opacity="0.4"/>
              <circle cx="18" cy="18" r="0.8" fill="#ffffff" fill-opacity="0.4"/>
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
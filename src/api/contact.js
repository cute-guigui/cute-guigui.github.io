export const getContactInfo = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        email: 'moon18777970860@126.com',
        qq: '2694155535',
        qqGroup: '滚木',
        location: '中国 · 广西',
        social: {
          github: 'https://github.com/cute-guigui?tab=repositories',
          bilibili: 'https://space.bilibili.com/2011450783?spm_id_from=333.1007.0.0',
          csdn: 'https://csdn.net'
        }
      })
    }, 300)
  })
}
import { defineClientAppEnhance } from '@vuepress/client'

export default defineClientAppEnhance(({ router }) => {
  router.beforeEach((to, from, next) => {
    if (to.meta.redirect && typeof to.meta.redirect === 'string') {
      next({ path: to.meta.redirect });
    } else {
      next();
    }
  });
});
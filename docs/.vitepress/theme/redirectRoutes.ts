import { Router } from 'vitepress';

export const redirectRoutes = [
  { from: '/guide/host-workflow.html', to: '/workflow/sharing-workflow.html#host-workflow' },
  { from: '/guide/element-selector.html', to: '/workflow/element-selector.html' },
  { from: '/guide/packages.html', to: '/reference/packages.html' },
  { from: '/guide/storage.html', to: '/reference/storage.html' },
  { from: '/guide/workflow-errors.html', to: '/reference/workflow-common-errors.html' },
  { from: '/api-reference/element-selector.html', to: '/workflow/element-selector.html' },
  { from: '/api-reference/global-data.html', to: '/workflow/global-data.html' },
  { from: '/api-reference/table-or-variables.html', to: '/workflow/table-or-variable.html' },
  { from: '/api-reference/table.html', to: '/workflow/table.html' },
  { from: '/api-reference/variables.html', to: '/workflow/variables.html' },
];

export function watchRedirectRoutes(path: string, router: Router) {
  const redirectPath = redirectRoutes.find((item) => path.includes(item.from));
  if (!redirectPath) return;

  router.go(redirectPath.to);
}
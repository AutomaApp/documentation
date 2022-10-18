import DefaultTheme from 'vitepress/theme';
import vRemixicon, { icons } from '../lib/vRemixicon';
import './custom.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(vRemixicon, icons);
  }
}

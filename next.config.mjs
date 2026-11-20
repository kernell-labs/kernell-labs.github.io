// Static export so GitHub Pages can serve it. basePath only on CI, so `npm run dev` stays at /.
const repo = 'kernel-labs';

export default {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? `/${repo}` : '',
};

// Giscus comments configuration
// Steps to activate:
//   1. Enable GitHub Discussions on vsetchinfc/vladsetchin.me (repo Settings → Discussions)
//   2. Create a category called "Blog Comments" (Announcements type works well)
//   3. Go to https://giscus.app, configure for this repo, copy the repoId and categoryId below
//   4. Commit the updated values — Giscus will start working automatically

export const GISCUS_CONFIG = {
  repo: 'vsetchinfc/vladsetchin.me' as const,
  repoId: 'TODO_REPLACE_WITH_REPO_ID', // get from https://giscus.app
  category: 'Blog Comments',
  categoryId: 'TODO_REPLACE_WITH_CATEGORY_ID', // get from https://giscus.app
  mapping: 'pathname' as const,
  reactionsEnabled: '1' as const,
  emitMetadata: '0' as const,
  inputPosition: 'bottom' as const,
  lang: 'en' as const,
};

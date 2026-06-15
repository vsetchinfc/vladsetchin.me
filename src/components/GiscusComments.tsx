import { useEffect, useRef } from 'react';
import { GISCUS_CONFIG } from '../data/giscus';

interface GiscusCommentsProps {
  /** Current site theme — pass 'dark' or 'light' */
  theme?: 'dark' | 'light';
}

export default function GiscusComments({ theme = 'dark' }: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isConfigured =
    !GISCUS_CONFIG.repoId.includes('TODO_REPLACE') && !GISCUS_CONFIG.categoryId.includes('TODO_REPLACE');

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isConfigured) return;

    // Remove existing script to avoid duplicates on re-renders
    const existing = container.querySelector('script[src*="giscus"]');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', GISCUS_CONFIG.repo);
    script.setAttribute('data-repo-id', GISCUS_CONFIG.repoId);
    script.setAttribute('data-category', GISCUS_CONFIG.category);
    script.setAttribute('data-category-id', GISCUS_CONFIG.categoryId);
    script.setAttribute('data-mapping', GISCUS_CONFIG.mapping);
    script.setAttribute('data-reactions-enabled', GISCUS_CONFIG.reactionsEnabled);
    script.setAttribute('data-emit-metadata', GISCUS_CONFIG.emitMetadata);
    script.setAttribute('data-input-position', GISCUS_CONFIG.inputPosition);
    script.setAttribute('data-theme', theme === 'dark' ? 'dark_dimmed' : 'light');
    script.setAttribute('data-lang', GISCUS_CONFIG.lang);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    container.appendChild(script);
  }, [isConfigured, theme]);

  // Sync theme when it changes
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>('.giscus-frame');
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      { giscus: { setConfig: { theme: theme === 'dark' ? 'dark_dimmed' : 'light' } } },
      'https://giscus.app',
    );
  }, [theme]);

  return (
    <section
      aria-label="Comments"
      style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--color-border)' }}
    >
      <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: '1.5rem', color: 'var(--color-heading)' }}>
        Comments
      </h2>
      {!isConfigured && (
        <p style={{ color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
          Comments are disabled until Giscus repoId/categoryId are configured.
        </p>
      )}
      <div ref={containerRef} />
    </section>
  );
}

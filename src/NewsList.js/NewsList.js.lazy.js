import React, { lazy, Suspense } from 'react';

const LazyNewsListJs = lazy(() => import('./NewsListJs'));

const NewsListJs = props => (
  <Suspense fallback={null}>
    <LazyNewsListJs {...props} />
  </Suspense>
);

export default NewsListJs;

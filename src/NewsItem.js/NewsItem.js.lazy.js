import React, { lazy, Suspense } from 'react';

const LazyNewsItemJs = lazy(() => import('./NewsItemJs'));

const NewsItemJs = props => (
  <Suspense fallback={null}>
    <LazyNewsItemJs {...props} />
  </Suspense>
);

export default NewsItemJs;

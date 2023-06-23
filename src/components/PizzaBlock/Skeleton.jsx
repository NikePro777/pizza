import React from 'react';

import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#ffffff"
    foregroundColor="#f0f0f0">
    <circle cx="126" cy="120" r="111" />
    <rect x="7" y="268" rx="0" ry="0" width="242" height="23" />
    <rect x="10" y="315" rx="11" ry="11" width="241" height="65" />
    <rect x="7" y="430" rx="0" ry="0" width="85" height="26" />
    <rect x="120" y="430" rx="0" ry="0" width="128" height="53" />
  </ContentLoader>
);

export default Skeleton;

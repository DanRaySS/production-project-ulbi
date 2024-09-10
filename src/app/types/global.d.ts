declare module '*.module.css';
declare module '*.module.scss';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';

declare module '*.svg' {
  import React from 'react';

  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

// eslint-disable-next-line no-unused-vars
declare const __IS_DEV__: boolean;

import React, { useState } from 'react';

import { ImageProps } from '@/types';

const Image: React.FC<ImageProps> = ({ src, alt, className, style, renderLoading, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const typedRest: Record<string, any> = rest;
  const maybeDataTestId = typedRest['data-testid'] as string | undefined;
  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  const renderImage = () => {
    if (error) {
      return <div data-testid="image-load-error">Load error</div>;
    }
    if (loading && renderLoading) {
      return renderLoading?.();
    }

    return (
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, display: loading || error ? 'none' : 'block' }}
        onLoad={handleLoad}
        onError={handleError}
        data-testid={maybeDataTestId}
      />
    );
  };

  return renderImage();
};

export default Image;

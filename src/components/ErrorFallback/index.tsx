import { ZodError } from 'zod';

import type { ErrorFallbackProps } from './types';

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  if (error instanceof ZodError) {
    return <div>Schema error</div>;
  }

  if (error instanceof TypeError) {
    return <div>TypeError</div>;
  }

  return (
    <div>
      <h1>bb</h1>
      {JSON.stringify(error)}
    </div>
  );
};

export default ErrorFallback;

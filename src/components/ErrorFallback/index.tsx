import { ZodError } from 'zod';

import type { ErrorFallbackProps } from './types';

const ErrorFallback = ({ error }: ErrorFallbackProps) => {
  console.log(error);

  if (error instanceof ZodError) {
    return <div>Schema error</div>;
  }

  return (
    <div>
      <h1>bb</h1>
      {JSON.stringify(error)}
    </div>
  );
};

export default ErrorFallback;

import React from "react";

export default function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Something went wrong!</h1>
      <pre>{error.message}</pre>
    </div>
  );
}

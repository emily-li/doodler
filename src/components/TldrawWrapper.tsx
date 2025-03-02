import { Suspense, lazy } from "react";

// Lazy load the Tldraw component
const TldrawComponent = lazy(() =>
  import("tldraw").then((module) => ({
    default: module.Tldraw,
  }))
);

interface TldrawWrapperProps {
  className?: string;
}

export default function TldrawWrapper(props: TldrawWrapperProps) {
  return (
    <Suspense>
      <TldrawComponent persistenceKey="tldraw_store" {...props} />
    </Suspense>
  );
}

import { Suspense, lazy } from "react";
import "tldraw/tldraw.css";
import {
  DrawShapeTool,
  Editor
} from "tldraw";

const onMount = (editor: Editor) => {
    editor.setCurrentTool(DrawShapeTool.id);
};

const LazyTldraw = lazy(() =>
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
      <LazyTldraw
        persistenceKey="tldraw_store"
        onMount={onMount}
        {...props}
      />
    </Suspense>
  );
}

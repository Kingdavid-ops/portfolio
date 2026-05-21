"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CodeWorkspaceScene = dynamic(
  () =>
    import("@/components/three/code-workspace-scene").then(
      (m) => m.CodeWorkspaceScene,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[320px] items-center justify-center lg:min-h-[480px]">
        <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    ),
  },
);

export function HeroSceneWrapper() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full min-h-[320px] items-center justify-center lg:min-h-[480px]">
          <div className="h-12 w-12 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      }
    >
      <CodeWorkspaceScene />
    </Suspense>
  );
}

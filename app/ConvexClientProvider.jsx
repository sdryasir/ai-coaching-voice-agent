"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import AuthProvider from "./AuthProvider";
import { Suspense } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);

export function ConvexClientProvider({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConvexProvider client={convex}>
        <AuthProvider>{children}</AuthProvider>
      </ConvexProvider>
    </Suspense>
  );
}

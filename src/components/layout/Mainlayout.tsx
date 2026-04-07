import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <main className="min-h-screen bg-bg text-text">
      <div className="mx-auto max-w-md px-4 pb-24 pt-4">
        {children}
      </div>
    </main>
  );
}

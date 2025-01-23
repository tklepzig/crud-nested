import { PropsWithChildren, ReactNode } from "react";

export default function Layout({
  children,
  sidePanel,
}: PropsWithChildren<{ sidePanel: ReactNode }>) {
  return (
    <div className="grid">
      <div className="bg-red-900">{sidePanel}</div>
      {children}
    </div>
  );
}

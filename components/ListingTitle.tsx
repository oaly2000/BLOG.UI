import { ComponentChildren } from "preact";

export const ListingTitle = ({ children }: { children: ComponentChildren }) => (
  <h2 className="text-2xl font-semibold text-neutral-500" style={{ lineHeight: "2.2em" }}>{children}</h2>
);

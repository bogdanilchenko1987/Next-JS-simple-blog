import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Simple Blog",
  description: "My Next JS blog page",
};

export default function blogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

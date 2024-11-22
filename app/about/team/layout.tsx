import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team | About | Simple Blog",
  description: "My Next JS blog team page",
};

export default function blogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

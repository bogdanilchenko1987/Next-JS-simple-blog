import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacts | About | Simple Blog",
  description: "My Next JS blog contacts page",
};

export default function blogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

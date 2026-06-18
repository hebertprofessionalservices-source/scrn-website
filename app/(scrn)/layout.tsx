import { SCRNNav } from "@/components/scrn/Nav";
import { SCRNFooter } from "@/components/scrn/Footer";

export default function SCRNLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="scrn-page min-h-screen flex flex-col">
      <SCRNNav />
      <main className="flex-1">{children}</main>
      <SCRNFooter />
    </div>
  );
}

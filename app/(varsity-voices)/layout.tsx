import { VVNav } from "@/components/vv/VVNav";
import { VVFooter } from "@/components/vv/VVFooter";

export default function VarsityVoicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="vv-page min-h-screen flex flex-col">
      <VVNav />
      <main className="flex-1">{children}</main>
      <VVFooter />
    </div>
  );
}

import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans selection:bg-brand/30">
      <div className="noise-overlay" />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

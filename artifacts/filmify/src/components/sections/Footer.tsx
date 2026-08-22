import xaflowLogo from "@/assets/xaflow-logo.jpeg";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <img src={xaflowLogo} alt="XaFlow Studios logo" className="w-8 h-8 rounded-md object-cover" />
          <span className="text-xl font-bold font-mono tracking-tighter">XaFlow<span className="text-brand">.</span></span>
        </div>
        
        <div className="flex gap-6 text-sm text-white/40">
          <a href="mailto:xaflowstudios@gmail.com" className="hover:text-brand transition-colors">xaflowstudios@gmail.com</a>
          <a href="https://www.instagram.com/xaflowstudios/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
        </div>
        
        <div className="text-sm text-white/40">
          &copy; {new Date().getFullYear()} XaFlow Studios. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
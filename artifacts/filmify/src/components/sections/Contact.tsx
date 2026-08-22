import { FadeIn } from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const name = String(formData.get("name") ?? "").trim();
    const projectType = String(formData.get("projectType") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const whatsappMessage = [
      "Hello XaFlow Studios,",
      "",
      `Name: ${name}`,
      `Website type: ${projectType}`,
      `Message: ${message}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/923394567212?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-4xl">
        <FadeIn>
          <div className="bg-white/[0.02] border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-brand" />
            
            <div className="md:w-2/3 mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's build something <span className="text-brand">exceptional.</span></h2>
              <p className="text-white/60">Tell us about your project, timeline, and goals. We usually respond within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="contact-name" className="text-sm font-medium text-white/70">Name</label>
                  <input id="contact-name" name="name" required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="contact-email" className="text-sm font-medium text-white/70">Email</label>
                  <input id="contact-email" name="email" required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="jane@company.com" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="contact-project-type" className="text-sm font-medium text-white/70">Project Type</label>
                <select id="contact-project-type" name="projectType" className="w-full bg-[#111] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all appearance-none">
                  <option value="business-website">Business Website</option>
                  <option value="web-app">Web Application</option>
                  <option value="ecommerce">E-Commerce Website</option>
                  <option value="other">Other / Consultation</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-message" className="text-sm font-medium text-white/70">Message</label>
                <textarea id="contact-message" name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none" placeholder="Briefly describe what you're looking to build..." />
              </div>

              <Button variant="brand" size="lg" type="submit" className="w-full md:w-auto px-12">
                Send via WhatsApp
              </Button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
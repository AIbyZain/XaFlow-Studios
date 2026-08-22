import { FadeIn } from "@/components/animations/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "XaFlow Studios understood our business from day one and turned our vision into a website that feels truly premium. The whole process was smooth, thoughtful, and professional.",
    author: "Ayesha Malik",
    role: "Founder, Emberr Jewel"
  },
  {
    quote: "The attention to detail was exceptional. Our new website gives customers confidence in our products and has made it much easier for people to discover our brand online.",
    author: "Usman Raza",
    role: "Director, Roxter Moto"
  },
  {
    quote: "XaFlow delivered exactly what we needed: a fast, modern website that represents our work properly. They were responsive throughout and made every part of the process easy.",
    author: "Hamza Siddiqui",
    role: "Founder, RACE ON"
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white/[0.02]" aria-labelledby="testimonials-heading">
      <div className="container mx-auto px-6">
        <h2 id="testimonials-heading" className="sr-only">What clients say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div
                className="testimonial-float p-10 rounded-2xl border border-white/5 bg-background relative group hover:border-white/10 transition-colors"
                style={{ animationDelay: `${idx * 0.8}s` }}
              >
                <Quote className="absolute top-6 right-6 text-white/5" size={64} />
                <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 relative z-10 font-medium">"{test.quote}"</p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-brand p-0.5">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center text-sm font-bold">
                      {test.author.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{test.author}</div>
                    <div className="text-sm text-white/50">{test.role}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
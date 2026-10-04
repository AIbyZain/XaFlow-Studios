import { FadeIn } from "@/components/animations/FadeIn";
import { ArrowUpRight } from "lucide-react";
import raceOnImage from "@/assets/race-on.png";
import roxterMotoImage from "@/assets/roxter-moto.png";
import emberrJewelImage from "@/assets/emberr-jewel.png";
import leovorImage from "@/assets/leovor.png";
import gatehouseImage from "@/assets/gatehouse-hero.png";
import leveorSuiteImage from "@/assets/leveor-suite-hero.png";
import noctisShoesImage from "@/assets/noctis-shoes-hero.png";

const projects = [
  {
    title: "RACE ON",
    category: "Motorcycle Apparel",
    metric: "Live project",
    desc: "A bold e-commerce experience for made-to-measure motorcycle racing gear.",
    url: "https://raceongear.com/",
    image: raceOnImage,
  },
  {
    title: "Roxter Moto",
    category: "Motorcycle Apparel",
    metric: "Live project",
    desc: "A premium digital presence for a motorcycle apparel manufacturer and exporter.",
    url: "https://roxtermoto.com/",
    image: roxterMotoImage,
  },
  {
    title: "Emberr Jewel",
    category: "Jewellery E-Commerce",
    metric: "Live project",
    desc: "An elegant jewellery storefront where refined visual design meets effortless browsing.",
    url: "https://emberr.netlify.app/",
    image: emberrJewelImage,
  },
  {
    title: "Leovor",
    category: "Fashion E-Commerce",
    metric: "Live project",
    desc: "A clean, editorial storefront for a modern fashion brand with a seamless shopping experience.",
    url: "https://leovor.com/",
    image: leovorImage,
  },
  {
    title: "Gatehouse Properties",
    category: "Real Estate",
    metric: "Live project",
    desc: "A refined property website showcasing homes and real estate services.",
    url: "https://gatehouse-properties.vercel.app/",
    image: gatehouseImage,
  },
  {
    title: "Leveor Suite",
    category: "Custom Clothing",
    metric: "Live project",
    desc: "An elegant tailoring experience highlighting bespoke clothing and personal fittings.",
    url: "https://leveor-suite.vercel.app/",
    image: leveorSuiteImage,
  },
  {
    title: "Noctis Shoes",
    category: "Footwear",
    metric: "Live project",
    desc: "A premium footwear storefront introducing an engineered collection of running shoes.",
    url: "https://noctis-shoes.vercel.app/",
    image: noctisShoesImage,
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="py-24">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Recent <span className="text-brand">Work</span></h2>
          <p className="text-white/60 text-lg mb-16 max-w-2xl">We don't just build sites; we build business assets. Here are a few examples of how we've helped companies scale.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => {
            const card = (
              <div className="group relative rounded-2xl overflow-hidden bg-white/[0.02] border border-white/5 h-[400px] flex flex-col justify-end p-8 hover:border-brand/30 transition-all cursor-pointer">
                <img
                  src={project.image}
                  alt={`${project.title} website preview`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/10" />
                <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                  <ArrowUpRight size={20} className="text-white" />
                </div>

                <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-mono text-brand mb-3">{project.category}</div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.desc}</p>
                  <div className="inline-flex px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white/90 backdrop-blur-md">
                    {project.metric}
                  </div>
                </div>
              </div>
            );

            return (
              <FadeIn key={idx} delay={idx * 0.1}>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

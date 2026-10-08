import Header from "@/components/header";
import Hero from "@/components/hero";
import TrustSection from "@/components/trust-section";
import HowItWorks from "@/components/how-it-works";
import Footer from "@/components/footer";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-navy">
      <Header />
      <Hero />
      <TrustSection />
      
      {/* 4 User Pathways */}
      <section className="bg-navy py-20" id="opportunities">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Opportunity First</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">
              One platform. More ways to move forward.
            </h2>
            <p className="text-sm text-slate-300">
              Connecting young talent and enterprises across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Students", action: "Discover opportunities", href: "/opportunities", desc: "Find programs, campus tasks and activities designed to help you grow." },
              { role: "Creators & Artists", action: "Showcase talent", href: "/artists", desc: "Build visibility, participate in campaigns and access monetization channels." },
              { role: "Young People", action: "Earn & participate", href: "/opportunities", desc: "Complete verified activities, learn digital skills and unlock rewards." },
              { role: "Brands & SMEs", action: "Reach emerging talent", href: "/partners", desc: "Engage youth communities, launch campaigns and recruit digital skills." },
            ].map((p) => (
              <Link
                key={p.role}
                href={p.href}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-navy-card p-6 hover:border-gold hover:-translate-y-1 transition-all"
              >
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold mb-1">{p.role}</h3>
                  <div className="text-xs font-semibold text-slate-200 mb-2">{p.action}</div>
                  <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-4 flex items-center text-xs font-bold text-gold group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorks />

      {/* Campus Ambassador Program Callout */}
      <section className="bg-navy-deep py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Rewaiq CAP</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              Become a Rewaiq Campus Ambassador
            </h2>
            <p className="text-sm text-slate-300">
              Represent Rewaiq on your tertiary campus, connect students to verified opportunities, and develop practical leadership experience.
            </p>
          </div>
          <Link
            href="/campus-ambassadors"
            className="inline-flex rounded-xl bg-gold px-8 py-3.5 text-sm font-bold text-navy-darker hover:bg-gold-light transition-all shrink-0"
          >
            Become an Ambassador
          </Link>
        </div>
      </section>

      {/* Hub Callout */}
      <section className="bg-navy py-20 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12 rounded-3xl border border-white/10 bg-navy-card p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold">Aba Innovation Hub</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">
              From the digital world to the real world.
            </h2>
            <p className="text-sm text-slate-300 max-w-xl">
              The Rewaiq Innovation Hub in Aba gives young people a physical space for digital skills training, software development, dedicated workspace, and community mentorship.
            </p>
          </div>
          <Link
            href="/hub"
            className="inline-flex rounded-xl border border-gold bg-gold/10 px-6 py-3.5 text-sm font-bold text-gold-light hover:bg-gold hover:text-navy-darker transition-all shrink-0"
          >
            Visit the Hub
          </Link>
        </div>
      </section>

      {/* Final Conversion CTA */}
      <section className="bg-gradient-to-b from-navy to-navy-darker py-24 text-center border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Your next opportunity could start here.
          </h2>
          <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto">
            Discover what you can do with Rewaiq.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.rewaiq.com.ng"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-3.5 text-sm font-bold text-navy-darker hover:bg-gold-light"
            >
              <span>Join Rewaiq</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/opportunities"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Explore Opportunities
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

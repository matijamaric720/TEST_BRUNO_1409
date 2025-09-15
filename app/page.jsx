import dynamic from 'next/dynamic';
import { unstable_noStore as noStore } from 'next/cache';

// Static imports (safe for SSR)
import Footer1 from "@/components/footers/Footer1";
import Header9 from "@/components/headers/Header9";
import MobailHeader1 from "@/components/headers/MobailHeader1";

// Dynamic imports for components that might use browser APIs
const Hero = dynamic(() => import("@/components/homes/home-10/Hero"), {
  ssr: false,
  loading: () => <div className="min-h-screen flex items-center justify-center">Loading...</div>
});

const Features = dynamic(() => import("@/components/homes/home-10/Features"), { ssr: false });
const Feet = dynamic(() => import("@/components/homes/home-10/Feet"), { ssr: false });
const Process = dynamic(() => import("@/components/homes/home-10/Process"), { ssr: false });
const Services = dynamic(() => import("@/components/homes/home-10/Services"), { ssr: false });
const Features2 = dynamic(() => import("@/components/homes/home-10/Features2"), { ssr: false });

const GoogleMapsScript = dynamic(() => import("@/components/GoogleMapsScript").then(mod => ({ default: mod.GoogleMapsScript })), { 
  ssr: false 
});

export const metadata = {
  title: "Home 1",
  description: "BONE Travel agencija",
};

// Force dynamic rendering to avoid prerender issues
export const dynamic = 'force-dynamic';

export default function page() {
  // Disable static optimization
  noStore();

  return (
    <>
      <GoogleMapsScript />
      <Header9 /> 
      <MobailHeader1 />
      <main className="main">
        <Hero />
        <Features />
        <Feet />
        <Process />
        <Services />
        <Features2 />
      </main>
      <Footer1 />
    </>
  );
}
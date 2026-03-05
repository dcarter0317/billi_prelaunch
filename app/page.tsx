import Header from "./layout/header";
import Hero from "./layout/hero";
import Feature from "./layout/feature";
import Testimonials from "./layout/testimonials";
import WhatsComing from "./layout/whatsComing";
import Footer from "./layout/footer";

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Feature />
        <Testimonials />
        <WhatsComing />
        <Footer />
      </main>
    </>
  );
}

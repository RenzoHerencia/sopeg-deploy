import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Welcome from "@/components/Welcome";
import Features from "@/components/Features";
import CongressBanner from "@/components/CongressBanner";
import Membership from "@/components/Membership";
import Videos from "@/components/Videos";
import Board from "@/components/Board";
import Footer from "@/components/Footer";
import FadeInObserver from "@/components/FadeInObserver";

export default function Home() {
  return (
    <>
      {/* Mounts the scroll-reveal observer (client component) */}
      <FadeInObserver />

      <TopBar />
      <Header />

      <main>
        <Hero />
        <StatsBar />
        <Welcome />
        <Features />
        <CongressBanner />
        <Membership />
        <Videos />
        <Board />
      </main>

      <Footer />
    </>
  );
}

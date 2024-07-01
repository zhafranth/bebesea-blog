import Footer from "@/components/organism/Home/Footer";
import Hero from "@/components/organism/Home/Hero";
import Latest from "@/components/organism/Home/Latest";
import Podcast from "@/components/organism/Home/Podcast/Podcast";
import Publications from "@/components/organism/Home/Publications";
import YoutubeVideo from "@/components/organism/Home/YoutubeVideo";
import Layout from "@/components/organism/Layout/Layout";

export default function Home() {
  return (
    <main>
      <Hero />
      <Latest />
      <Publications />
      <YoutubeVideo />
      <Podcast />
    </main>
  );
}

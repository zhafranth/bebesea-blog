import Footer from "@/components/organism/Home/Footer";
import Hero from "@/components/organism/Home/Hero";
import { InstagramFeed } from "@/components/organism/Home/InstagramFeed";
import Latest from "@/components/organism/Home/Latest";
import Podcast from "@/components/organism/Home/Podcast/Podcast";
import Publications from "@/components/organism/Home/Publications";
import YoutubeVideo from "@/components/organism/Home/YoutubeVideo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Latest />
      <Publications />
      <YoutubeVideo />
      <InstagramFeed />
      <Podcast />
    </main>
  );
}

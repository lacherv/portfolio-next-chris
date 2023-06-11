import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <AboutMe />
      </div>
    </main>
  );
}

import MainHero from "@/components/main/mainHero";
import MainBgImage from "@/components/main/mainBgImage";
import MainDescription from "@/components/main/mainDescription";

const Home = () => {
  return (
    <main className="flex flex-col items-center overflow-x-hidden">
      <MainHero />
      <MainDescription />
      <MainBgImage />
    </main>
  );
};

export default Home;

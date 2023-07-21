import Image from "next/image";

const MainBgImage = () => {
  return (
    <div className="max-[580px]:overflow-x-hidden relative flex justify-center w-screen bg-light">
      <Image src={"/mainpage-bg.png"} alt="main-bg" width={1300} height={1513} className="min-h-680 min-w-570" />
    </div>
  );
};

export default MainBgImage;

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex h-72 text-light font-bold bg-dark justify-center mt-auto">
      <div className="max-w-1030 w-1030 mt-14 mx-4 flex justify-between ">
        <div className="flex flex-col text-sm w-32">
          <p className="ml-2 mb-9">Connect with us</p>
          <div className="mb-5">
            <Image src={"/logo-inst.png"} alt="logo-inst" width={21} height={21} className="inline ml-2 mr-4" />
            <Link href={"https://instagram.com/tkach_pro?igshid=MzRlODBiNWFlZA=="}>Instagram</Link>
          </div>
          <div className="mb-5">
            <Image src={"/logo-tele.png"} alt="logo-tele" width={21} height={21} className="inline ml-2 mr-4" />
            <Link href={"https://t.me/tkach_pro"}>Telegram</Link>
          </div>
          <div>
            <Image src={"/logo-gmail.png"} alt="logo-gmail" width={39} height={25} className="inline mr-2" />
            <Link href={"https://mail.google.com/mail/u/1/#inbox"}>Gmail</Link>
          </div>
        </div>
        <div className="flex flex-col text-center mt-6 max-md:hidden">
          <Image src="/logo.png" width={243} height={87} alt="logo" />
          <p className="text-sm">Textile Design Studio</p>
          <p className="text-xs mt-14">
            Vitebsk, Belarus <br></br> since 2020
          </p>
        </div>
        <div className="grid grid-cols-2 grid-rows-x4 gap-10 min-w-130 justify-items-end max-md:gap-6">
          <p className="font-futura text-pink md:hidden col-start-2 col-end-2">TKACH PRO</p>
          <Link href={"/"} className="md:col-start-2 md:col-end-2">
            Tkach Pro
          </Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/pages/catalog"}>Catalog</Link>
          <Link href={"/pages/gallery"}>Gallery</Link>
          <Link href={"/pages/contacts"}>Contacts</Link>
          <Link href={"/pages/platform"} className="md:col-start-2 md:col-end-2">
            Platform
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from "next/image";
import Link from "next/link";

const GalleryAlbum = ({ title, logoUrl, id }) => {
  return (
    <div className="flex flex-col w-414 justify-self-start max-md:w-345 max-md:justify-self-center">
      <Link href={`pages/gallery/${id}`} className="max-md:w-345">
        <Image src={logoUrl} alt={title} width={414} height={418} className="bg-dark max-md:w-345" />
      </Link>
      <h2 className="mt-7 text-xl font-bold text-center">{title}</h2>
    </div>
  );
};

export default GalleryAlbum;

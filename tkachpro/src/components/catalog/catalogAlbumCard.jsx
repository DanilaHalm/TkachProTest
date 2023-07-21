import Image from "next/image";
import Link from "next/link";

const CatalogAlbumCard = ({ sectionId, objectId, logo, title }) => {
  return (
    <Link href={`/pages/catalog/${sectionId}/${objectId}`} key={objectId}>
      <Image src={logo} alt={title} width={337} height={337} className="bg-dark" />
      <h3 className="font-bold text-xl mt-7 text-center">{title}</h3>
    </Link>
  );
};

export default CatalogAlbumCard;

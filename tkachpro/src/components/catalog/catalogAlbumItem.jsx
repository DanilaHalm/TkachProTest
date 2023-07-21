import Image from "next/image";
import Link from "next/link";

const CatalogAlbumItem = ({ url, author }) => {
  return (
    <Link href={url} key={url}>
      <Image src={url} alt={author} width={337} height={337} className="bg-dark" />
      <h3 className="font-bold text-sm mt-4 text-end">{`@${author}`}</h3>
    </Link>
  );
};

export default CatalogAlbumItem;

import Link from "next/link";
import Image from "next/image";

const GalleryAlbumItem = ({ url }) => {
  return (
    <Link href={`${url}`}>
      <Image key={url} src={url} alt="galleryImage" width={358} height={479} />
    </Link>
  );
};

export default GalleryAlbumItem;

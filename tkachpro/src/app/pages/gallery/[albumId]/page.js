import getGalleryAlbum from "@/app/api/getGalleryAlbum";
import getGalleryAlbums from "@/app/api/getGalleryAlbums";
import GalleryAlbumItem from "@/components/gallery/galleryAlbumItem";
import GalleryAlbumHeading from "@/components/gallery/galleryAlbumHeading";

export const generateStaticParams = async () => {
  const galleryAlbums = await getGalleryAlbums();
  return galleryAlbums.map((galleryAlbum) => ({
    albumId: galleryAlbum.objectId,
  }));
};

export const generateMetadata = async ({ params }) => {
  const { albumId } = params;

  const album = await getGalleryAlbum(albumId);
  const { albumTitle } = album;

  return {
    title: albumTitle,
  };
};

const galleryAlbumPage = async ({ params }) => {
  const { albumId } = params;
  const { albumImages, albumTitle } = await getGalleryAlbum(albumId);

  return (
    <main className="px-4 flex flex-col bg-light">
      <GalleryAlbumHeading albumTitle={albumTitle} />
      <div className="grid grid-cols-galleryAlbum justify-center gap-20 mb-21">
        {albumImages.length > 0 &&
          albumImages.map((url) => {
            return <GalleryAlbumItem url={url} />;
          })}
      </div>
    </main>
  );
};
export default galleryAlbumPage;

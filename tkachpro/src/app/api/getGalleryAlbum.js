const getGalleryAlbum = async (id) => {
  const res = await fetch(
    `https://parseapi.back4app.com/classes/gallery/${id}`,
    {
      method: "GET",
      headers: {
        "X-Parse-Application-Id": process.env.APP_ID,
        "X-Parse-REST-API-Key": process.env.REST_API_KEY,
        "content-type": "application/json",
      },
    },
    { next: { revalidate: 60 } }
  );

  const results = await res.json();
  return results;
};

export default getGalleryAlbum;

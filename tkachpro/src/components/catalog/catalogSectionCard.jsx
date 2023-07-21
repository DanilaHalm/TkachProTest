import Image from "next/image";
import Link from "next/link";

const CatalogSectionCard = ({ id, logo, title, description }) => {
  return (
    <div className="flex flex-col justify-between w-354" key={id}>
      <Image src={logo} width={354} height={354} alt="card" className="bg-light" />
      <h3 className="text-lg mt-8 mb-5 font-bold">{title}</h3>
      <p>{description}</p>
      <Link
        href={`/pages/catalog/${id}`}
        className="mt-5 w-48 h-14 bg-pink flex justify-center items-center text-center text-dark font-bold"
      >
        LEARN MORE
      </Link>
    </div>
  );
};
export default CatalogSectionCard;

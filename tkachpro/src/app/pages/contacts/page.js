import Image from "next/image";
import Link from "next/link";
import ContactsHeading from "@/components/contacts/contactsHeading";
import ContactsDescription from "@/components/contacts/contactsDescription";

export const metadata = {
  title: "Contacts",
  description: "TKACH PRO / Contacts",
};

const Contacts = () => {
  return (
    <main className="bg-dark text-light flex flex-col min-h-605 justify-center">
      <div className="flex justify-center mt-22 mb-16 mx-4 max-lg:flex-col max-lg:items-center">
        <ContactsHeading responsiveStyles={"lg:hidden max-lg:mb-12"} />
        <Image src={"/contacts-bg.png"} alt="contacts-bg" width={398} height={454} className="max-lg:mb-12" />
        <ContactsDescription />
      </div>
    </main>
  );
};
export default Contacts;

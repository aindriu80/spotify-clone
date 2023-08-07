"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}
const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  // Add authentication before push
  const onClick = () => {
    router.push(href);
  };
  return (
    <button className="relative flex items-center pr-4 overflow-hidden transition group routed-md gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20">
      <div className="relative min-h-[64px] min-w-[64px]">
        <Image className="object-cover " fill src={image} alt="Image" />
      </div>
      <p className="py-4 py-5 font-medium truncate">{name}</p>
      <div className="">
        <FaPlay />
      </div>
    </button>
  );
};

export default ListItem;

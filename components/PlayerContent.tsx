"use client"

import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { Song } from '@/types';
import LikeButton from './LikeButton';
import MediaItem from './MediaItem';
import { AiFillStepBackward, AiFillStepForward} from 'react-icons/ai'


interface PlayerContentProps{
	song:Song;
	songUrl:string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({
	song, 
	songUrl
}) => {
	const Icon =!true ? BsPauseFill : BsPlayFill

  return ( 
    <div className="grid h-full grid-cols-2 md:grid-cols-3">
        <div className="flex justify-start w-full">
          <div className="flex items-center gap-x-4">
            <MediaItem data={song} />
            <LikeButton songId={song.id} />
          </div>
        </div>

        <div 
          className="flex items-center justify-end w-full col-auto md:hidden"
        >
          <div 
            onClick={()=>{}} 
            className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer "
          >
            <Icon size={30} className="text-black" />
          </div>
        </div>

        <div 
          className="
            hidden
            h-full
            md:flex 
            justify-center 
            items-center 
            w-full 
            max-w-[722px] 
            gap-x-6
          "
        >
          <AiFillStepBackward
            onClick={()=>{}} 
            size={30} 
            className="transition cursor-pointer text-neutral-400 hover:text-white"
          />
          <div 
            onClick={()=>{}} 
            className="flex items-center justify-center w-10 h-10 p-1 bg-white rounded-full cursor-pointer "
          >
            <Icon size={30} className="text-black" />
          </div>
          <AiFillStepForward
            onClick={()=>{}} 
            size={30} 
            className="transition cursor-pointer text-neutral-400 hover:text-white" 
          />
        </div>

        <div className="justify-end hidden w-full pr-2 md:flex">
          <div className="flex items-center gap-x-2 w-[120px]">
          </div>
        </div>

      </div>
   );
}
 
export default PlayerContent;
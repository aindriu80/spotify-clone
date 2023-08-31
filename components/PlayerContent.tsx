"use client"

import { Song } from '@/types';
import LikeButton from './LikeButton';
import MediaItem from './MediaItem';

interface PlayerContentProps{
	song:Song;
	songUrl:string;
}

const PlayerContent: React.FC<PlayerContentProps> = ({song, songUrl}) => {
	return ( <div className="grid h-full grid-cols md:grid-cols-3">
		<div className="justify-start flex-w-full">
			<div className="flex items-center gap-x-4">
				<MediaItem data={song}/>
				<LikeButton songId={song.id}/>
			</div>
		</div>
	</div> );
}
 
export default PlayerContent;
"use client"

import MediaItem from '@/components/MediaItem';
import { Song } from '@/types';

interface SearchContentProps{
	songs:Song[];
}

const SearchContent: React.FC<SearchContentProps> =({ songs})=>

{
	if(songs.length===0){
		return(
			<div className="flex flex-col w-full px-6 gap-y-2 text-neutral-400">No Songs Found</div>
		)
	}

	return ( <div className="flex flex-col w-full px-6 gap-y-2">

		{songs.map((song)=>(
			<div className="flex items-center w-full gap-x-4"key={song.id}>
				<div className="flex-1">
					<MediaItem onClick={()=>{} }data={song}/>
				</div>
				{/* TODO: Add Like Button Here  */}
			</div>
		))}
	</div> );



}

 
export default SearchContent;
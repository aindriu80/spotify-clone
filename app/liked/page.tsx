import getLikedSongs from '@/actions/getLikedSongs';
import Header from '@/components/Header';
import Image from 'next/image'

export const revalidate =0
const Liked = async () => {
	const songs = await getLikedSongs();
	return ( <div className="w-full h-full overflow-hidden overflow-y-auto rounded-lg bg-neurtal-900">
		<Header>
			<div className="flex flex-col items-center md:flex-row gap-x-5">
				<div className="relative w-32 h-32 lg:h-44 lg:w-44">
					<Image fill alt="PlayList" src="/image/liked.png"/>
				</div>

			</div>

		</Header>
		
	</div> );
}
 
export default Liked;
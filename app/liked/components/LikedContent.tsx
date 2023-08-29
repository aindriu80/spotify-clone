"use client"

import { useUser } from '@/hooks/useUser';
import { Song } from '@/types';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface LikedContentProps{
	songs:Song[]
}

const LikedContent:React.FC<LikedContentProps>  = ({songs}) => {
	const router = useRouter()
	const {isLoading,user} = useUser()

	useEffect(() =>{
		if(!isLoading && !user){
			router.replace('/')
		}
	},[isLoading,user,router])

	if(songs.length===0){
		return(
			<div className="flex flex-col w-full px-6 gap-y-2 text-neutral-400">No Liked Songs</div>
		)
	}

	return ( <div className="">Liked Content</div> );
}
 
export default LikedContent;
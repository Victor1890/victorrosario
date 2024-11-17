import spotifyProvider from '@/lib/spotify/spotify.provider'

export async function GET() {
	const song = await spotifyProvider.getCurrentlyPlayingSong().catch((e) => {
		console.error('spotifyProvider.getCurrentlyPlayingSong: ', e.message)
		return null
	})

	if (!song) {
		return Response.json(
			{ isPlaying: false },
			{
				status: 500,
			}
		)
	}

	const data = {
		album: song.item?.album?.name,
		albumImageUrl: song.item?.album?.images?.[0]?.url,
		artist: song.item.artists.map((artist) => artist.name).join(', '),
		isPlaying: song.is_playing,
		songUrl: song.item.external_urls.spotify,
		title: song.item.name,
	}

	return Response.json(data, {
		status: 200,
		headers: {
			'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=30',
		},
	})
}

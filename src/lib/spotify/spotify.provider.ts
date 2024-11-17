import Base from '../base'
import {
	GetTopArtistResponse,
	GetTopTrackResponse,
	ISpotifyAccessToken,
	ISpotifyCurrentlyPlaying,
} from './Spotify'

const spotify = {
	api: 'https://api.spotify.com',
	apiToken: 'https://accounts.spotify.com/api/token',
	clientId: process.env.SPOTIFY_CLIENT_ID as string,
	clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
	refreshToken: process.env.SPOTIFY_REFRESH_TOKEN as string,
} as const

class SpotifyProvider extends Base {
	private refresh_token: string

	constructor() {
		super(spotify.api)
		this.refresh_token = spotify.refreshToken
	}

	private async getAccessToken(): Promise<ISpotifyAccessToken> {
		const { apiToken, clientId, clientSecret, refreshToken } = spotify

		const response: ISpotifyAccessToken = await fetch(apiToken, {
			method: 'POST',
			headers: {
				Authorization: `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
				'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: refreshToken,
			}),
		})
			.then((res) => res.json())
			.catch((e) => {
				console.error('getAccessToken fetch error: ', e)
				return null
			})

		if (!response) {
			return { access_token: '', expires_in: 0 }
		}
		return response
	}

	public async getTopTracks(limit = 10): Promise<GetTopTrackResponse> {
		return this.get(
			`/v1/me/top/tracks?limit=${limit}&time_range=short_term`,
			{},
			{
				Authorization: `Bearer ${this.refresh_token}`,
			}
		).then((response) => response as GetTopTrackResponse)
			.catch((e) => {
				this.getAccessToken().then(({ access_token }) => {
					this.refresh_token = access_token
				});
				return {} as GetTopTrackResponse;
			})
	}

	public async getTopArtists(limit = 5): Promise<GetTopArtistResponse> {
		return this.get(
			`/v1/me/top/artists?limit=${limit}&time_range=short_term`,
			{},
			{
				Authorization: `Bearer ${this.refresh_token}`,
			}
		).then((response) => response as GetTopArtistResponse)
			.catch((e) => {
				this.getAccessToken().then(({ access_token }) => {
					this.refresh_token = access_token
				});
				return {} as GetTopArtistResponse;
			})
	}

	public async getCurrentlyPlayingSong(): Promise<ISpotifyCurrentlyPlaying> {
		return this.get(
			`/v1/me/player/currently-playing`,
			{},
			{
				Authorization: `Bearer ${this.refresh_token}`,
			}
		).then((response) => response as ISpotifyCurrentlyPlaying)
			.catch((e) => {
				this.getAccessToken().then(({ access_token }) => {
					this.refresh_token = access_token
				});
				return {} as ISpotifyCurrentlyPlaying;
			})
	}
}

const spotifyProvider = new SpotifyProvider()

export default spotifyProvider

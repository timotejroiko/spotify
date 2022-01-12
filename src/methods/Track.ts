import { Spotify } from "../structures/Spotify";

export class Track {
    private readonly spotify: Spotify;

    public constructor(spotify: Spotify) {
        this.spotify = spotify;
    }

    public async resolve(Id: string): Promise<any> {
        try {
            const res = await this.spotify.makeRequest(`/tracks/${Id}`);
            if (!res) return { tracks: [] };

            const track = this.spotify.buildUnresolved(res);

            return { tracks: [track] };
        } catch (error) {
            return { tracks: [] };
        }
    }
}
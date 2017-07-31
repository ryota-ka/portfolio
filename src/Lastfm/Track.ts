export type Track = {
    name: string;
    artist: {
        name: string;
        url: string;
    };
    url: string;
    loved: boolean;
    timestamp: number | null;
}

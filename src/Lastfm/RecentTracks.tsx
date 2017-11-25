import * as React from 'react';
import { Track } from './Track';
import { TrackListItem } from './TrackListItem';

type State = {
    loading: boolean;
    tracks: Track[];
}

function State(): State {
    return {
        loading: true,
        tracks: [],
    };
}

export class RecentTracks extends React.Component<{}, State> {
    constructor(props: {}) {
        super(props);

        this.state = State();
    }

    render() {
        if (this.state.loading) {
            return (
                <ul>
                    <li className="loading">Loading...</li>
                </ul>
            );
        }

        return (
            <ul>
                {
                    this.state.tracks.map(t => <TrackListItem key={`${t.url}-${t.timestamp}`} {...t} />)
                }
            </ul>
        );
    }

    async componentDidMount() {
        try {
            const res = await fetch('/api/lastfm/recent_tracks');
            const tracks: Track[] = await res.json();

            this.setState(_ => ({ tracks }));
        } finally {
            this.setState(_ => ({ loading: false }));
        }
    }
}

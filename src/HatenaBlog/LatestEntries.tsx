import * as React from 'react';
import { BlogEntry } from './BlogEntry';
import { BlogEntryListItem } from './BlogEntryListItem';

type State = {
    loading: boolean;
    entries: BlogEntry[];
}

function State(): State {
    return {
        loading: true,
        entries: [],
    };
}

export class LatestEntries extends React.Component<{}, State> {
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
                    this.state.entries.map(e =>
                        <BlogEntryListItem key={e.url} {...e} />
                    )
                }
            </ul>
        )
    }

    async componentDidMount() {
        try {
            const res = await fetch('/api/hatenablog/latest_entries');
            const entries: BlogEntry[] = await res.json();

            this.setState(_ => ({ entries }));
        } finally {
            this.setState(_ => ({ loading: false }));
        }
    }
}

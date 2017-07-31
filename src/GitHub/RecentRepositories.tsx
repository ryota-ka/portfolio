import * as React from 'react';
import { Repository } from './Repository';
import { RepositoryListItem } from './RepositoryListItem';

type State = {
    loading: boolean;
    repositories: Repository[];
}

function State(): State {
    return {
        loading: true,
        repositories: [],
    };
}

export class RecentRepositories extends React.Component<{}, State> {
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
                    this.state.repositories.map(r => <RepositoryListItem key={r.name} {...r} />)
                }
            </ul>
        );
    }

    async componentDidMount() {
        try {
            const res = await fetch('/api/github/recent_repositories');
            const repositories: Repository[] = await res.json();

            this.setState(_ => ({ repositories }));
        } finally {
            this.setState(_ => ({ loading: false }));
        }
    }
}

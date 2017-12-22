import * as React from 'react';
import { BlogEntry } from './BlogEntry';

type State = {
    loading: boolean;
    stars: 0;
}

function State(): State {
    return {
        loading: true,
        stars: 0,
    };
}

export class Stars extends React.Component<Pick<BlogEntry, 'url'>, State> {
    constructor(props: Pick<BlogEntry, 'url'>) {
        super(props);

        this.state = State();
    }

    render() {
        if (this.state.stars === 0) return null;

        return <span className="label yellow"><i className="fa fa-star"></i> {this.state.stars}</span>
    }

    async componentDidMount() {
        const res = await fetch(`/api/hatena/stars?url=${encodeURIComponent(this.props.url)}`);
        const { stars } = await res.json();

        this.setState(_ => ({
            loading: false,
            stars,
        }));
    }
}

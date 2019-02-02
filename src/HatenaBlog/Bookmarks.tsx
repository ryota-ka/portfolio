import * as React from 'react';
import { BlogEntry } from './BlogEntry';

type State = {
    loading: boolean;
    bookmarks: 0;
}

function State(): State {
    return {
        loading: true,
        bookmarks: 0,
    };
}

export class Bookmarks extends React.Component<Pick<BlogEntry, 'url'>, State> {
    constructor(props: Pick<BlogEntry, 'url'>) {
        super(props);

        this.state = State();
    }

    render() {
        if (this.state.bookmarks === 0) return null;

        return <span className="label red"><i className="fa fa-fw fa-bookmark"></i>{this.state.bookmarks}</span>
    }

    async componentDidMount() {
        const res = await fetch(`/api/hatenablog/bookmarks?url=${encodeURIComponent(this.props.url)}`);
        const { bookmarks } = await res.json();

        this.setState(_ => ({
            loading: false,
            bookmarks,
        }));
    }
}


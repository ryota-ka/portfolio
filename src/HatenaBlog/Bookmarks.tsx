import * as React from 'react';
import * as jQuery from 'jquery';
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

        return <span className="label red"><i className="fa fa-bookmark"></i> {this.state.bookmarks}</span>
    }

    componentDidMount() {
        jQuery.getJSON(`http://api.b.st-hatena.com/entry.count?callback=?&url=${encodeURIComponent(this.props.url)}`).then(bookmarks => {
            this.setState(_ => ({
                loading: true,
                bookmarks,
            }));
        });
    }
}


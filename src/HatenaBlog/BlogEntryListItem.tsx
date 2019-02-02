import * as React from 'react';
import { format } from 'date-fns';
import { BlogEntry } from './BlogEntry';
import { Bookmarks } from './Bookmarks';
import { Stars } from './Stars';

class PublishedAt extends React.Component<Pick<BlogEntry, 'publishedAt'>> {
    render() {
        return <span className="label gray"><i className="fa fa-calendar"></i> {format(this.props.publishedAt, 'YYYY-MM-DD')}</span>;
    }
}

export class BlogEntryListItem extends React.Component<BlogEntry> {
    constructor(props: BlogEntry) {
        super(props);
    }

    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.title}</a> <PublishedAt publishedAt={this.props.publishedAt} /> <Bookmarks url={this.props.url} /> <Stars url={this.props.url} />
            </li>
        );
    }
}

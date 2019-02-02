import * as React from 'react';
import { format } from 'date-fns';
import { Track } from './Track';

class Timestamp extends React.Component<Pick<Track, 'timestamp'>> {
    render() {
        const { timestamp } = this.props;

        if (timestamp === null) {
            return <span className="label green"><i className="fa fa-fw fa-headphones"></i>now playing</span>;
        } else {
            return <span className="label gray"><i className="fa fa-fw fa-clock-o"></i>{format(timestamp * 1000, 'YYYY-MM-DD HH:mm:ss')}</span>;
        }
    }
}

class Loved extends React.Component<{ loved: Track['loved'] }> {
    render() {
        if (this.props.loved) {
            return <span className="label red"><i className="fa fa-fw fa-heart"></i>loved</span>
        } else {
            return null;
        }
    }
}

export class TrackListItem extends React.Component<Track> {
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.name}</a> by <a href={this.props.artist.url}>{this.props.artist.name}</a> <Loved loved={this.props.loved} /> <Timestamp timestamp={this.props.timestamp} />
            </li>
        );
    }
}

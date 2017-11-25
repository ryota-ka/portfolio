import * as React from 'react';
import { Repository } from './Repository';

class Stars extends React.Component<Pick<Repository, 'stars'>> {
    render() {
        if (this.props.stars === 0) return null;

        return <span className="label yellow"><i className="fa fa-star"></i> {this.props.stars}</span>;
    }
}

class Forks extends React.Component<Pick<Repository, 'forks'>> {
    render() {
        if (this.props.forks === 0) return null;

        return <span className="label green"><i className="fa fa-code-fork"></i> {this.props.forks}</span>;
    }
}

export class RepositoryListItem extends React.Component<Repository> {
    render() {
        return (
            <li>
                <a href={this.props.url}>{this.props.name}</a> <Stars stars={this.props.stars} /> <Forks forks={this.props.forks} />
            </li>
        );
    }
}

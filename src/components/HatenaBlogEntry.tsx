import jQuery from 'jquery';
import * as React from 'react';
import { Label } from './Label';
import { format } from 'date-fns';

type Props = Readonly<{
  title: string;
  url: string;
  publishedAt: string;
}>;

export function HatenaBlogEntry({ title, url, publishedAt }: Props): React.ReactElement {
  const date = format(new Date(publishedAt), 'MMM d, yyyy');

  const [bookmarks, setBookmarks] = React.useState<number | null>(null);

  const { origin, pathname } = new URL(url);
  const normalizedURL = origin + pathname;

  React.useEffect(() => {
    jQuery.getJSON(
      `https://bookmark.hatenaapis.com/count/entry?url=${encodeURIComponent(normalizedURL)}&callback=?`,
      bookmarks => {
        setBookmarks(bookmarks);
      },
    );
  }, [url]);

  return (
    <li>
      <a href={normalizedURL} target="_blank" rel="noopener">
        {title}
      </a>
      <Label color="gray" icon="calendar">
        {date}
      </Label>
      {bookmarks !== null && (
        <Label color="red" icon="bookmark">
          {bookmarks}
        </Label>
      )}
    </li>
  );
}

import * as React from 'react';

import { Label } from './Label';
import { LabelCollection } from './LabelCollection';

const styles = require('./StravaActivity.module.css');

type Props = Readonly<{
  elevation: number | null;
  distance: number | null;
  id: string;
  kudos: number;
  name: string;
  time: number;
  type: string;
}>;

const formatDistance = (distance: number, preferMeter: boolean): string => {
  if (preferMeter && distance < 10_000) {
    return Intl.NumberFormat('en-US', {
      maximumFractionDigits: 0,
      style: 'decimal',
    }).format(distance);
  }

  return `${Intl.NumberFormat('en-US', {
    maximumFractionDigits: 2,
    style: 'decimal',
  }).format(distance / 1_000)}k`;
};

const formatTime = (time: number): string => {
  const h = Math.floor(time / 3_600);
  const m = Math.floor((time % 3_600) / 60);
  const s = time % 60;

  return `${h > 0 ? `${h}:` : ''}:${m}:${s}`;
};

export const StravaActivity: React.FC<Props> = ({ distance, elevation, id, kudos, name, time, type }: Props) => {
  return (
    <li>
      <a href={`https://www.strava.com/activities/${id}`} target="_blank" rel="noopener">
        {name}
      </a>
      <LabelCollection className={styles.labels}>
        <Label
          icon={
            {
              Hike: 'person-hiking',
              Ride: 'bicycle',
              VirtualRide: 'bicycle',
              Run: 'person-running',
              Snowboard: 'person-snowboarding',
              Swim: 'person-swimming',
              WeightTraining: 'dumbbell',
              Walk: 'person-walking',
            }[type] ?? 'fire'
          }
          color="gray"
        >
          {distance ? `${formatDistance(distance, type === 'Swim')}m` : formatTime(time)}
        </Label>
        {elevation && (type === 'Ride' || type === 'VirtualRide') && (
          <Label icon="mountain" color="gray">
            {formatDistance(elevation, true)}m
          </Label>
        )}
        {kudos > 0 && (
          <Label icon="thumbs-up" color="gray">
            {kudos}
          </Label>
        )}
      </LabelCollection>
    </li>
  );
};

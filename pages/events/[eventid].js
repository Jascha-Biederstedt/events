import { Fragment } from 'react';

import { useRouter } from 'next/router';

import { getEventById } from '../../dummyData';
import EventContent from '../../components/eventDetail/EventContent';
import EventSummary from '../../components/eventDetail/EventSummary';
import EventLogistics from '../../components/eventDetail/EventLogistics';

export default function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

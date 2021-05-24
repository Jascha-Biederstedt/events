import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../dummyData';
import EventList from '../../components/events/EventList';

export default function FilteredEventsPage() {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return (
      <p className="center" style={{ marginTop: '2rem' }}>
        Loading...
      </p>
    );
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    <p style={{ marginTop: '2rem' }}>
      Invalid filter. Please adjust your values.
    </p>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <p className="center" style={{ marginTop: '2rem' }}>
        No events found.
      </p>
    );
  }

  return (
    <div>
      <EventList items={filteredEvents} />
    </div>
  );
}

// components/VenuePage.js
import Image from "next/image";
import styles from '../VenuePage.module.css';

const venues = [
  {
    region: "North London",
    venues: [
      { name: "Emirates Stadium", imageUrl: "/images/north-london/emirates-stadium.jpg" },
      { name: "Tottenham Hotspur Stadium", imageUrl: "/images/north-london/tottenham-hotspur-stadium.jpg" },
    ],
  },
  {
    region: "East London",
    venues: [
      { name: "London Stadium", imageUrl: "/images/east-london/london-stadium.jpg" },
      { name: "The O2", imageUrl: "/images/east-london/o2-arena.jpg" },
    ],
  },
  {
    region: "Central London",
    venues: [
      { name: "Wembley Stadium", imageUrl: "/images/central-london/wembley-stadium.jpg" },
      { name: "Stamford Bridge", imageUrl: "/images/central-london/stamford-bridge.jpg" },
    ],
  },
  {
    region: "West London",
    venues: [
      { name: "Craven Cottage", imageUrl: "/images/west-london/craven-cottage.jpg" },
      { name: "Queens Park Rangers", imageUrl: "/images/west-london/queens-park-rangers.jpg" },
    ],
  },
  {
    region: "South London",
    venues: [
      { name: "Selhurst Park", imageUrl: "/images/south-london/selhurst-park.jpg" },
      { name: "The Valley", imageUrl: "/images/south-london/the-valley.jpg" },
    ],
  },
];

export default function VenuePage() {
  return (
    <div className={styles.container}>
      <h1>Sports Venues in London</h1>
      <div className={styles.regionContainer}>
        {venues.map((region) => (
          <div key={region.region} className={styles.region}>
            <h2>{region.region}</h2>
            <div className={styles.venueList}>
              {region.venues.map((venue) => (
                <div key={venue.name} className={styles.venue}>
                  <Image
                    src={venue.imageUrl}
                    alt={venue.name}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover" }}
                  />
                  <p>{venue.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

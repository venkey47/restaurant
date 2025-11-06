import React from 'react';

export default function Location() {
  const placeLabel = 'Biryani & Fry Restaurant';
  const address = 'Shop no 2, 1st Floor, Kogilu Main Road, Yelahanka, Bengaluru - 560064';
  const lat = 13.103692884326811;
  const lng = 77.60173603596586;
  const mapsLatLng = `${lat},${lng}`;

  return (
    <section id="location" className="section section--inset">
      <div className="container">
        <h2 className="section__title">Find Us</h2>
        <div className="location">
          <div className="location__info">
            <h3>{placeLabel}</h3>
            <p>{address}</p>
            <p>Open: 11:30 AM – 11:00 PM</p>
            <p>
              Contact: <a href="tel:8884303446" className="btn btn--ghost" style={{ padding: '6px 10px' }}>8884303446</a>
            </p>
            <a className="btn btn--ghost" href={`https://www.google.com/maps?q=${mapsLatLng}`} target="_blank" rel="noreferrer">Open in Google Maps</a>
          </div>
          <div className="location__map">
            <iframe
              title="map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${mapsLatLng}&z=16&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}



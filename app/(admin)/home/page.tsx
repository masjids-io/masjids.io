'use client';

import React, { useState } from 'react';
import PageTitle from '@/components/PageTitle';

// Assuming you have installed bootstrap and bootstrap-icons
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';

const MasjidDashboard = () => {
  // --- State Management for Dynamic Data ---
  // This makes your dashboard flexible. You can later fetch this data from an API.

  const [prayerTimes, setPrayerTimes] = useState([
    { name: 'Fajr', time: '04:45 AM' },
    { name: 'Dhuhr', time: '12:15 PM' },
    { name: 'Asr', time: '03:40 PM' },
    { name: 'Maghrib', time: '06:25 PM' },
    { name: 'Isha', time: '07:45 PM' },
  ]);

  const [events, setEvents] = useState([
    { id: 1, name: 'Quran Study Circle', date: 'August 5, 2025' },
    { id: 2, name: 'Community Iftar', date: 'August 9, 2025' },
    { id: 3, name: 'Eid al-Adha Preparations', date: 'August 12, 2025' },
  ]);

  const [masjids, setMasjids] = useState([
    { id: 1, name: 'Masjid al ihklas', location: 'indonesia' },
    { id: 2, name: 'Masjid Agung.', location: 'jakarta' },
  ]);


  return (
    <>
      <PageTitle title="Masjid Dashboard" />
      <div className="container-fluid">
        {/* Use g-4 for a responsive gap between columns */}
        <div className="row g-4">

          {/* === Prayer Times Card === */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-header text-bg-info d-flex align-items-center">
                <i className="bi bi-clock-fill me-2"></i>
                <h5 className="card-title mb-0">Prayer Times</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {prayerTimes.map((prayer) => (
                    <li key={prayer.name} className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                      {prayer.name}
                      <span className="badge bg-info-subtle text-info-emphasis rounded-pill fs-6">{prayer.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* === Upcoming Events Card === */}
          <div className="col-md-12 col-lg-6">
            <div className="card h-100">
              <div className="card-header text-bg-secondary d-flex align-items-center">
                <i className="bi bi-calendar-event-fill me-2"></i>
                <h5 className="card-title mb-0">Upcoming Events</h5>
              </div>
              <div className="card-body">
                <table className="table table-hover align-middle">
                  <thead>
                    <tr>
                      <th scope="col">Event</th>
                      <th scope="col">Date</th>
                      <th scope="col" className="text-end">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {events.map((event) => (
                      <tr key={event.id}>
                        <td>{event.name}</td>
                        <td>{event.date}</td>
                        <td className="text-end">
                          <button className="btn btn-sm btn-outline-primary me-2">
                            <i className="bi bi-pencil-square"></i> Edit
                          </button>
                          <button className="btn btn-sm btn-outline-danger">
                            <i className="bi bi-trash"></i> Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
               <div className="card-footer text-end">
                  <button className="btn btn-primary">
                    <i className="bi bi-plus-circle me-1"></i> Create New Event
                  </button>
               </div>
            </div>
          </div>

          {/* === Recent masjids Card === */}
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <div className="card-header text-bg-success d-flex align-items-center">
                <i className="bi bi-heart-fill me-2"></i>
                <h5 className="card-title mb-0">Recent masjids</h5>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  {masjids.map((masjis) => (
                    <li key={masjis.id} className="list-group-item d-flex justify-content-between align-items-center">
                      {masjis.name}
                      <span className="badge bg-success-subtle text-success-emphasis ">
                        {masjis.location}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default MasjidDashboard;
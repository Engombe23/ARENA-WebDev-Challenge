'use client'

import { useEffect, useState } from "react";
import SessionCard from "../components/SessionCard";

const Sessions = () => {

  const [sessions, setSessions] = useState([]);
  const [filterSport, setFilterSport] = useState("");
  const [filterDate, setFilterDate] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSessions = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://127.0.0.1:8000/api/sessions/");
        const data = await res.json();
        setSessions(data);
        console.log(data);
      } catch (error) {
        console.error("Failed to fetch sessions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const filteredSessions = sessions.filter((session: any) => {
    return (
      (!filterSport || session.sport === filterSport) &&
      (!filterDate || new Date(session.date_time).toISOString().slice(0, 10) === filterDate) &&
      (!filterLocation || session.location.includes(filterLocation))
    )
  })

  return (
    <div className="max-w-sxl mx-auto p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Sessions</h1>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <select value={filterSport} onChange={(e) => setFilterSport(e.target.value)} className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md">
          <option value={""}>All Sports</option>
          <option value={"Football"}>Football</option>
          <option value={"Tennis"}>Tennis</option>
          <option value={"Basketball"}>Basketball</option>
        </select>

        <input type="date" value={filterDate} onChange={(e) => setFilterDate(e.target.value)} className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"/>
        <input type="text" placeholder="Location" value={filterLocation} onChange={(e) => setFilterLocation(e.target.value)} className="w-full md:w-1/3 p-2 border border-gray-300 rounded-md"/>
      </div>

      {/* Loading State */}
      {loading ? (
        <p className="text-center text-gray-600">Loading sessions...</p>
      ) : (
        <>
          {/* Session Cards */}
          <div className="grid gris-cols-1 md:gris-cols-2 lg:grid-cols-3 gap-6">
            {filteredSessions.map((session: any) => (
              <SessionCard key={session.id} session={session}/>
            ))}
          </div>

          {/* No Sessions Found */}
          {filteredSessions.length === 0 && (
            <p className="text-center text-gray-600">No sessions found. Try adjusting your filters.</p>
          )}
        </>
      )}
    </div>
  );
};

export default Sessions;

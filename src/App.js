import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(
          "Initial Location:",
          pos.coords.latitude,
          pos.coords.longitude
        );
      });

      setInterval(() => {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            console.log("Location Packet:", {
              latitude: pos.coords.latitude,
              longitude: pos.coords.longitude,
              timestamp: new Date().toLocaleTimeString(),
            });
          },
          (err) => console.error("Error getting location:", err)
        );
      }, 5000);
    } else {
      console.log("Geolocation not supported");
    }
  }, []);

  return (
    <div>
      <h1>Location Tracker</h1>
      <p>Check the browser console for location packets every 5 seconds.</p>
    </div>
  );
}

export default App;

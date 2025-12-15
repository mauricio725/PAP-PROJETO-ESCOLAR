import React, { useEffect, useState } from "react";

export default function Loader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <>
      {loading && (
        <div className="loader-overlay">
          <div className="loader-bounce"></div>
        </div>
      )}
      {!loading && children}
    </>
  );
}


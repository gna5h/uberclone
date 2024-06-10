"use client";

import SearchSection from "../components/home/search_section";
import GoogleMapSection from "../components/home/google_map_section";
import { SourceContext } from "../context/source_context";
import { useState } from "react";
import { DestinationContext } from "../context/destination_context";

export default function Home() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);

  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <SearchSection />
          </div>
          <div className="col-span-2">
            <GoogleMapSection />
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}

import { UserButton } from "@clerk/nextjs";
import SearchSection from "../components/home/search_section";
import GoogleMapSection from "../components/home/google_map_section";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <SearchSection />
      </div>
      <div className="col-span-2">
        <GoogleMapSection />
      </div>
    </div>
  );
}

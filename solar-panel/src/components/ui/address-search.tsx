import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";

interface AddressSearchProps {
  value: string;
  onChange: (value: string, coordinates?: { lat: number; lng: number }) => void;
}

export default function AddressSearch({ value, onChange }: AddressSearchProps) {
  const [search, setSearch] = useState(value);
  const [delayedSearch, setDelayedSearch] = useState(value);

  useEffect(() => {
    console.log('Search changed:', search);
    const timer = setTimeout(() => {
      console.log('Setting delayed search:', search);
      setDelayedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const { data: suggestions, isError, error } = useQuery({
    queryKey: ['address-search', delayedSearch],
    queryFn: async () => {
      if (delayedSearch.length < 3) return null;
      console.log('Fetching suggestions for:', delayedSearch);
      const response = await axios.get(`/api/maps?query=${encodeURIComponent(delayedSearch)}`);
      console.log('API response:', response.data);
      return response.data;
    },
    enabled: delayedSearch.length >= 3,
  });

  if (isError) {
    console.error('Error fetching suggestions:', error);
  }

  return (
    <div className="flex flex-col gap-2 relative">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-4 py-2"
        placeholder="Start typing to search address..."
      />
      {suggestions?.items?.length > 0 && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg">
          {suggestions.items.map((item: any) => (
            <button
              key={item.id}
              className="w-full p-2 text-left hover:bg-gray-100"
              onClick={() => {
                onChange(item.address.label, {
                  lat: item.position.lat,
                  lng: item.position.lng,
                });
                setSearch(item.address.label);
              }}
            >
              {item.address.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
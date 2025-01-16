import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface AddressSearchProps {
  value: string;
  onChange: (value: string, coordinates?: { lat: number; lng: number }) => void;
}

export default function AddressSearch({ value, onChange }: AddressSearchProps) {
  const [search, setSearch] = useState(value);
  const [delayedSearch, setDelayedSearch] = useState(value);
  const [showSuggestions, setShowSuggestions] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDelayedSearch(search);
      setShowSuggestions(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  const {
    data: suggestions,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["address-search", delayedSearch],
    queryFn: async () => {
      if (!delayedSearch || delayedSearch.length < 3) {
        return { items: [] };
      }
      const response = await axios.get("/api/maps", {
        params: { query: delayedSearch },
      });
      return response.data;
    },
    enabled: delayedSearch?.length >= 3,
    retry: 1,
  });

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border border-gray-300 px-4 py-2"
        placeholder="Start typing to search address..."
      />

      {isLoading && (
        <div className="absolute z-10 mt-1 w-full rounded-md border bg-white p-2">
          Searching...
        </div>
      )}

      {showSuggestions &&
        suggestions?.items &&
        suggestions.items.length > 0 && (
          <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border bg-white shadow-lg">
            {suggestions.items.map((item: any) => (
              <button
                key={item.id}
                type="button"
                className="w-full p-2 text-left hover:bg-gray-100"
                onClick={() => {
                  onChange(item.address, item.coordinates);
                  setSearch(item.address);
                  setDelayedSearch("");
                  setShowSuggestions(false);
                }}
              >
                {item.address}
              </button>
            ))}
          </div>
        )}
    </div>
  );
}

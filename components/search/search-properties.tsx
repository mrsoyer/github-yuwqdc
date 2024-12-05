"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export function SearchProperties() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [budget, setBudget] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      location,
      type,
      budget,
    });
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-lg p-4 shadow-lg">
        <Input
          placeholder="Où souhaitez-vous habiter ?"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full"
        />

        <Select value={type} onValueChange={setType}>
          <SelectTrigger>
            <SelectValue placeholder="Type de bien" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apartment">Appartement</SelectItem>
            <SelectItem value="house">Maison</SelectItem>
            <SelectItem value="villa">Villa</SelectItem>
            <SelectItem value="land">Terrain</SelectItem>
          </SelectContent>
        </Select>

        <Select value={budget} onValueChange={setBudget}>
          <SelectTrigger>
            <SelectValue placeholder="Budget max" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="100000">100 000 €</SelectItem>
            <SelectItem value="200000">200 000 €</SelectItem>
            <SelectItem value="300000">300 000 €</SelectItem>
            <SelectItem value="500000">500 000 €</SelectItem>
            <SelectItem value="1000000">1 000 000 €</SelectItem>
          </SelectContent>
        </Select>

        <Button type="submit" className="w-full">
          <Search className="mr-2 h-4 w-4" />
          Rechercher
        </Button>
      </div>
    </form>
  );
}
import { useEffect, useMemo, useState } from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import type { Property } from "../../types";
import propertiesData from "../../data/properties.json";
import SearchBar from "../../components/SearchBar/SearchBar";
import FilterBar from "../../components/Filter/FilterBar";
import SortSelector from "../../components/Sorting/SortSelect";
import homeStyles from "./Home.module.css";
import commonStyles from "../../styles/common.module.css";

const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [keyword, setKeyword] = useState<string>("");
  const [minBedrooms, setMinBedrooms] = useState<number>(0);
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const filteredProperties = useMemo(() => {
    const lowerCaseKeyword = keyword.trim().toLowerCase();

    return properties
      .filter((property) =>
        property.title.toLowerCase().includes(lowerCaseKeyword)
      )
      .filter((property) => property.bedrooms >= minBedrooms)
      .sort((a, b) =>
        sortOrder === "asc" ? a.price - b.price : b.price - a.price
      );
  }, [properties, keyword, minBedrooms, sortOrder]);

  return (
    <section className={commonStyles.section}>
      <div className={commonStyles.heading}>
        <h2>Available Properties</h2>
      </div>

      <div className={homeStyles.filters}>
        <SearchBar keyword={keyword} onSearch={setKeyword} />
        <FilterBar minBedrooms={minBedrooms} onChange={setMinBedrooms} />
        <SortSelector sortOrder={sortOrder} onChange={setSortOrder} />
      </div>

      <div className={homeStyles.cardContainer}>
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found. Try adjusting your filters.</p>
        )}
      </div>
    </section>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import propertiesData from "../data/properties.json";
import type { Property } from "../types";
import commonStyles from "../styles/common.module.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Fix default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PropertyDetails = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const { id } = useParams();

  useEffect(() => {
    setProperties(propertiesData);
  }, []);

  const propertyId = Number(id);
  const property = properties.find((p) => p.id === propertyId);

  if (!property) return <p>Property not found.</p>;

  return (
    <>
      <section
        className={`${commonStyles.section} ${commonStyles.detailsSection}`}
      >
        <div className={commonStyles.heading}>
          <h2>Property Details</h2>
        </div>
        <hr />
        <br />
        <img
          src={property.image}
          alt={property.title}
          className={commonStyles.propertyImage}
        />

        <h2>{property.title}</h2>

        <p>
          <strong>Price:</strong> ${property.price.toLocaleString()}
        </p>
        <p>
          <strong>Bedrooms:</strong> {property.bedrooms}
        </p>
        <p>
          <strong>Location:</strong> {property.location}
        </p>
      </section>

      <div className={commonStyles.gridContainer}>
        {property.priceHistory && (
          <div className={commonStyles.chartContainer}>
            <h3>Price History</h3>
            <Line
              data={{
                labels: property.priceHistory.map(
                  (_, idx) => `Month ${idx + 1}`
                ),
                datasets: [
                  {
                    label: "Price ($)",
                    data: property.priceHistory,
                    borderColor: "rgba(75,192,192,1)",
                    backgroundColor: "rgba(75,192,192,0.2)",
                    tension: 0.3,
                    pointRadius: 4,
                    fill: true,
                  },
                ],
              }}
              options={{
                responsive: true,
                plugins: {
                  legend: { display: true },
                  title: { display: true, text: "Price Trend Over Time" },
                },
                scales: {
                  y: {
                    beginAtZero: false,
                    title: {
                      display: true,
                      text: "Price ($)",
                    },
                  },
                  x: {
                    title: {
                      display: true,
                      text: "Time (Months)",
                    },
                  },
                },
              }}
            />
          </div>
        )}

        {property.coordinates && (
          <div className={commonStyles.mapContainerWrapper}>
            <h3>Location Map</h3>
            <MapContainer
              center={[property.coordinates.lat, property.coordinates.lng]}
              zoom={13}
              className={commonStyles.mapContainer}
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                position={[property.coordinates.lat, property.coordinates.lng]}
              >
                <Popup>{property.title}</Popup>
              </Marker>
            </MapContainer>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyDetails;

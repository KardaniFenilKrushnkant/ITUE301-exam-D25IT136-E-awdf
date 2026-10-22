
import VehicleCard from "../components/VehicleCard";

function FleetPage() {
  const vehicles = [
    {
      _id: "1",
      model: "Maruti Swift",
      type: "Hatchback",
      pricePerDay: 1500,
      available: true,
    },
    {
      _id: "2",
      model: "Honda City",
      type: "Sedan",
      pricePerDay: 2500,
      available: false,
    },
  ];

  return (
    <div>
      <h2>Available Fleet</h2>

      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} {...vehicle} />
      ))}
    </div>
  );
}

export default FleetPage;

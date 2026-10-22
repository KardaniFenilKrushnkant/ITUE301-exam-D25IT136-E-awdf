
function VehicleCard({ model, type, pricePerDay, available }) {
  return (
    <div className="vehicle-card">
      <h3>{model}</h3>
      <p>Type: {type}</p>
      <p>Price per day: ₹{pricePerDay}</p>

      {available ? (
        <button>Book Now</button>
      ) : (
        <span>Not Available</span>
      )}
    </div>
  );
}

export default VehicleCard;

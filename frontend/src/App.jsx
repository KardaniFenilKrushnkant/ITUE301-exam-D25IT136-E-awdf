
import LoginPage from "./pages/LoginPage";
import FleetPage from "./pages/FleetPage";
import MyBookingsPage from "./pages/MyBookingsPage";

function App() {
  return (
    <div>
      <h1>DriveEasy Car Rental System</h1>
      <LoginPage />
      <hr />
      <FleetPage />
      <hr />
      <MyBookingsPage />
    </div>
  );
}

export default App;

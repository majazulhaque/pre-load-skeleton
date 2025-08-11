import { UsersList } from "./pages/UsersList";
import "./styles.css";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Users</h1>
      <UsersList />
    </div>
  );
}

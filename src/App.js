import Drawer from "./layout/Drawer";
import Customers from "./pages/Customers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Drawer>
        <Customers />
      </Drawer>
    </>
  );
}

export default App;

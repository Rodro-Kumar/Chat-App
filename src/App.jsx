import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Chat from "./Pages/Chat/Chat";
import ProfileUpdate from "./Pages/ProfileUpdate/ProfileUpdate";
import { ToastContainer } from "react-toastify";
import Error from "./Pages/Error/Error";

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/profile" element={<ProfileUpdate />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;

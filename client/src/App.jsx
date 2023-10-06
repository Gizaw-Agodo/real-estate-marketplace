import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/home";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import About from "./pages/about";
import Profile from "./pages/profile";
import Header from "./components/Header";

function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element = {<Home/>}/>
    <Route path="/sign-up" element = {<SignUp/>}/>
    <Route path="/sign-in" element = {<SignIn/>}/>
    <Route path="/about" element = {<About/>}/>
    <Route path="/profile" element = {<Profile/>}/>
  </Routes>
  </BrowserRouter>;
}

export default App;

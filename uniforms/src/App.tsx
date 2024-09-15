import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login"
import Register from "./pages/Register"
import Forms from "./pages/Forms";
import Settings from "./pages/Settings";
import ViewForms from "./pages/ViewForms";
import UserDetails from "./pages/settings/user-details/UserDetails";
import AccountSettings from "./pages/settings/user-details/AccountSettings";
import FormsSocieties from "./pages/settings/user-details/FormsSocieties";
import Email from "./pages/settings/user-details/account/Email";
import Username from "./pages/settings/user-details/account/Username";
import Password from "./pages/settings/user-details/account/Password";
import Delete from "./pages/settings/user-details/account/Delete";
import FormAutofill from "./pages/settings/form-autofill/FormAutofill";
import ContactUs from "./pages/settings/contact-us/ContactUs";
import Faq from "./pages/settings/contact-us/Faq";
import About from "./pages/settings/about/About";
import Societies from "./pages/Societies";
import SocietyView from "./pages/SocietyView";
import ManageForms from "./pages/ManageForms";
import ManageSocieties from "./pages/ManageSocieties";
import ManageMembers from "./pages/ManageMembers";
import SocietyManage from "./pages/SocietyManage";

function App() {
  return (
     <BrowserRouter>
	<Routes>
    <Route path="register" element={<Register />} />
    <Route path="/" element={<Login />} />
	  <Route path="forms" element={<Forms />} />
    <Route path="settings" element={<Settings />} />
    <Route path="settings/user" element={<UserDetails />} />
    <Route path="settings/user/account" element={<AccountSettings />} />
    <Route path="settings/user/forms" element={<FormsSocieties />} />
    <Route path="settings/user/account/email" element={<Email />} />
    <Route path="settings/user/account/username" element={<Username />} />
    <Route path="settings/user/account/password" element={<Password />} />
    <Route path="settings/user/account/delete" element={<Delete />} />
    <Route path="settings/autofill" element={<FormAutofill />} />
    <Route path="settings/contact" element={<ContactUs />} />
    <Route path="settings/contact/faq" element={<Faq />} />
    <Route path="settings/about" element={<About />} />
    <Route path="societies" element={<Societies />}/>
    <Route path="societies/view" element={<SocietyView />}/>
    <Route path="manageforms" element={<ManageForms />}/>
    <Route path="managesocieties" element={<ManageSocieties />}/>
    <Route path="managesocieties/view" element={<SocietyManage />}/>
    <Route path="managesocieties/view/members" element={<ManageMembers />}/>
    <Route path="viewforms" element={<ViewForms />} />
	</Routes>
     </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import FormAutofill from './pages/settings/form-autofill/FormAutofill';
import ContactUs from './pages/settings/contact-us/ContactUs';
import Faq from './pages/settings/contact-us/Faq';
import About from './pages/settings/about/About';
import Societies from './pages/Societies';
import Manage from './pages/Manage';

function App() { 
  return (
     <BrowserRouter>
	<Routes>
	  <Route path="forms" element={<Forms />} />
    <Route path="viewforms" element={<ViewForms />} />
    <Route path="societies" element={<Societies />} />
    <Route path="manage" element={<Manage />} />
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
	</Routes>
     </BrowserRouter>
  );
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forms from "./pages/Forms"
import Settings from "./pages/Settings"
import ViewForms from "./pages/ViewForms"
import UserDetails from "./pages/settings/UserDetails"
import AccountSettings from "./pages/settings/account/AccountSettings"
import Email from "./pages/settings/account/Email"
import Username from "./pages/settings/account/Username"
import Password from "./pages/settings/account/Password"
import Delete from "./pages/settings/account/Delete"

function App() { 
  return (
     <BrowserRouter>
	<Routes>
	  <Route path="forms" element={<Forms />} />
    <Route path="settings" element={<Settings />} />
    <Route path="settings/user" element={<UserDetails />} />
    <Route path="settings/user/account" element={<AccountSettings />} />
    <Route path="settings/user/account/email" element={<Email />} />
    <Route path="settings/user/account/username" element={<Username />} />
    <Route path="settings/user/account/password" element={<Password />} />
    <Route path="settings/user/account/delete" element={<Delete />} />
    <Route path="viewforms" element={<ViewForms />} />
	</Routes>
     </BrowserRouter>
  );
}

export default App;

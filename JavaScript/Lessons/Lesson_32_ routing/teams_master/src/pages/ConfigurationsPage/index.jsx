import React from "react";
import AddTeamForm from "../../components/AddTeamForm";
import AddUserForm from "../../components/AddUserForm";
// import s from './index.module.css'

export default function ConfigurationsPage() {
  return (
    <div>
        <AddTeamForm />
        <AddUserForm />
    </div>
  );
}

import React, { useEffect } from "react";

import { Searchbar } from "./components/layout/Searchbar";
import { AddBtn } from "./components/layout/AddBtn";
import { Logs } from "./components/logs/Logs";
import { AddLogModal } from "./components/logs/AddLogModal";
import { EditLogModal } from "./components/logs/EditLogModal";
import { AddTechModal } from "./components/techs/AddTechModal";
import { TechListModal } from "./components/techs/TechListModal";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

export const App = () => {
	useEffect(() => {
		//init materilize js
		M.AutoInit();
	});
	return (
		<>
			<Searchbar />
			<main className='container'>
				<AddBtn />
				<AddLogModal />
				<EditLogModal />
				<AddTechModal />
				<TechListModal />
				<Logs />
			</main>
		</>
	);
};

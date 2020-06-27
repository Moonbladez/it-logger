import React, { useState, useEffect } from "react";

import { LogItem } from "./LogItem";
import { Preloader } from "../layout/Preloader";

export const Logs = () => {
	const [logs, setLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		getLogs();
		//es-lint-disable-next-line
	}, []);

	const getLogs = async () => {
		setLoading(true);
		const response = await fetch("/logs");
		const data = await response.json();

		setLogs(data);
		setLoading(false);
	};

	if (loading) {
		return <Preloader />;
	}

	return (
		<ul className='collection with-header z-depth-1'>
			<li className='collection-header'>
				<h4>System Logs</h4>
			</li>
			{!loading && logs.length === 0 ? (
				<p className='center'>Currently no logs available</p>
			) : (
				logs.map((log) => <LogItem log={log} key={log.id} />)
			)}
		</ul>
	);
};

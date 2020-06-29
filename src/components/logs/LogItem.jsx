import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";

import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
	const onDelete = () => {
		deleteLog(log.id);
		M.toast({ html: "Log deleted" });
	};

	return (
		<li className='collection-item'>
			<div>
				<span className=''>ID #{log.id} </span>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention ? "red-text" : "blue-text"
					}`}
					onClick={() => setCurrent(log)}
				>
					{log.message}
				</a>
			</div>
			<span className='grey-text'>
				last updated by
				<span className='black-text'> {log.tech}</span>
				on
				<Moment format='MMMM Do YYYY, h:mm a'>{log.date}</Moment>
			</span>
			<a href='#!' className='secondary-content' onClick={onDelete}>
				<i className='material-icons red-text'>delete_forever</i>
			</a>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
	deleteLog: PropTypes.func.isRequired,
	setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);

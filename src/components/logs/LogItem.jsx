import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

export const LogItem = ({ log }) => {
	return (
		<li className='collection-item'>
			<div>
				<span className=''>ID #{log.id} </span>
				<a
					href='#edit-log-modal'
					className={`modal-trigger ${
						log.attention ? "red-text" : "blue-text"
					}`}
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
			<a href='#!' className='secondary-content'>
				<i className='material-icons red-text'>delete_forever</i>
			</a>
		</li>
	);
};

LogItem.propTypes = {
	log: PropTypes.object.isRequired,
};

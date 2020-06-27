import React from "react";
import PropTypes from "prop-types";

export const TechItem = ({ tech }) => {
	return (
		<li className='collection-item'>
			<div>
				{tech.firstName} {tech.lastName}
				<a href='#!' className='secondary-content'>
					<i className='material-icons red-text'>delete_forever</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
};

import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";

const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
	const onDelete = () => {
		deleteTech(id);
		M.toast({
			html: `The technician ${firstName} ${lastName} has been deleted`,
		});
	};

	return (
		<li className='collection-item'>
			<div>
				{firstName} {lastName}
				<a href='#!' className='secondary-content' onClick={onDelete}>
					<i className='material-icons red-text'>delete_forever</i>
				</a>
			</div>
		</li>
	);
};

TechItem.propTypes = {
	tech: PropTypes.object.isRequired,
	deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);

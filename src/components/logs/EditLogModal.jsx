import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

export const EditLogModal = () => {
	const [message, setMessage] = useState("");
	const [attention, setAttention] = useState(false);
	const [tech, setTech] = useState("");

	const onSubmit = () => {
		if (message === "" || tech === "") {
			M.toast({ html: "Please make sure message and tech has been completed" });
		} else {
			console.log(message, tech, attention);

			setMessage("");
			setTech("");
			setAttention(false);
		}
	};

	return (
		<div id='edit-log-modal' className='modal' style={modalStyle}>
			<div className='modal-content'>
				<div className='row'>
					<div className='input-field'>
						<input
							type='text'
							name='message'
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
						<label htmlFor='message' className='active'>
							Log Message
						</label>
					</div>
				</div>
				<div className='row'>
					<div className='input-field'>
						<select
							name='tech'
							value={tech}
							className='browser-default'
							onChange={(event) => setTech(event.target.value)}
						>
							<option value='' disabled>
								Select Technician
							</option>
							<option value='John Doe'>John Doe</option>
							<option value='Sam Smith'>Sam Smith</option>
							<option value='Sara Wilson'>Sara Wilson</option>
						</select>
					</div>
				</div>

				<div className='row'>
					<div className='input-field'>
						<p>
							<label>
								<input
									type='checkbox'
									checked={attention}
									value={attention}
									onChange={(event) => setAttention(!attention)}
									className='filled-in checkbox-blue-grey'
								/>
								<span>needs attention</span>
							</label>
						</p>
						<p>
							<label>
								<input type='checkbox' className='filled in' />
							</label>
						</p>
					</div>
				</div>
			</div>
			<div className='modal-footer'>
				<a
					href='#!'
					onClick={onSubmit}
					className='modal-close waves-effect waves-light btn purple'
				>
					<i className='material-icons right'>thumb_up</i>
					Enter
				</a>
			</div>
		</div>
	);
};

const modalStyle = {
	width: "50%",
	height: "50%",
};

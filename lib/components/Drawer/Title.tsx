import CloseIcon from "./CloseIcon";
import { ResizableDrawerProps } from "./types";

const Title = ({
	title,
	closeButton = null,
	titleClosable = true,
	onClose = () => {},
}: ResizableDrawerProps) => {
	return (
		<div className="rc-drawer-title-container">
			<h3 className="rc-drawer-title">{title}</h3>
			{titleClosable &&
				(closeButton ? (
					<div onClick={onClose}>{closeButton}</div>
				) : (
					<button onClick={onClose} className="rc-drawer-close-btn">
						<CloseIcon />
					</button>
				))}
		</div>
	);
};

export default Title;

import React, { PropsWithChildren, useState } from "react";
import Drawer, { DrawerProps } from "rc-drawer";
import motionProps from "./motion";

let isResizing: boolean | null = null;

export type ResizableDrawerProps = DrawerProps & {
	title?: string;
	closable?: boolean;
};

const ResizableDrawer = ({
	children,
	...props
}: PropsWithChildren & ResizableDrawerProps) => {
	const [drawerWidth, setDrawerWidth] = useState(props.width || 300);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const cbHandleMouseMove = React.useCallback(handleMousemove, []);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const cbHandleMouseUp = React.useCallback(handleMouseup, []);

	function handleMouseup() {
		if (!isResizing) {
			return;
		}
		isResizing = false;
		document.removeEventListener("mousemove", cbHandleMouseMove);
		document.removeEventListener("mouseup", cbHandleMouseUp);
	}
	function handleMousedown(e: React.MouseEvent<HTMLDivElement>) {
		e.stopPropagation();
		e.preventDefault();
		document.addEventListener("mousemove", cbHandleMouseMove);
		document.addEventListener("mouseup", cbHandleMouseUp);
		isResizing = true;
	}

	function handleMousemove(e: MouseEvent) {
		let offsetRight =
			document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
		let minWidth = props.width || 300;
		let maxWidth = window.innerWidth - 10;
		if (offsetRight > Number(minWidth) && offsetRight < maxWidth) {
			setDrawerWidth(offsetRight);
		}
	}

	return (
		<Drawer {...props} width={drawerWidth} {...motionProps}>
			<div className="sidebar-dragger" onMouseDown={handleMousedown} />
			{props?.title && (
				<Title
					title={props.title}
					closable={props.closable}
					onClose={props.onClose}
				/>
			)}
			{children}
		</Drawer>
	);
};

const Title = ({
	title,
	closable = true,
	onClose = () => {},
}: ResizableDrawerProps) => {
	return (
		<div className="rc-drawer-title-container">
			<h3 className="rc-drawer-title">{title}</h3>
			{closable && (
				<button onClick={onClose} className="rc-drawer-close-btn">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 512 512"
						height="1em"
						width="1em"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
					</svg>
				</button>
			)}
		</div>
	);
};

export default ResizableDrawer;

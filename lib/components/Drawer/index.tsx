import React, { PropsWithChildren, useEffect, useState } from "react";
import Drawer from "rc-drawer";
import motionProps from "./motion";
import { ResizableDrawerProps } from "./types";
import Title from "./Title";

let isResizing: boolean | null = null;

const ResizableDrawer = ({
	children,
	...props
}: PropsWithChildren & ResizableDrawerProps) => {
	const { resizable = true } = props;
	const [drawerWidth, setDrawerWidth] = useState(props.width || 378);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const cbHandleMouseMove = React.useCallback(handleMousemove, []);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const cbHandleMouseUp = React.useCallback(handleMouseup, []);

	useEffect(() => {
		if (props?.maxWidth) {
			if (props?.maxWidth < Number(drawerWidth)) {
				setDrawerWidth(props.maxWidth);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [props.maxWidth]);

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
		const offsetRight =
			document.body.offsetWidth - (e.clientX - document.body.offsetLeft);
		const minWidth = props?.minWidth || props.width || 378;
		const maxWidth = props?.maxWidth || window.innerWidth - 10;
		if (offsetRight > Number(minWidth) && offsetRight < maxWidth) {
			setDrawerWidth(offsetRight);
			if (props.onResize) {
				props.onResize(offsetRight);
			}
		}
	}

	return (
		<Drawer {...props} width={drawerWidth} {...motionProps}>
			{resizable && (
				<div className="sidebar-dragger" onMouseDown={handleMousedown} />
			)}
			{props?.title && (
				<Title
					title={props.title}
					closeButton={props.closeButton}
					titleClosable={props.titleClosable}
					onClose={props.onClose}
				/>
			)}
			{children}
		</Drawer>
	);
};

export default ResizableDrawer;

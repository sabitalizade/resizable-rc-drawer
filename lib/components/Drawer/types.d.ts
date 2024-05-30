import { DrawerProps } from "rc-drawer";

export type ResizableDrawerProps = DrawerProps & {
	title?: React.ReactNode;
	closeButton?: React.ReactNode;
	titleClosable?: boolean;
	minWidth?: number;
	maxWidth?: number;
	resizable?: boolean;
	onResize?: (width: number) => void;
};

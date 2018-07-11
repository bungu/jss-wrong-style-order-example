import * as React from 'react';
import { withStyles, StyleContextProvider } from '../../provider';
import styles from './style';
import View, { IOuterProps as IViewProps } from './view';

export type IProps = IViewProps;

const EnhancedView = withStyles(styles)(View);

const Alert: React.SFC<IProps> = (props: IProps) => (
	<StyleContextProvider light={props.danger} dark={!props.danger}>
		<EnhancedView {...props} />
	</StyleContextProvider>
);
Alert.displayName = 'Order.Alert';

export default Alert;
/// <reference types="react" />
import * as React from "react";
import "monaco-editor";
import { View } from "./View";
export declare class EditorPaneProps {
    view: View;
    views: View[];
    preview: View;
    onClickView?: (view: View) => void;
    onDoubleClickView?: (view: View) => void;
    onClose?: (view: View) => void;
    onNewFile?: () => void;
    onFocus?: () => void;
    hasFocus?: boolean;
    onSplitEditor?: () => void;
}
export declare class EditorPane extends React.Component<EditorPaneProps> {
    constructor(props: any);
    private onUpdate;
    render(): JSX.Element;
}

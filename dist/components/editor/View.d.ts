import { File } from "../../model";
export declare enum ViewMode {
    EDITOR = 0,
    PREVIEW = 1,
    READONLY = 2,
}
export interface ViewProps {
    file: File;
    mode?: ViewMode;
    onClose?: Function;
    preview?: boolean;
}
export declare class View {
    file: File;
    mode: ViewMode;
    onClose?: Function;
    state: monaco.editor.ICodeEditorViewState;
    preview: boolean;
    constructor({file, mode, onClose, preview}: ViewProps);
}

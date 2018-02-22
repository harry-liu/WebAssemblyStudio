import { View, ViewMode } from "../components/editor/View";
import { File } from "../model";
export default class Group {
    currentView: View;
    views: View[];
    preview: View;
    constructor(view: View, views?: View[]);
    open(view: View, shouldPreview?: boolean): void;
    openFile(file: File, preview?: boolean, mode?: ViewMode): void;
    close(view: View): void;
}

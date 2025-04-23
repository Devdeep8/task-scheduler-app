import { Button } from "./ui/button";

export function UndoRedoControls({
    onUndo,
    onRedo
}:{
    onUndo: () => void;
    onRedo: () => void;
}) {
  return (
    <div className="flex gap-2 mt-4">
      <Button variant="outline" onClick={onUndo}>
        Undo
      </Button>
      <Button variant="outline" onClick={onRedo}>
        Redo
      </Button>
    </div>
  );
}
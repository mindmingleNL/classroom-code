type OnClickFn = (action: "save" | "cancel") => void;

interface ModalButtonsProps {
  //   onSave: () => void;
  //   onCancel: () => void;
  title: string;
  // onClick: (action: "save" | "cancel") => void;
  onClick: OnClickFn;
}

export const ModalButtons = ({ onClick }: ModalButtonsProps) => {
  return (
    <>
      <button onClick={() => onClick("cancel")}>Cancel</button>
      <button onClick={() => onClick("save")}>Save</button>
    </>
  );
};

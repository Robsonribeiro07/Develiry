// ConfirmDialog.tsx
import {ContainerDialogo } from './style'
interface ConfirmDialogProps {
  isOpen: boolean;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, message, onConfirm, onCancel }) => {

   // Não renderiza o diálogo se o estado isOpen for falso

  return (

      <ContainerDialogo active={isOpen} 
      >
     <div className="dialog">
        <p>{message}</p>
        <div className="dialog-actions">
          <button onClick={onConfirm}>Yes</button>
          <button onClick={onCancel}>No</button>
        </div>
      </div>
      </ContainerDialogo>
  );
};


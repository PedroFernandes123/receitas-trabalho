import { on } from "events";
import { Dialog, DialogHeader ,DialogTitle, DialogContent } from "../ui/dialog";

interface RecipeFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RecipeFormModal({isOpen}: RecipeFormModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Nova receita</DialogTitle>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
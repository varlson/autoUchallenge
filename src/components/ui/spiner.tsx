"use client";
import React from "react";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export type SpinnerProps = {
  modalControler: boolean;
};
function Spinner({ modalControler }: SpinnerProps) {
  return (
    <Dialog open={modalControler}>
      <form>
        <DialogContent showCloseButton={false} className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className=" text-center font-bold text-primary">
              Por favor agurade...
            </DialogTitle>
            {/* <DialogDescription>
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription> */}
          </DialogHeader>
          <div className="flex items-center justify-center">
            <UseAnimations
              strokeColor="#feb602"
              animation={loading}
              size={60}
            />
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}

export default Spinner;

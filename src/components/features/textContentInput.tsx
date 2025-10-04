"use client";
import React, { ChangeEvent, FormEvent } from "react";
import Spinner from "../ui/spiner";
import { Button } from "../ui/button";
import { Text } from "../ui/text";

type TextContentInputProps = {
  resetHandler: () => void;
  emailTextContent: string;
  changeTextHandle: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  handleSubmit: (e: boolean) => Promise<void>;
};
function TextContentInput({
  resetHandler,
  changeTextHandle,
  emailTextContent,
  handleSubmit,
}: TextContentInputProps) {
  const clearBtnHanler = () => {
    resetHandler();
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(false);
  };

  return (
    <>
      <form onSubmit={onSubmit} className=" rounded my-5 bg-white shadow p-4">
        <div className="border-b-2 border-off-white-300 pb-4">
          <Text size={"displaySmall"}>Digite o conteudo do email</Text>
        </div>

        <div className="border-dashed rounded-xl border-1 flex flex-col gap-y-5  items-center justify-center mt-10 border-off-white-300-600  h-[300px]">
          <textarea
            placeholder="Insira conteudo do email aqui..."
            value={emailTextContent}
            onChange={changeTextHandle}
            className="w-full h-full border-none active:border-none outline-none px-10 py-5 "
          ></textarea>
        </div>

        <div className="flex my-2 gap-x-5 justify-end">
          <Button
            onClick={clearBtnHanler}
            variant={"outline"}
            size={"lg"}
            type="reset"
          >
            Limpar
          </Button>
          <Button
            disabled={emailTextContent.length == 0}
            size={"lg"}
            className={emailTextContent.length > 0 ? "" : `cursor-not-allowed`}
            type="submit"
          >
            Continuar
          </Button>
        </div>
      </form>
      <Spinner modalControler={false} />
    </>
  );
}

export default TextContentInput;

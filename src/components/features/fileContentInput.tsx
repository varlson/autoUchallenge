"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";
import { Text } from "../ui/text";
import { Button } from "../ui/button";

type FileContentInputProps = {
  resetHandler: () => void;
  setFile: (f: File) => void;
  handleSubmit: (e: boolean) => Promise<void>;
};
function FileContentInput({
  resetHandler,
  setFile,
  handleSubmit,
}: FileContentInputProps) {
  const [fileName, setFileName] = useState<string>("");

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(true);
  };

  const clearBtnHanler = () => {
    resetHandler();
    setFileName("");
  };

  const uploadHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const maxSize = 5 * 1024 * 1024;
    const { files } = e.target;

    if (!files || files.length === 0) {
      alert("Selecione um arquivo primeiro!");
      return;
    }

    const file = files[0];
    if (file.size > maxSize) {
      alert(`O arquivo ${file.name} excede o limite de 5MB`);
      return;
    }

    const allowedTypes = ["text/plain", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Formato inválido. Envie apenas TXT ou PDF.");
      return;
    }

    setFile(file);
    setFileName(file.name);
  };
  return (
    <>
      <form
        onSubmit={onSubmitHandler}
        className=" rounded my-5 bg-white shadow p-4"
      >
        <div className="border-b-2 border-off-white-300 pb-4">
          <Text size={"displaySmall"}>Faça Upload de Arquivo de Email</Text>
        </div>

        <div className="border-dashed rounded-xl border-1 flex flex-col gap-y-5  items-center justify-center mt-10 border-off-white-300-600  h-[300px]">
          <label htmlFor="file-upload">
            <Image
              className="h-12 w-12 object-cover cursor-pointer"
              alt="Upload image"
              height={500}
              width={500}
              src="/upload.png"
            />
          </label>
          <input
            onChange={uploadHandle}
            type="file"
            name="email-content"
            className="hidden"
            id="file-upload"
            accept="text/plain, application/pdf"
          />
          <Text color={"secondary"} size={"headlineSmall"}>
            Clique e adicione email
          </Text>

          {fileName && (
            <div className="border  flex items-center justify-between border-off-white-200 min-w-[220px] gap-x-2 p-4 h-[60px] rounded-lg">
              <Text color={"primary"} size={"titleMedium"}>
                {fileName}
              </Text>
              <div className="">
                <CircleX
                  onClick={clearBtnHanler}
                  className="hover:text-destructive cursor-pointer transform duration-200  hover:scale-125"
                />
              </div>
            </div>
          )}
        </div>
        <Text className="my-2" color={"info"} size={"bodyLarge"}>
          Formatos aceitos .txt e .pdf
        </Text>

        <div className="flex gap-x-5 justify-end">
          <Button
            onClick={clearBtnHanler}
            variant={"outline"}
            size={"lg"}
            type="reset"
          >
            Limpar
          </Button>
          <Button
            disabled={!fileName}
            size={"lg"}
            className={fileName ? "" : `cursor-not-allowed`}
            type="submit"
          >
            Continuar
          </Button>
        </div>
      </form>
    </>
  );
}

export default FileContentInput;

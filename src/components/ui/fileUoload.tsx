"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Text } from "./text";
import Image from "next/image";
import { Button } from "./button";
import { CircleX, Trash } from "lucide-react";
import Spinner from "./spiner";

function FileUoload() {
  const [fileName, setFileName] = useState<string>("");
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModel(true);
  };

  const [showModal, setShowModel] = useState<boolean>(false);

  const removeHandler = () => {
    setFileName("");
  };

  const uploadHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length === 0) {
      alert("Selecione um arquivo primeiro!");
      return;
    }

    const file = files[0];
    const allowedTypes = ["text/plain", "application/pdf"];

    if (!allowedTypes.includes(file.type)) {
      alert("Formato inválido. Envie apenas TXT ou PDF.");
      return;
    }

    setFileName(file.name);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[70%] rounded my-10 bg-white shadow p-4"
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
                  onClick={removeHandler}
                  className="hover:text-destructive cursor-pointer transform duration-200  hover:scale-125"
                />
              </div>
            </div>
          )}
        </div>
        <Text className="my-2" color={"offWhite"} size={"bodyLarge"}>
          Formatos aceitos .txt e .pdf
        </Text>

        <div className="flex gap-x-5 justify-end">
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
      <Spinner modalControler={showModal} />
    </>
  );
}

export default FileUoload;

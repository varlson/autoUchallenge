"use client";
import React, { ChangeEvent, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FileContentInput from "./fileContentInput";
import TextContentInput from "./textContentInput";
import { ClassificationResponse } from "@/types/type";
import OutputOutput from "./outputOutput";
import Spinner from "../ui/spiner";
import { classifyEmail } from "@/services/emailClassifier.service";
import Toast from "../ui/Toast";
function SendModeSelector() {
  const [clsResponse, setClsResponse] = useState<
    ClassificationResponse | undefined
  >();

  const resetHandler = () => {
    setClsResponse(undefined);
    setEmailTextContent("");
  };

  const [showModal, setShowModel] = useState<boolean>(false);

  const [emailTextContent, setEmailTextContent] = useState<string>("");
  const [fileContent, setFileContent] = useState<FormData | undefined>(
    undefined
  );

  const submitHandle = async (isFile: boolean) => {
    setShowModel(true);

    setClsResponse(undefined);

    const content = isFile
      ? (fileContent as FormData)
      : { emailTextContent: emailTextContent };

    const response = await classifyEmail(content, isFile);
    setShowModel(false);

    if (response.success) {
      const contentResponse: ClassificationResponse = {
        classification: response.data.data.classification,
        customResponse: response.data.data.customMessage,
      };

      setClsResponse(contentResponse);
    } else {
      Toast({
        variant: "destructive",
        id: String(Date.now()),

        title: "Houve um erro na requisição",
        contentToShow: response.error ?? "houve um erro interno",
      });
    }
  };

  const changeTextHandle = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setEmailTextContent(e.target.value);
  };

  const setFile = (content: File) => {
    const formData = new FormData();
    formData.append("file", content);
    setFileContent(formData);
  };

  return (
    <div className=" w-full">
      <Tabs defaultValue="text" className="mt-4">
        <TabsList className=" self-end bg-secondary rounded w-ful ">
          <TabsTrigger onClick={resetHandler} className="" value="text">
            Enviar Texto
          </TabsTrigger>
          <TabsTrigger onClick={resetHandler} className="" value="file">
            Enviar ficheiro
          </TabsTrigger>
        </TabsList>
        <TabsContent value="text">
          <TextContentInput
            handleSubmit={submitHandle}
            emailTextContent={emailTextContent}
            changeTextHandle={changeTextHandle}
            resetHandler={resetHandler}
          />
        </TabsContent>
        <TabsContent value="file">
          <FileContentInput
            handleSubmit={submitHandle}
            setFile={setFile}
            resetHandler={resetHandler}
          />
        </TabsContent>
      </Tabs>
      {clsResponse && <OutputOutput {...clsResponse} />}
      <Spinner modalControler={showModal} />
    </div>
  );
}

export default SendModeSelector;

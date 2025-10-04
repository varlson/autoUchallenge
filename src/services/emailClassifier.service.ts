import { MakeRequest } from "@/config/axios/request";
import { EmailClassifierResponse } from "./emailClassifier.model";

export const classifyEmail = async (
  content: FormData | { emailTextContent: string },
  isFile: boolean = false
) => {
  const url = isFile ? "email-classifier/file" : "email-classifier/text";
  console.log({ isFile, content });

  const response = await MakeRequest<EmailClassifierResponse>({
    url: `/${url}`,
    method: "post",
    data: content,
  });

  return response;
};

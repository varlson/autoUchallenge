export type EmailClassifierResponse = {
  success: boolean;
  data: {
    classification: string;
    customMessage: string;
  };
};

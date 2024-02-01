type ContextContents = {
    [key: string]: string | number | null;
  };
  
  declare const context: {
    getVariable<T extends keyof ContextContents>(
      variableName: T
    ): ContextContents[T];
    setVariable<T extends keyof ContextContents>(
      variableName: T,
      input: string | number
    ): void;
    removeVariable<T extends keyof ContextContents>(variableName: T): void;
    request: typeof request;
    response: typeof response;
    readonly flow: string;
    session: { [key: string]: any };
  };
  
  declare function print(input: string): void;
  
  declare const response: {
    status: {
      message: string;
      code: number;
    };
    content: {
      asJSON: any;
      asXML: any;
    };
    headers: { [key: string]: string };
  };
  
  declare const request: {
    url: string;
    host: string;
    port: string;
    path: string;
    queryParams: string | string[];
    headers: { [key: string]: string };
    method: string;
    body: {
      asXML: any;
      asJSON: any;
      asForm: any;
    };
  };
class Logger {
  private readonly namespace: string = "";
  constructor(namespace: string) {
    this.namespace = namespace;
  }

  error = (message: string, ...rest: any[]) => {
    console.error(this.namespace, message, ...rest);
  };

  log = (message: string, ...rest: any[]) => {
    console.log(this.namespace, message, ...rest);
  };

  debug = (object: any) => {
    console.debug(this.namespace, object);
  };
}

export default Logger;

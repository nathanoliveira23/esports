import SetupApplication from "./app";

class Server {
  static startAplication(): void {
    const application = new SetupApplication();
    application.start();
  }
}

Server.startAplication();

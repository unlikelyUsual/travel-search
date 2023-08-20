import toast from "react-hot-toast";

class Alert {
  static success(message: string) {
    toast.success(message);
  }

  static fail(message: string, error?: any) {
    error && console.log(`Error => `, error);
    toast.error(message);
  }
}

export default Alert;

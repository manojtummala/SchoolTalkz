export default function errorMessage(message: any = "Some error occured in auth service"): { message: string } {
    return {
      message: message,
    };
  }
  
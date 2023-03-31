export default function errorMessage(message: any = "Some error occured in database"): { message: string } {
  return {
    message: message,
  };
}

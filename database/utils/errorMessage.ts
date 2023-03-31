export default function errorMessage(
  message: any = "Some error occured in database",
  status: number = 500
): { message: string; status: number } {
  return {
    message: message,
    status: status,
  };
}

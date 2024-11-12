export function parseTrpcErrorMessage(message: string) {
  try {
    if (Array.isArray(JSON.parse(message))) {
      const messageArray = JSON.parse(message) as { message: string }[];
      return messageArray[0].message;
    }
  } catch (error) {
    console.error(error);
  }

  return message;
}

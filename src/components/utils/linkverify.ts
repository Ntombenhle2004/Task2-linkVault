export default function isValidURL(url: string): boolean {
  const regex =
    /^(https?:\/\/)(localhost(:\d+)?|[\w-]+(\.[\w-]+)+)([\/\w-.?=&%]*)*\/?$/;
  return regex.test(url);
}

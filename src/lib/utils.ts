export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function buildWhatsAppLink(number: string, message: string) {
  const sanitizedNumber = number.replace(/[^\d]/g, "");
  const encodedMessage = encodeURIComponent(message.trim());
  return `https://wa.me/${sanitizedNumber}?text=${encodedMessage}`;
}

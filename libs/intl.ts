/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import de from "@intl/de-DE.json";
import en from "@intl/en-US.json";

export function useLocale(locale: string): (key: string) => string {
  const intl = {
    "de-DE": de,
    "en-US": en,
  };

  let messages = intl["en-US"];

  if (locale in intl) {
    messages = intl[locale];
  }

  return function __(key: string): string {
    if (!messages) {
      return key;
    }

    let keys = [key];

    if (key.includes(".")) {
      keys = key.split(".");
    }

    let scopedMessages = messages;

    while (keys.length > 0) {
      const currentKey = keys.shift();

      if (!(currentKey in scopedMessages)) {
        continue;
      }

      if (typeof scopedMessages[currentKey] === "object") {
        scopedMessages = scopedMessages[currentKey];
        continue;
      }

      return scopedMessages[currentKey];
    }

    return key;
  };
}

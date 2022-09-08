import { useLocale } from "@libs/intl";
import { useRouter } from "next/router";

export default function Work(): JSX.Element {
  const { locale, locales, defaultLocale } = useRouter();
  const __ = useLocale(locale);

  console.log(locale, locales, defaultLocale);

  return (
    <section>
      {__("title")}
      {__("test.test2")}
    </section>
  );
}

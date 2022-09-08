import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import styles from "./navigation.module.scss";
import { MouseEventHandler } from "react";
import { useLocale } from "@libs/intl";

type NavigationProps = {
  showOnMobile: boolean;
  hideEvent: MouseEventHandler;
};

export default function Navigation({
  showOnMobile,
  hideEvent,
}: NavigationProps): JSX.Element {
  const { pathname, locale, locales } = useRouter();
  const __ = useLocale(locale);

  const navItems = [
    {
      name: __("navigation.home"),
      path: "/",
    },
    {
      name: __("navigation.skills"),
      path: "/skills",
    },
    {
      name: __("navigation.projects"),
      path: "/projects",
    },
    {
      name: __("navigation.work"),
      path: "/work",
    },
    {
      name: __("navigation.contact"),
      path: "/contact",
    },
  ];

  function getInactiveLocale(): string {
    let result = locale;

    locales.forEach((loc) => {
      if (loc !== locale) {
        result = loc;
      }
    });

    return result;
  }

  return (
    <nav
      className={
        showOnMobile ? cn(styles.root, styles["show-on-mobile"]) : styles.root
      }
    >
      <ul>
        {navItems.map((navItem) => {
          return (
            <li
              key={navItem.name}
              onClick={hideEvent}
              className={pathname === navItem.path ? styles.active : ""}
            >
              <Link href={navItem.path}>{navItem.name}</Link>
            </li>
          );
        })}
        <li>
          <Link href={`/${getInactiveLocale()}${pathname}`}>
            {`${__("navigation.language")}(${locale})`}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import styles from "./navigation.module.scss";
import { MouseEventHandler } from "react";

type NavigationProps = {
  showOnMobile: boolean;
  hideEvent: MouseEventHandler;
};

export default function Navigation({
  showOnMobile,
  hideEvent,
}: NavigationProps): JSX.Element {
  const router = useRouter();

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Skills",
      path: "/skills",
    },
    {
      name: "Projects",
      path: "/projects",
    },
    {
      name: "Work",
      path: "/work",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

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
              className={router.pathname === navItem.path ? styles.active : ""}
            >
              <Link href={navItem.path}>{navItem.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

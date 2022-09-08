import Image from "next/image";
import cn from "classnames";

import styles from "./card.module.scss";
import { Children } from "@libs/types";

type CardProps = {
  children: Children;
  progress?: number;
  image?: string;
};

export default function Card({
  children,
  progress = -1,
  image,
}: CardProps): JSX.Element {
  function renderImage(): JSX.Element {
    return (
      <div className={styles.image}>
        <Image src={image} height={64} width={64} alt={image} />
      </div>
    );
  }

  function renderProgress(): JSX.Element {
    return (
      <div className={styles.progress}>
        {[0, 1, 2, 3, 4].map((item) => {
          if (progress > item) {
            return <span key={item} />;
          }
        })}
      </div>
    );
  }

  return (
    <div className={image ? cn(styles.root, styles["has-image"]) : styles.root}>
      {image ? renderImage() : null}

      <span>{children}</span>

      {progress >= 0 ? renderProgress() : null}
    </div>
  );
}

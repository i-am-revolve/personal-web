import Card from "@components/card";
import { useLocale } from "@libs/intl";
import { useRouter } from "next/router";
import styles from "./skills.module.scss";

export default function Skills(): JSX.Element {
  const { locale } = useRouter();
  const __ = useLocale(locale);

  const data = [
    {
      name: __("skills.development"),
      items: [
        {
          name: "JavaScript",
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: "TypeScript",
          image: "/images/TypeScriptLogo.png",
          progress: 4,
        },
        {
          name: "Java",
          image: "/images/JavaLogo.png",
          progress: 4,
        },
        {
          name: "C#",
          image: "/images/CSharpLogo.png",
          progress: 3,
        },
        {
          name: "PHP",
          image: "/images/PHPLogo.png",
          progress: 3,
        },
        {
          name: "Python",
          image: "/images/PythonLogo.png",
          progress: 2,
        },
        {
          name: "Dart",
          image: "/images/DartLogo.png",
          progress: 2,
        },
      ],
    },
    {
      name: __("skills.dbtools"),
      items: [
        {
          name: "SQL",
          image: "/images/MySqlLogo.png",
          progress: 4,
        },
        {
          name: "NoSQL",
          image: "/images/MongoDBLogo.png",
          progress: 3,
        },
        {
          name: "Redis",
          image: "/images/RedisLogo.png",
          progress: 2,
        },
        {
          name: "Figma",
          image: "/images/FigmaLogo.png",
          progress: 3,
        },
        {
          name: "Photoshop",
          image: "/images/PhotoshopLogo.png",
          progress: 1,
        },
      ],
    },
    {
      name: __("skills.social"),
      items: [
        {
          name: __("skills.socialSkills.teamplayer"),
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: __("skills.socialSkills.communicative"),
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: __("skills.socialSkills.responsible"),
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: __("skills.socialSkills.reliable"),
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: __("skills.socialSkills.adaptable"),
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
      ],
    },
    {
      name: __("skills.etc"),
      items: [
        {
          name: "Windows",
          image: "/images/WindowsLogo.png",
          progress: 4,
        },
        {
          name: "Linux",
          image: "/images/LinuxLogo.png",
          progress: 3,
        },
      ],
    },
  ];

  return (
    <section className={styles.root}>
      {data.map((category) => {
        return (
          <div key={category.name}>
            <h2>{category.name}</h2>
            <div className={styles["skill-grid"]}>
              {category.items.map((item) => (
                <Card
                  key={item.name}
                  image={item.image}
                  progress={item.progress}
                >
                  {item.name}
                </Card>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}

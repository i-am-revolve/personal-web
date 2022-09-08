import Card from "@components/card";
import styles from "./skills.module.scss";

export default function Skills(): JSX.Element {
  const data = [
    {
      name: "Development",
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
      name: "Databases & Tools",
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
      ],
    },
    {
      name: "Social",
      items: [
        {
          name: "Teamplayer",
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: "Communicative",
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: "Responsibe",
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: "Reliable",
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
        {
          name: "Adaptable",
          image: "/images/JavaScriptLogo.png",
          progress: 5,
        },
      ],
    },
    {
      name: "Other",
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
        {
          name: "Unknown",
          image: "/images/JavaScriptLogo.png",
          progress: 0,
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

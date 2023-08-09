import { ReactNode } from "react";

// const ageData: Record<string, number | boolean> = {
//   swen: 30,
//   bob: 23,
//   joe: 12,
//   alice: true,
// };

type ArticleVariant = "normal" | "important" | "old";

interface ArticleProps {
  children: ReactNode;
  variant: ArticleVariant;
}

const Article = (props: ArticleProps) => {
  const articleClassNames: Record<ArticleVariant, string> = {
    normal: "article",
    important: "important-article",
    old: "old-article",
  };
  return (
    <div className={articleClassNames[props.variant]}>
      {props.children}
      <button>Like 👍</button>
      <button>Share ✉️</button>
    </div>
  );
};

export default Article;

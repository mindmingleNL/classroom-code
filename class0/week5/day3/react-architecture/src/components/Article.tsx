import { ReactNode } from "react";

interface ArticleProps {
  children: ReactNode;
}

const Article = (props: ArticleProps) => {
  return (
    <div className="article">
      {props.children}
      <button>Like 👍</button>
      <button>Share ✉️</button>
    </div>
  );
};

export default Article;

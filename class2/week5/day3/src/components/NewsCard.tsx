import { ReactNode } from "react";

interface NewsCardProps {
  title: string;
  // href: string;
  content: string;
  children?: ReactNode;
}

export const NewsCard = ({ title, content, children }: NewsCardProps) => {
  return (
    <div className="news-card">
      <div className="news-card__mask">
        <img
          className="news-card__media"
          src="https://picsum.photos/200/200"
          alt=""
        />
      </div>
      <h3 className="news-card__title">
        <a href="#">{title}</a>
      </h3>

      <div className={`news-card__text`}>
        {content}
        {children}
      </div>
    </div>
  );
};

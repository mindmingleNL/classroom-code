interface NewsCardProps {
  title: string;
}

export const NewsCard = ({ title }: NewsCardProps) => {
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
      <p className="news-card__text">
        Qui voluptatem dolorem quibusdam. Sequi rem ipsam et occaecati debitis.
        Blanditiis pariatur doloribus voluptatem itaque eius.
      </p>
    </div>
  );
};

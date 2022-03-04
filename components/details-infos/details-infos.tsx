type TGenre = {
  name: string;
  id: number;
};

type TDetailsInfos = {
  title: string;
  genres: TGenre[];
  overview: string;
  startDate: string;
};

export default function DetailsInfos({
  title,
  genres,
  overview,
  startDate,
}: TDetailsInfos) {
  return (
    <div className="details-info__wrapper">
      <h1>{title}</h1>
      <div>
        <h3>genre</h3>
        {genres?.map((genre: TGenre) => (
          <span className="details-info__genre " key={genre.id}>
            {genre.name}
          </span>
        ))}
      </div>
      <div>
        <h3>Overview</h3>
        <span> {overview}</span>
      </div>
      <div>
        <h3>Release date</h3>
        <span>{startDate}</span>
      </div>
    </div>
  );
}

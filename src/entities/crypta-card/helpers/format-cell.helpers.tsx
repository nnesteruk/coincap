export const formatCell = (key: string, value: string) => {
  if (!value) return "-";

  if (key === "changePercent24Hr") {
    const numValue = Number(value);
    return (
      <span className={numValue > 0 ? "green" : "red"}>
        {numValue.toFixed(2)} %
      </span>
    );
  }

  if (key === "explorer") {
    return (
      <a href={String(value)} target="_blank" className="card__link">
        {value.slice(0, 30)}
      </a>
    );
  }

  const numValue = typeof value === "string" ? Number(value) : value;

  if (isNaN(numValue)) return value;

  switch (true) {
    case numValue >= 1e9:
      return `${(numValue / 1e9).toFixed(2)} млрд $`;
    case numValue >= 1e6:
      return `${(numValue / 1e6).toFixed(2)} млн $`;
    case numValue >= 1e3:
      return `${numValue.toFixed(2)} $`;

    default:
      return `${numValue.toFixed(2).toString()} $`;
  }
};

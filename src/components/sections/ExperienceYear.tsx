type Props = {
  startDate: string;
  endDate?: string;
};

export function ExperienceYear({ startDate, endDate }: Props) {
  const startYear = new Date(startDate).getUTCFullYear();
  const endYear =
    endDate != null ? new Date(endDate).getUTCFullYear() : "Present";

  if (startYear == endYear) {
    return (
      <time dateTime={startDate.toString()} data-title={startDate}>
        {startYear}
      </time>
    );
  }

  return (
    <>
      <time dateTime={startDate.toString()} data-title={startDate}>
        {startYear}
      </time>
      {" - "}
      <time dateTime={startDate.toString()} data-title={endDate}>
        {endYear}
      </time>
    </>
  );
}

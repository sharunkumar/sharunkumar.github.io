type Props = {
  title: string;
  content: string | string[];
};

export function ExperienceSubSection({ title, content }: Props) {
  return (
    <div className="flex flex-col gap-0">
      <h4>{title}:</h4>
      <ul className="flex list-disc flex-col gap-0 text-skin-muted [&>li]:ml-4 [&>li]:marker:text-skin-hue">
        {Array.isArray(content) ? (
          content.map((item, index) => <li key={index}>{item}</li>)
        ) : (
          <li>{content}</li>
        )}
      </ul>
    </div>
  );
}

type HeadContainerProps = {
  title: string;
  copy: string;
};

export default function HeadContainer({
  title,
  copy,
}: HeadContainerProps): React.ReactNode {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h1>{title}</h1>
      <p>{copy}</p>
    </div>
  );
}

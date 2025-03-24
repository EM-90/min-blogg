interface Tagprops {
  tagName: string;
}

export const Tag = ({ tagName }: Tagprops) => {
  return (
    <span className="color-change border-1 px-4 py-1 font-light text-sm rounded-full">
      {tagName}
    </span>
  );
};

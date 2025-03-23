interface Tagprops {
  tagName: string;
}

export const Tag = ({ tagName }: Tagprops) => {
  return (
    <span className="color-change border-2 px-4 py-1 m-1 font-normal rounded-full">
      {tagName}
    </span>
  );
};

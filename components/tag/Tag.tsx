interface Tagprops {
  tagName: string;
}

export const Tag = ({ tagName }: Tagprops) => {
  return (
    <span className=" bg-black px-4 py-1 font-regular text-white text-sm rounded-full">
      {tagName}
    </span>
  );
};

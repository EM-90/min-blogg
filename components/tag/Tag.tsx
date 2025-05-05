interface TagProps {
  tag: {
    title: string;
    slug: { current: string };
    _id: string;
  };
}

export const Tag = ({ tag }: TagProps) => {
  return (
    <span
      key={tag._id}
      className="py-1 tracking-widest text-gray-500 uppercase text-sm rounded-full"
    >
      {tag.title}
    </span>
  );
};

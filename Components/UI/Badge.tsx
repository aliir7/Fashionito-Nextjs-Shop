type BadgeProps = {
  count: number;
};

function Badge({ count }: BadgeProps) {
  return (
    <span className="absolute -top-2 -left-2.5 w-5 h-5 bg-black flex justify-center items-center text-white text-xs rounded-full">
      {count}
    </span>
  );
}

export default Badge;

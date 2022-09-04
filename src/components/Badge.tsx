type propType = {
  text: string;
};

function Badge({ text }: propType) {
  return (
    <div className="text-sm px-2 py-1 mx-3 rounded-full bg-red-100 text-orange-600">
      {text}
    </div>
  );
}

export default Badge;

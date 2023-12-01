const SearchCompInput = ({ item }: any) => {
  return (
    <input
      type="text"
      placeholder={item || "Que estas buscando?"}
      name="item"
      className="w-full h-full flex justify-center items-center text-black focus:outline-none focus: bg-none"
    />
  );
};

export { SearchCompInput };

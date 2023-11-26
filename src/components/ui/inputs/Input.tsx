type Input = {
  type: string;
  placeholder?: string;
  name: string;
  required?: boolean;
};
export default function input({ type, placeholder, name, required }: Input) {
  return (
    <input
      className="h-10 w-full border-2 border-teal-800 rounded-full px-5"
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
    ></input>
  );
}

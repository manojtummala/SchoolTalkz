type InputProp = {
  placeholder?: string;
  actionText?: string;
  autocomplete?: Boolean
};

const Input = ({ placeholder, actionText, autocomplete }: InputProp) => {
  return (
    <div className="text-xs text-dark-grey w-full flex rounded border border-dark-grey p-2">
      <input autoComplete="off" type="text" placeholder={placeholder} className="w-full"  />
      <button className="font-bold">{actionText}</button>
    </div>
  );
};

export default Input;

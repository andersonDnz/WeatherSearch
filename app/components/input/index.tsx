import { AiOutlineSearch } from "react-icons/ai";

interface InputProps {
  handleSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
  handleButtonClick: () => void;
}

const Input = ({
  handleSearch,
  setLocation,
  handleButtonClick,
}: InputProps) => {
  return (
    <div  className=" flex items-center md:w-2/4 w-full order-2 md:order-1">
      <input
        type="text"
        placeholder="Search City"
        className="w-full bg-transparent border-b-2 placeholder-white outline-none text-white"
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" name="buttonSearch"  className="ml-[-25px] text-white cursor-pointer">
        <AiOutlineSearch onClick={handleButtonClick} />
      </button >
    </div>
  );
};

export default Input;

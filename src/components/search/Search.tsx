import { Button } from "../ui/button";

interface SearchProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const Search = ({ search, setSearch, handleSearch }: SearchProps) => {
  return (
    <form
      onSubmit={handleSearch}
      className="w-full flex flex-wrap items-center gap-5"
    >
      <input
        type="text"
        placeholder="Enter City Name"
        className="flex-1 px-5 py-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button className="">Search</Button>
    </form>
  );
};

export default Search;

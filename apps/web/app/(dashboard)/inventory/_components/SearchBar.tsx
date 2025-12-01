import { Button } from "@repo/ui";

export function SearchBar() {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <form className="flex gap-2" action="/inventory" method="GET">
        <input
          name="q"
          placeholder="Search products..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent"
        />
        <Button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
          Search
        </Button>
      </form>
    </div>
  );
}

import Search from "./Search";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="px-4 h-max sticky top-8">
        <h1 className="mb-4 text-sm font-medium">Search</h1>
        <Search />
        <h1 className="mt-8 mb-4 text-sm font-medium">Filter</h1>
        <div className="flex flex-col gap-2 text-sm mb-6">
            <label htmlFor="newest" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="newest" id="newest" className="appearance-none bg-white size-4 border-[1.5px] border-color-blue cursor-pointer rounded-sm checked:bg-blue-800"/>
                Newest
            </label>
            <label htmlFor="popular" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="popular" className="appearance-none bg-white size-4 border-[1.5px] border-color-blue cursor-pointer rounded-sm checked:bg-blue-800" id="popular"/>
                Most Popular
            </label>
            <label htmlFor="trending" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="trending" className="appearance-none bg-white size-4 border-[1.5px] border-color-blue cursor-pointer rounded-sm checked:bg-blue-800" id="trending"/>
                Trending
            </label>
            <label htmlFor="oldest" className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="sort" value="oldest" id="oldest"className="appearance-none bg-white size-4 border-[1.5px] border-color-blue cursor-pointer rounded-sm checked:bg-blue-800"/>
                Oldest
            </label>
        </div>
        <h1 className="mb-4 text-sm font-medium">Categories</h1>
            <div className="flex flex-col gap-2 text-sm">
                <Link className="underline" to="/posts">All</Link>
                <Link className="underline" to="/posts?cat=web-deign">Web Design</Link>
                <Link className="underline" to="/posts?cat=developnment">Developnment</Link>
                <Link className="underline" to="/posts?cat=database">Databases</Link>
                <Link className="underline" to="/posts?cat=marketing">Marketing</Link>
                <Link className="underline" to="/posts?cat=marketing">Search Engine</Link>
            </div>
    </div>
  );
};

export default SideMenu;
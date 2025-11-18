import React from "react";
import { useUser } from "@clerk/clerk-react";
import { MinimalTiptap } from "@/components/ui/shadcn-io/minimal-tiptap";
// import { type } from "./../../node_modules/class-variance-authority/dist/index.d";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading....</div>;
  }

  if (isLoaded && !isSignedIn) {
    <div className="">You must login</div>;
  }
  return (
    <div className="md:h-[calc(100vh-80px)]  h-[calc(100vh-64px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a new post</h1>
      <form className="flex flex-col gap-6 flex-1 mb-6">
        <button className="p-2 shadow-md rounded-xl text-sm text-gray-500 bg-white w-max">Add a cover image</button>
        <input type="text" placeholder="My Awesome Story"  className="text-4xl font-semibold bg-transparent outline-none"/>
        <div className="flex items-center gap-4 ">
          <label htmlFor="" className="text-sm ">Choose a category</label>
          <select name="cat" id="" className="p-2 rounded-xl bg-white shadow-md">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="developnment">Developnment</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" placeholder="A Short Description" id="" className="p-4 rounded-xl bg-whtie shadow-md" />
    <MinimalTiptap className="bg-white flex-1 rounded"/>
    <button type="button" className="bg-blue-800 text-white font-medium rounded mt-4 p-2 w-36">Send</button>
      </form>
    </div>
  );
};

export default Write;

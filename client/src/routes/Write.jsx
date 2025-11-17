import React from "react";
import { useUser } from "@clerk/clerk-react";
import { MinimalTiptap } from "@/components/ui/shadcn-io/minimal-tiptap";
const Write = () => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return <div className="">Loading....</div>;
  }

  if (isLoaded && !isSignedIn) {
    <div className="">You must login</div>;
  }
  return (
    <div>
      <h1>Create a new post</h1>
      <form>
        <button>Add a cover image</button>
        <input type="text" placeholder="My Awesome Story" />
        <div className="">
          <label htmlFor="">Choose a category</label>
          <select name="cat" id="">
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="developnment">Developnment</option>
            <option value="databases">Databases</option>
            <option value="seo">Search Engine</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>
        <textarea name="desc" placeholder="A Short Description" id="" />
    <MinimalTiptap className="bg-white"/>
      </form>
    </div>
  );
};

export default Write;

import React, {useState} from "react";
import Postlist from "./../components/PostList";
import SideMenu from "./../components/SideMenu";


const PostListPage = () => {
  
  const [open, setOpen] = useState(false);
  return <div>
    <h1 className="mb-8 text-2xl">Developnment Blog</h1>
    <button className="md:hidden bg-blue-800 text-sm text-white px-4 py-2 rounded-2xl mb-4" onClick={() => setOpen(prev=> !prev)}>{open ? "Close" : "Filter or Search" }</button>
    <div className="flex flex-col-reverse md:flex-row gap-8 ">
      <div className="">
        <Postlist />
      </div>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <SideMenu />
      </div>
    </div>
  </div>;
};

export default PostListPage;

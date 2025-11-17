import React from "react";
import Image from "./../components/Image";
import { Link } from "react-router-dom";
import PostMenuActions from "./../components/PostMenuActions";
import Search from "./../components/Search";
import Comments from "./../components/Comments";
const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8 ">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem!
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-500">Karan Dangol</Link>
            <span>on</span>
            <Link>Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere sequi voluptatem quos,
            omnis ipsam at deleniti ab nam aliquid necessitatibus magni non maiores natus? Harum et
            quod velit ab doloremque!
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src={"postImg.jpeg"} w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laborum quod veritatis
            blanditiis fuga odit et ratione, reiciendis dicta, magni autem praesentium labore alias.
            Autem suscipit eveniet fugiat, quisquam obcaecati, asperiores distinctio reprehenderit
            mollitia nisi deleniti alias, aspernatur quasi. Nihil voluptatibus architecto
            voluptatem, quod ea quas voluptas aliquam at suscipit!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa in, voluptatum, illo
            dolorum quisquam fugit similique repellendus accusamus pariatur hic sed praesentium
            ullam laudantium quos deleniti doloribus! Unde exercitationem facilis sunt sed minus?
            Exercitationem, sunt unde nesciunt porro quas quia corrupti, ab hic dolorem minima
            aliquam modi vero minus aliquid perspiciatis suscipit molestias. Magnam eligendi
            corrupti cupiditate aliquid totam veniam. Laboriosam temporibus velit blanditiis veniam,
            aliquam consequuntur quo hic?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea hic, corporis, quia quas
            eius cupiditate unde quidem sunt beatae doloremque placeat esse? Expedita molestias
            sequi mollitia ipsa veritatis dolorem. Accusamus, a. Unde sint sed, doloremque modi, at
            ipsam minus corporis nam quaerat asperiores nesciunt excepturi quis recusandae voluptas
            sapiente mollitia impedit quidem quo neque provident voluptatibus, cumque facilis id.
            Quae culpa mollitia obcaecati maiores delectus atque asperiores vero excepturi ipsam.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, accusantium! Iste fugit
            molestiae repellendus, ad omnis doloribus nam, illum voluptate reprehenderit corrupti
            deleniti quasi laudantium eos sunt nesciunt magnam cum.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid debitis
            repudiandae inventore quam obcaecati perspiciatis veritatis soluta illo expedita
            molestias, provident voluptatum nam nisi voluptatibus, cum incidunt aspernatur suscipit.
          </p>
        </div>
        {/* menu */}
        <div className="px-4 h-max sticky top-8">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>

          <div className="flex items-center gap-8">
            <Image src="userImg.jpeg" className="size-12 rounded-full object-cover" w="48" h="48" />
            <Link className="text-blue-800">John Doe</Link>
          </div>
          <div className="flex flex-col gap-4  mt-4">
            <p className="text-sm text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline" to="/">
              All
            </Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Devlelopnment
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              SEO
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    
      <Comments />
    </div>
  );
};

export default SinglePostPage;

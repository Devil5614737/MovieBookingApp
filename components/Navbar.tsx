import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";

export const Navbar = () => {
  const router=useRouter();
  const { data: session } = useSession()
  return (
    <nav>
      <Container>
        <div className="py-4 px-3 flex justify-between items-center">
          <Link
            
            href={"/movies"}
          >
            <a className="text-white text-[1.8rem] font-bold" href="#!">
              MoviesHub
            </a>
          </Link>
          <div className="user flex items-center gap-7">
          {session&&  <Image
              src={session.user?.image as string}
              width={32}
              height={32}
              objectFit="cover"
              alt="user"
              className="rounded-full cursor-pointer"
            />}
          {!session&&  <a
        onClick={()=>router.push('/auth/signin ')}
              href="#_"
              className=" text-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="w-full relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white text-[1.4rem] ">
                  Login
                </span>
              </span>
            </a>}
            {session&&
            <a
            onClick={() => signOut({ callbackUrl: "/movies" })}
              href="#_"
              className=" text-center relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
            >
              <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
              <span className="w-full relative px-6 py-2 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                <span className="relative text-white text-[1.4rem] ">
                  Logout
                </span>
              </span>
            </a>
            }
          </div>
        </div>
      </Container>
    </nav>
  );
};

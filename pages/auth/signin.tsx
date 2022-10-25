import React from "react";
import { getProviders, getSession, signIn } from "next-auth/react";

export default function Login({providers}:any) {
  return (
    <div className="w-[100vw] h-[100vh] bg-login-bg gap-5 bg-cover bg-center grid place-content-center">
      <div className='bg-overlay p-[3rem] rounded-md' >
      {Object.values(providers).map((provider:any) => (
          <a
          onClick={() =>  signIn(provider.id,{callbackUrl:'/movies'})}
          key={provider.name}
          href="#_"
          className=" text-center w-full relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
        >
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
          <span className="w-full relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white text-[1.8rem] ">
              Login with {provider.name}
            </span>
          </span>
        </a>
      ))}
    
      </div>
      
    </div>
  );
}




export async function getServerSideProps(context:any) {
  const { req, res } = context
  const providers = await getProviders()

  const session = await getSession({ req })

  if (session && res) {
    res.statusCode = 302
    res.setHeader('Location', '/')
    return {
      props: {
        session,
        providers,
      },
    }
  }

  return {
    props: {
      providers,
    },
  }
}
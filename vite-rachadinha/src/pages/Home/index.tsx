import React, { useState } from "react";
import FloatMenu from "../../../components/menu";
import { SignUp } from "../SignUp";

const Home = () => {
  const [open, setOpen] = useState(false);
  const signUp: any = document.querySelector("signUp");

  function timeout(delay: number) {
    return new Promise((res) => setTimeout(res, delay));
  }
  return (
    <>
      <div className="relative">
        <div className="fixed top-4 left-0 right-0 ml-5 mr-5 bg-white h-16 p-5 rounded">
          <div className="grid justify-items-end w-full">
            <a href="">
              <img src="./menu.png" alt="" />
            </a>
          </div>
        </div>
        <div className="bg-purple-300 pt-24 pl-5 pe-5  flex items-center flex-col">
          <div className="max-w-lg">
            <div className="flex gap-5 items-center justify-center ">
              <div className="text-5xl mb-1">
                <p className="text-white font-serif">Racha</p>
                <p className="text-white font-serif">Dinha</p>
              </div>
              <p className="text-gray-300 text-sm">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
            </div>
            <img src="./hand_wallet.png" alt="" />
          </div>
        </div>
        <div className="bg-white flex flex-col gap-16 pr-5 pl-5 pt-16 pb-16 w-full items-center">
          <div className="max-w-lg">
            <div className="flex justify-between gap-4 items-center">
              <div className="bg-gray-800 p-1 h-24 w-64 rounded-2xl flex justify-center items-center">
                <img src="./eyes_home.png" alt="" />
              </div>
              <p className="text-gray-500 text-sm">
                Fique de olho em seus amigos, cobre eles e os faça chorar de
                tanto cobrar.{" "}
              </p>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <p className="text-gray-500 text-sm">
                Seu amigo não sabe quanto deve? mande um extrado da rachadinha.{" "}
              </p>
              <div className="bg-gray-800 p-1 h-24 w-64 rounded-2xl flex justify-center items-center">
                <img src="./chat_home.png" alt="" />
              </div>
            </div>
            <div className="flex justify-between gap-4 items-center">
              <div className="bg-gray-800 p-1 h-24 w-64 rounded-2xl flex justify-center items-center">
                <img src="./money_home.png" alt="" />
              </div>
              <p className="text-gray-500 text-sm">
                Calcule bem suas finanças com rachadinha o melhor local para
                agiotar
              </p>
            </div>
          </div>

          <button
            className="w-full p-3 bg-purple-300 hover:bg-purple-500 duration-700 border-none font-serif max-w-lg rounded-lg text-white"
            name="button"
            onClick={() => setOpen(true)}
          >
            Cadastre-se
          </button>
        </div>
        <footer className="bg-purple-300 p-3 text-white">
          <a
            href="https://github.com/Pedrohsv1/Rachadinha/blob/main/LICENSE"
            className="hover:text-gray-300 duration-700"
          >
            ₢ Rachadinha
          </a>
        </footer>
      </div>
      {open && <SignUp open={open} onClose={async ()  => {await timeout(1000); setOpen(false)}} />}
    </>
  );
};

export default Home;

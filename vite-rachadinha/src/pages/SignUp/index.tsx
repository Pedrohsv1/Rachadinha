import "animate.css";
import { useEffect, useRef, useState } from "react";

interface ISingUpProps {
  open: boolean;
  onClose: () => void;
}

export const SignUp = (props: ISingUpProps) => {
  const signUpRef = useRef<HTMLDivElement>(null);
  const element = document.querySelector(".my-element");
  element?.classList.add("animate__animated", "animate__slideInUp");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        signUpRef.current &&
        !signUpRef.current.contains(event.target as Node)
      ) {
        
        element?.classList.add("animate__slideInDown");
        element?.classList.remove("animate__slideInUp");
        props.onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [signUpRef]);
  return (
    <>
      {props.open == true && (
        <div
          className="bg-white w-full h-[68%] p-8 animate__slideInUp animate__animated fixed bottom-0 left-0 rounded-t-3xl my-element"
          ref={signUpRef}
        >
          <p>Oi Lindo</p>
        </div>
      )}
    </>
  );
};

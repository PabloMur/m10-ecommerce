"use client";
import FormBtn from "../ui/buttons/FormBtn";
import Input from "../ui/inputs/Input";
import CodeSent from "../modals/CodeSent";
import Loader from "../ui/Loader";
import { useLogUser } from "@/hooks";
import { loginFormAtom } from "@/atoms";
import { RecoilState, useRecoilValue } from "recoil";
export default function LoginForm() {
  const logUser = useLogUser();
  const active = useRecoilValue(loginFormAtom);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const email = target.email.value;
    logUser(email);
  };
  return (
    active && (
      <div className="bg-white w-2/3 h-full flex justify-center items-center relative">
        <Loader />
        <CodeSent></CodeSent>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <p className="text-teal-800 m-3 font-bold">Ingresa tu email</p>
            <Input
              type="text"
              name="email"
              placeholder="email"
              required={true}
            />
          </label>
          <FormBtn>Enviar</FormBtn>
        </form>
      </div>
    )
  );
}
function useRecoliValue(loginFormAtom: RecoilState<boolean>) {
  throw new Error("Function not implemented.");
}

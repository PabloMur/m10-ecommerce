"use client";
import { useRecoilValue } from "recoil";
import FormBtn from "../ui/buttons/FormBtn";
import Input from "../ui/inputs/Input";
import { getTokenAtom } from "@/atoms";
import { useGetToken } from "@/hooks";
import Loader from "../ui/Loader";

export default function getTokenForm() {
  const active = useRecoilValue(getTokenAtom);
  const getToken = useGetToken();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const target = e.target;
    const code = target.code.value;
    getToken(code);
  };
  return (
    active && (
      <div className="bg-white w-2/3 h-full flex justify-center items-center relative">
        <Loader />
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            <p className="text-teal-800 m-3 font-bold">Ingresa el codigo</p>
            <Input
              type="text"
              name="code"
              placeholder="- - - - -"
              required={true}
            ></Input>
          </label>
          <FormBtn>Enviar</FormBtn>
        </form>
      </div>
    )
  );
}

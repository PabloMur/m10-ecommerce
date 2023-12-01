"use client";
import Input from "../ui/inputs/Input";
import FormBtn from "@/components/ui/buttons/FormBtn";
import { useGetUserData } from "@/hooks";
import { useEffect, useState } from "react";

const ProfileForm = () => {
  const getUser = useGetUserData();
  const [name, setName] = useState("test name");
  const [address, setAddress] = useState("test address");
  const [phone, setPhone] = useState("123456789");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUser();
        // Actualizar el estado con los datos del usuario
        setName(userData.name || "test name");
        setAddress(userData.address || "test address");
        setPhone(userData.phone || "123456789");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, [getUser]);

  return (
    <form className="sm:w-1/3">
      <h2 className="text-black font-bold text-3xl mb-2">Perfil</h2>
      <label htmlFor="">
        <p className="text-black mt-2">Nombre Completo</p>
        <Input type="text" name="name" placeholder={name}></Input>
      </label>
      <label htmlFor="">
        <p className="text-black mt-2">Direccion</p>
        <Input type="text" name="address" placeholder={address}></Input>
      </label>
      <label htmlFor="">
        <p className="text-black mt-2">Telefono</p>
        <Input type="text" name="phone" placeholder={phone}></Input>
      </label>
      <FormBtn>Guardar</FormBtn>
    </form>
  );
};

export { ProfileForm };

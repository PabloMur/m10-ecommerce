import Input from "../ui/inputs/Input";
import FormBtn from "@/components/ui/buttons/FormBtn";
const ProfileForm = () => {
  const testName = "test name";
  const testAddress = "test address";
  const testPhone = "123456789";
  return (
    <form className="sm:w-1/3">
      <h2 className="text-black font-bold text-3xl mb-2">Perfil</h2>
      <label htmlFor="">
        <p className="text-black mt-2">Nombre Completo</p>
        <Input type="text" name="name" placeholder={testName}></Input>
      </label>
      <label htmlFor="">
        <p className="text-black mt-2">Direccion</p>
        <Input type="text" name="address" placeholder={testAddress}></Input>
      </label>
      <label htmlFor="">
        <p className="text-black mt-2">Telefono</p>
        <Input type="text" name="phone" placeholder={testPhone}></Input>
      </label>
      <FormBtn>Guardar</FormBtn>
    </form>
  );
};

export { ProfileForm };

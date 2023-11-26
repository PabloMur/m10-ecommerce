import LoginBanner from "@/components/banners/LoginBanner";
import LoginForm from "@/components/forms/LoginForm";
import GetTokenForm from "@/components/forms/GetTokenForm";
export default function LoginPage() {
  return (
    <div className="h-[90vh] bg-white flex flex-grow justify-center items-center">
      <LoginBanner />
      <GetTokenForm />
      <LoginForm />
    </div>
  );
}

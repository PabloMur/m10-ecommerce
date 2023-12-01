import { ProfileForm } from "@/components/forms/ProfileForm";
import Loader from "@/components/ui/Loader";

export default function ProfilePage() {
  return (
    <div className="h-[90vh] bg-white flex justify-center items-center relative">
      <Loader></Loader>
      <ProfileForm></ProfileForm>
    </div>
  );
}

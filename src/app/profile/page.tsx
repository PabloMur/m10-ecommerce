"use client";
import { ProfileForm } from "@/components/forms/ProfileForm";
import Loader from "@/components/ui/Loader";
import { useProtectedPage } from "@/hooks";

export default function ProfilePage() {
  const protection = useProtectedPage();
  protection();
  return (
    <div className="h-[90vh] bg-white flex justify-center items-center relative">
      <Loader></Loader>
      <ProfileForm></ProfileForm>
    </div>
  );
}

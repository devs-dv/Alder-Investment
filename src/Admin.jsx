import { LoginForm } from "@/components/LoginForm";

export default function Admin() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-[400px] mx-auto">
        <LoginForm />
      </div>
    </div>
  );
}

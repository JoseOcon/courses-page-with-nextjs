import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 z-1">
      <h1 className="text-4xl font-semibold text-white">Welcome back!👋</h1>
      <p className="text-lg text-gray-400">
        Please sign in to your account to continue.
      </p>

      <SignIn />
    </div>
  );
}

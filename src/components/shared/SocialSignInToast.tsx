
// "use client";

// import { useEffect } from "react";
// import { useSession } from "@/lib/auth-client";
// import { toast } from "@heroui/react";

// export default function SocialSignInToast() {
//   const { data: session, isPending } = useSession();

//   useEffect(() => {
//     if (isPending || !session?.user) return;

//     const provider = sessionStorage.getItem(
//       "social-signin-success"
//     );

//     if (!provider) return;

//     sessionStorage.removeItem("social-signin-success");

//     const providerName =
//       provider === "google" ? "Google" : "GitHub";

//     toast.success(`${providerName} সাইন ইন সফল`, {
//       description: "স্বাগতম! আপনি সফলভাবে সাইন ইন করেছেন।",
//       timeout: 5000,
//     });
//   }, [session, isPending]);

//   return null;
// }

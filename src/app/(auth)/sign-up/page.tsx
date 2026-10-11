"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
  toast,
} from "@heroui/react";
import { signIn, signUp } from "@/lib/auth-client";
import { Icon } from "@iconify/react";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const data: Record<string, string> = {};

  formData.forEach((value, key) => {
    data[key] = value.toString();
  });

  // Password match check
  if (data.password !== data.confirmPassword) {
    toast.danger("সাইন আপ ব্যর্থ", {
      description: "দুটি পাসওয়ার্ড একই নয়।",
      timeout: 5000,
    });
    return;
  }

  // Sign Up
  try {
    const { error } = await signUp.email({
      name: data.name,
      email: data.email,
      password: data.password,
      callbackURL: "/",
    });

    // Error handling
    if (error) {
      console.error("Sign-up error:", error);
      if (
        error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL"
      ) {
        toast.danger("সাইন আপ ব্যর্থ", {
          description:
            "এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট তৈরি করা হয়েছে। সাইন ইন করুন।",
          timeout: 5000,
        });
      } else {
        toast.danger("সাইন আপ ব্যর্থ", {
          description:
            "অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন।",
          timeout: 5000,
        });
      }
      return;
    }

    // Success message
    toast.success("সাইন আপ সফল", {
      description: "স্বাগতম! আপনার অ্যাকাউন্ট তৈরি হয়েছে।",
      timeout: 5000,
    });

    // Redirect to Home
    router.replace("/");
  } catch (error) {
    // console.error("Unexpected sign-up error:", error);

    toast.danger("সাইন আপ ব্যর্থ", {
      description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
      timeout: 5000,
    });
  }
};

  // const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const data: Record<string, string> = {};
  //   formData.forEach((value, key) => {
  //     data[key] = value.toString();
  //   });

  //   // Password match check
  //   if (data.password !== data.confirmPassword) {
  //     return;
  //   }

  //   // Sign Up
  //   const { data: signUpData, error } = await signUp.email({
  //     name: data.name,
  //     email: data.email,
  //     password: data.password,
  //     callbackURL: "/",
  //   });

  //   if (error) {
  //     console.error(error);
  //     return;
  //   }

  //   router.push("/");
  // };

// const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();

//   const formData = new FormData(e.currentTarget);
//   const data: Record<string, string> = {};

//   formData.forEach((value, key) => {
//     data[key] = value.toString();
//   });

//   // Password match check
//   if (data.password !== data.confirmPassword) {
//     toast.danger("সাইন আপ ব্যর্থ", {
//       description: "দুটি পাসওয়ার্ড একই নয়।",
//       timeout: 5000,
//     });
//     return;
//   }

//   try {
//     const { error } = await signUp.email({
//       name: data.name,
//       email: data.email,
//       password: data.password,
//       callbackURL: "/",
//     });

//     if (error) {
//       console.error(error);

//       toast.danger("সাইন আপ ব্যর্থ", {
//         description: "আবার চেষ্টা করুন অথবা তথ্য যাচাই করুন।",
//         timeout: 5000,
//       });
//       return;
//     }

//     toast.success("সাইন আপ সফল", {
//       description: "আপনাকে স্বাগতম!",
//       timeout: 5000,
//     });

//     router.replace("/");
//   } catch (error) {
//     console.error("Sign-up error:", error);

//     toast.danger("সাইন আপ ব্যর্থ", {
//       description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
//       timeout: 5000,
//     });
//   }
// };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        toast.danger("Google সাইন ইন ব্যর্থ", {
          description: "আবার চেষ্টা করুন।",
          timeout: 5000,
        });
        return;
      }

      toast.success("Google সাইন ইন সফল", {
        description: "স্বাগতম! আপনাকে হোম পেজে নিয়ে যাওয়া হচ্ছে।",
        timeout: 5000,
      });
    } catch (error) {
      console.error("Google sign-in error:", error);

      toast.danger("Google সাইন ইন ব্যর্থ", {
        description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        timeout: 5000,
      });
    }
  };

  const handleGithubSignIn = async () => {
    try {
      const { error } = await signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) {
        toast.danger("GitHub সাইন ইন ব্যর্থ", {
          description: "আবার চেষ্টা করুন।",
          timeout: 5000,
        });
        return;
      }

      toast.success("GitHub সাইন ইন সফল", {
        description: "স্বাগতম! আপনাকে হোম পেজে নিয়ে যাওয়া হচ্ছে।",
        timeout: 5000,
      });
    } catch (error) {
      console.error("GitHub sign-in error:", error);

      toast.danger("GitHub সাইন ইন ব্যর্থ", {
        description: "একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।",
        timeout: 5000,
      });
    }
  };



  return (
    <main className="min-h-[calc(100vh-68px)] bg-[#f4f7f3] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[400px]">

        {/* ================= HEADER ================= */}
        <div className="mb-5 text-center">
          <h1 className="text-[20px] font-bold leading-7 text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1 text-[14px] text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="rounded-[12px] border border-gray-200 bg-white px-4 py-5 shadow-sm sm:px-5">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <FieldGroup className="gap-3">

                {/* ================= NAME ================= */}
                <TextField
                  isRequired
                  name="name"
                  validate={(value) => {
                    if (value.length < 3) {
                      return "নাম কমপক্ষে ৩ অক্ষরের হতে হবে";
                    }

                    return null;
                  }}
                >
                  <Label className="text-[14px] font-medium text-gray-800">
                    নাম
                  </Label>

                  <Input
                    placeholder="যেমন: আরিফ উদ্দিন"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[14px]"
                  />

                  <FieldError className="text-[14px]" />
                </TextField>

                {/* ================= EMAIL ================= */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                  validate={(value) => {
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                      return "সঠিক ইমেইল ঠিকানা দিন";
                    }

                    return null;
                  }}
                >
                  <Label className="text-[14px] font-medium text-gray-800">
                    ইমেইল
                  </Label>

                  <Input
                    name="email"
                    placeholder="you@example.com"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[14px]"
                  />

                  <FieldError className="text-[14px]" />
                </TextField>

                {/* ================= PASSWORD ================= */}
                <TextField
                  isRequired
                  name="password"
                  type="password"
                  minLength={8}
                  validate={(value) => {
                    if (value.length < 8) {
                      return "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে";
                    }

                    if (!/[A-Z]/.test(value)) {
                      return "কমপক্ষে ১টি বড় হাতের অক্ষর থাকতে হবে";
                    }

                    if (!/[0-9]/.test(value)) {
                      return "কমপক্ষে ১টি সংখ্যা থাকতে হবে";
                    }

                    return null;
                  }}
                >
                  <Label className="text-[14px] font-medium text-gray-800">
                    পাসওয়ার্ড
                  </Label>

                  <Input
                    name="password"
                    type="password"
                    placeholder="সিক্রেট কোডটি দিন"
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[14px]"
                  />

                  <FieldError className="text-[14px]" />
                </TextField>

                {/* ================= CONFIRM PASSWORD ================= */}
                <TextField
                  isRequired
                  name="confirmPassword"
                  type="password"
                  validate={(value) => {
                    if (value !== password) {
                      return "দুই পাসওয়ার্ড মিলছে না";
                    }

                    return null;
                  }}
                >
                  <Label className="text-[14px] font-medium text-gray-800">
                    পাসওয়ার্ড নিশ্চিত করুন
                  </Label>

                  <Input
                    name="confirmPassword"
                    type="password"
                    placeholder="আবার লিখুন"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[14px]"
                  />

                  <FieldError className="text-[14px]" />
                </TextField>

              </FieldGroup>

              {/* ================= SUBMIT ================= */}
              <Fieldset.Actions className="mt-3">
                <Button
                  type="submit"
                  className="h-8 w-full bg-green-700 text-[14px] font-semibold text-white shadow-[0_2px_4px_rgba(0,0,0,0.18)] hover:bg-green-800"
                >
                  অ্যাকাউন্ট তৈরি করুন
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>

          {/* ================= DIVIDER ================= */}
          <div className="my-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-[11px] text-gray-500">
              অথবা
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* ================= SOCIAL LOGIN ================= */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              onPress={handleGoogleSignIn}
              className="h-8 border-gray-200 bg-white text-[12px] font-medium text-gray-700"
            >
              <Icon
                icon="devicon:google"
                className="text-[12px]"
              />
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              onClick={handleGithubSignIn}
              onPress={handleGithubSignIn}
              className="h-8 border-gray-200 bg-white text-[12px] font-medium text-gray-700"
            >
              <Icon
                icon="mdi:github"
                className="text-[13px]"
              />
              GitHub দিয়ে চালিয়ে যান
            </Button>


          </div>

          {/* ================= SIGN IN ================= */}
          <p className="mt-4 text-center text-[12px] text-gray-600">
            অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/sign-in"
              className="font-medium text-green-700 hover:text-green-800 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>

        {/* ================= BACK HOME ================= */}
        <div className="mt-4 text-center">
          <Link
            href="/"
            className="text-[14px] text-gray-500 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SignUp;
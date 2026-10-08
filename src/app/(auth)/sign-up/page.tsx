"use client";

import Link from "next/link";
import { FormEvent } from "react";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { signUp } from "@/lib/auth-client";

const SignUp = () => {
  // const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.currentTarget);

  //   const name = formData.get("name")?.toString() ?? "";
  //   const email = formData.get("email")?.toString() ?? "";
  //   const password = formData.get("password")?.toString() ?? "";
  //   const confirmPassword =
  //     formData.get("confirmPassword")?.toString() ?? "";

  //   if (password !== confirmPassword) {
  //     alert("পাসওয়ার্ড দুটি একই নয়");
  //     return;
  //   }

  //   const { data, error } = await signUp.email({
  //     name,
  //     email,
  //     password,
  //     callbackURL: "/",
  //   });

  //   console.log(data, error);
  // };

  // const onSubmit = async(e:) => {
  //       e.preventDefault();
  //       const formData = new FormData(e.currentTarget);
  //       const data = {};
  //       // Convert FormData to plain object
  //       formData.forEach((value, key) => {
  //           data[key] = value.toString();
  //       });

  //       const { data:signUpData, error } = await signUp.email({
  //           name: data.name,
  //           email: data.email,
  //           password: data.password,
  //           callbackURL: "/", // An optional URL to redirect to after the user signs up.
  //       });

  //       console.log(signUpData, error);
  //   };

   const onSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data: Record<string, string> = {};
    // Convert FormData to plain object
    formData.forEach((value, key) => {
      data[key] = value.toString();
    });

     const { data:signUpData, error } = await signUp.email({
            name: data.name,
            email: data.email,
            password: data.password,
            callbackURL: "/", 
        });
    
    // console.log(signUpData);
  };


  return (
    <main className="min-h-[calc(100vh-68px)] bg-[#f4f7f3] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-[323px]">

        {/* ================= HEADER ================= */}
        <div className="mb-5 text-center">
          <h1 className="text-[20px] font-bold leading-7 text-gray-900">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mt-1 text-[11px] text-gray-500">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        {/* ================= FORM CARD ================= */}
        <div className="rounded-[12px] border border-gray-200 bg-white px-4 py-5 shadow-sm sm:px-5">
          <Form onSubmit={onSubmit}>
            <Fieldset className="w-full">
              <FieldGroup className="gap-3">

                {/* Name */}
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
                  <Label className="text-[11px] font-medium text-gray-800">
                    নাম
                  </Label>

                  <Input
                    placeholder="যেমন: আরিফ উদ্দিন"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[11px]"
                  />

                  <FieldError className="text-[10px]" />
                </TextField>

                {/* Email */}
                <TextField
                  isRequired
                  name="email"
                  type="email"
                >
                  <Label className="text-[11px] font-medium text-gray-800">
                    ইমেইল
                  </Label>

                  <Input
                    placeholder="you@example.com"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[11px]"
                  />

                  <FieldError className="text-[10px]" />
                </TextField>

                {/* Password */}
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
                  <Label className="text-[11px] font-medium text-gray-800">
                    পাসওয়ার্ড
                  </Label>

                  <Input
                    placeholder="সিক্রেট কোডটি দিন"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[11px]"
                  />

                  <FieldError className="text-[10px]" />
                </TextField>

                {/* Confirm Password */}
                <TextField
                  isRequired
                  name="confirmPassword"
                  type="password"
                >
                  <Label className="text-[11px] font-medium text-gray-800">
                    পাসওয়ার্ড নিশ্চিত করুন
                  </Label>

                  <Input
                    placeholder="আবার লিখুন"
                    className="mt-1 h-8 rounded-lg border-gray-200 bg-white text-[11px]"
                  />

                  <FieldError className="text-[10px]" />
                </TextField>

              </FieldGroup>

              {/* ================= SUBMIT ================= */}
              <Fieldset.Actions className="mt-3">
                <Button
                  type="submit"
                  radius="sm"
                  className="h-8 w-full bg-green-700 text-[11px] font-semibold text-white shadow-[0_2px_4px_rgba(0,0,0,0.18)] hover:bg-green-800"
                >
                  অ্যাকাউন্ট তৈরি করুন
                </Button>
              </Fieldset.Actions>
            </Fieldset>
          </Form>

          {/* ================= DIVIDER ================= */}
          <div className="my-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-[9px] text-gray-500">
              অথবা
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* ================= SOCIAL LOGIN ================= */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant="bordered"
              radius="sm"
              className="h-8 border-gray-200 bg-white text-[9px] font-medium text-gray-700"
            >
              <span className="text-[12px]">G</span>
              Google দিয়ে চালিয়ে যান
            </Button>

            <Button
              type="button"
              variant="bordered"
              radius="sm"
              className="h-8 border-gray-200 bg-white text-[9px] font-medium text-gray-700"
            >
              <span className="text-[12px]">◉</span>
              GitHub দিয়ে চালিয়ে যান
            </Button>
          </div>

          {/* ================= SIGN IN ================= */}
          <p className="mt-4 text-center text-[10px] text-gray-600">
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
            className="text-[10px] text-gray-500 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SignUp;
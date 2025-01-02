"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js"; // Importer createClient direkte

// Initialiser Supabase-klienten her
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

const Formel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      // Indsæt formulardata i Supabase-tabellen
      const { error } = await supabase.from("catlan").insert([data]);

      if (error) {
        console.error("Supabase Insert Error:", error.message);
        alert("Kunne ikke indsende formularen. Prøv igen.");
      } else {
        console.log("Formular-data blev indsendt:", data);
        router.push("/payment"); // Redirect på succes
      }
    } catch (err) {
      console.error("Uventet fejl:", err.message);
      alert("Der opstod en uventet fejl. Prøv igen.");
    }
  };

  return (
    <div className="bg-white bg-opacity-75 h-400 w-400 rounded-12 pb-7 pt-7 ml-20">
      <h2 className="text-darkblue ml-5">FOO-TICKET</h2>
      <p className="text-darkblue ml-5 pb-5">Guest 1</p>
      <form className="flex flex-col ml-5" onSubmit={handleSubmit(onSubmit)}>
        <label>Firstname</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="text"
          placeholder="Yourname"
          {...register("firstname", { required: "Firstname is required" })}
        />
        {errors.firstname && (
          <p className="text-red-500">{errors.firstname.message}</p>
        )}

        <label>Lastname</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="text"
          placeholder="Yourlastname"
          {...register("lastname", { required: "Lastname is required" })}
        />
        {errors.lastname && (
          <p className="text-red-500">{errors.lastname.message}</p>
        )}

        <label>Phone number</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="tel"
          placeholder="+45 12345678"
          {...register("phoneNumber", {
            required: "Phone number is required",
            pattern: { value: /^[0-9]+$/, message: "Invalid phone number" },
          })}
        />
        {errors.phoneNumber && (
          <p className="text-red-500">{errors.phoneNumber.message}</p>
        )}

        <label>Email</label>
        <input
          className="bg-white mb-5 rounded-12 w-300 h-30"
          type="email"
          placeholder="yourname@idont.know"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
          })}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        <button
          type="submit"
          className="bg-darkblue text-white mt-5 rounded-12 w-300 h-30"
        >
          Go To Payment
        </button>
      </form>
    </div>
  );
};

export default Formel;

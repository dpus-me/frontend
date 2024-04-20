"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function User() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);
}

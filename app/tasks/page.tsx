"use client";

import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState();

  return (
    <>
      <Head>
        <title>oi</title>
      </Head>
      <main>
        <h1>oi</h1>
      </main>
    </>
  );
}

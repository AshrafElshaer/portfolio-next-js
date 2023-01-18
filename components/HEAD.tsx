import Head from "next/head";
import React from "react";

type Props = {
  path?: string;
  description: string;
};

function HEAD({ path = "", description }: Props) {
  return (
    <Head>
      <title>Ashraf Elshaer | {path}</title>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/memoji.png' />
    </Head>
  );
}

export default HEAD;

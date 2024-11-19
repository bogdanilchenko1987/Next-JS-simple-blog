"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h3> Oops!! {error.message}</h3>;
}

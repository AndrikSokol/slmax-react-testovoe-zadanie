"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1 className="h-screen"> Что-то пошло не по плану!!! {error.message}</h1>;
}

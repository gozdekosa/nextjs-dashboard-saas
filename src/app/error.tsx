"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <h2>Bir hata oluştu</h2>

      <button onClick={() => reset()}>
        Tekrar Dene
      </button>
    </div>
  );
}
export default function StepsCounter(): React.ReactNode {
  return (
    <section className="flex w-full items-center justify-evenly gap-2 py-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="rounded-full border-2 border-gray-300 bg-white px-4 py-2">
          1
        </p>
        <p>Personal Info</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="rounded-full border-2 border-gray-300 bg-white px-4 py-2">
          2
        </p>
        <p>Location</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="rounded-full border-2 border-gray-300 bg-white px-4 py-2">
          3
        </p>
        <p>Schedule</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="rounded-full border-2 border-gray-300 bg-white px-4 py-2">
          4
        </p>
        <p>Confirmation</p>
      </div>
    </section>
  );
}

export default function Profile() {
  return (
    <div className="w-full flex flex-col items-center shadow p-5 rounded-lg">
      <div className="w-[80px] h-[80px] rounded-full bg-black"></div>
      <div className="mt-3 mb-2">profileName</div>
      <div className="text-sm">profileIntroduction</div>
    </div>
  );
}
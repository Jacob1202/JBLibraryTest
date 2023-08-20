export default function WelcomeText() {
  return (
    <>
      <div className="h-[120px] w-fit overflow-hidden">
        <ul className={`animate-move flex flex-col`}>
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl font-semibold text-blue-700`}
          >
            Hello world!
          </li>
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl  font-semibold text-blue-700`}
          >
            Dzień dobry!
          </li>
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl  font-semibold text-blue-700`}
          >
            Buongiorno!
          </li>
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl  font-semibold text-blue-700`}
          >
            こんにちは!
          </li>
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl  font-semibold text-blue-700`}
          >
            Guten Tag!
          </li>
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl  font-semibold text-blue-700 `}
          >
            السلام عليكم
          </li>
          {/* -- Filling in last --*/}
          <li
            className={`animate-liMove my-[30px] h-full w-fit text-6xl font-semibold text-blue-700`}
          >
            Hello world!
          </li>
        </ul>
      </div>
    </>
  );
}

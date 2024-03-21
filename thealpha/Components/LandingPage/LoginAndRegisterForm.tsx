export default function LoginAndRegisterForm({
  passedFunction,
}: {
  passedFunction: (formdata: FormData) => void;
}): JSX.Element {
  return(
  <div className="w-full h-full flex justify-center items-center bg-white">
    <form
      className="flex flex-col justify-center align-center"
      action={passedFunction}
    >
      <label htmlFor="email">Email</label>
      <input
        className="border-black border-2 "
        type="email"
        name="email"
        id="email"
      ></input>
      <label htmlFor="password">Password</label>
      <input
        className="border-black border-2"
        type="password"
        id="password"
        name="password"
      ></input>
      <div className="flex justify-center  items-center">
        <button
          className="text-black bg-blue-600 border-black border-2 rounded-lg mt-3 w-1/2 h-10"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
  )
}

import logo from '../assets/logo.svg'

export const Header = () => {
  return (
    <header className=" h-[200px] flex flex-col items-center justify-center bg-gray-900 ">
      <div className="flex gap-2 justify-center">
        <img src={logo} alt="" />
        <h1 className="font-roboto text-[2.5rem] font-bold text-purple-primary">
          to<span className="text-blue-secondary">do</span>
        </h1>
      </div>
    </header>
  )
}

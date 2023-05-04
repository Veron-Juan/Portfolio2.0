import MenuHeader from "./components/MenuHeader"



function Header () {
  return (
    <header className='fixed top-0 left-0 right-0 z-30 flex w-full items-center  py-4 backdrop-blur-sm transition-all duration-200 max-w-7xl mx-auto '>
      <div className='mx-auto flex w-full max-w-4xl items-center justify-center gap-4 pr-5 '>
        
        <MenuHeader/>
        
      </div>
    </header>
  )
}

export default Header
import Logo from './components/reusable/Logo'
import Container from './components/reusable/Container'

const App = () => {
  return (
    <>
      <div className='bg-black'>

        <main className="text-white min-h-screen flex flex-col justify-center bg-black">

          <div className='bg-black/30 select-none backdrop-blur-md sticky top-0 p-4'>
            <Container>
              <Logo toRight='left-0' textSize='text-3xl' barHeight='h-1 md:h-1.5' />
            </Container>
          </div>

          <div className='p-4'>
            <Container>
              <h1 className='selection:text-black selection:bg-white text-lg font-mono text-white font-extrabold md:text-lg'>
                {"Just A Fullstuck Developer From Indonesia"}
              </h1>
              <div className='select-none mt-4 space-y-2 text-white/60 font-medium'>
                <p>{"I'm Vocational High School Student Of Software Engineer,"}</p>
                <p>{"Interest In Frontend Development, UI & UX Design, And Problem Solving."}</p>
                <p>{"Open To Collaborate With Your Team :)"}</p>
              </div>
            </Container>
          </div>

        </main>

        <div className='h-screen bg-green-600'>

        </div>

      </div>
    </>
  )
}

export default App

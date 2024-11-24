import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Suspense } from 'react';

function App() {
  return (
    <div className="App flex flex-col min-h-screen bg-slate-200">
      <div className="navbar bg-indigo-800 text-zinc-200 text-center relative">
        <div className='relative h-36'>
          <h1 className='bg-gradient-to-br from-amber-600 to-emerald-700 inline-block text-transparent bg-clip-text text-8xl p-5'>SportCenter</h1>
          <NavLink to="/login" className='absolute right-5 p-5 bg-fuchsia-300 text-zinc-700 rounded-lg shadow-md aria-[current=page]:bg-fuchsia-500 top-1/2 -translate-y-1/2'>Your account</NavLink>
        </div>
        <Navbar elements={[
          { content: 'Home', url: '/' },
          { content: 'Products', url: '/products' },
          { content: 'About', url: '/about' }
        ]} />
      </div>
      <main className='flex-grow flex-1'>
        <Suspense fallback={<p>Please wait...</p>}>
          <Outlet />
        </Suspense>
      </main>
      <footer className='bg-indigo-900 text-zinc-400 border-t text-center p-2'>
        <p>&copy; 2024 SportCenter</p>
        <p>Created with ❤️</p>
      </footer>
    </div>
  );
}

export default App;

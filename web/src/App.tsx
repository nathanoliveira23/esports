import './styles/main.css';
import { MagnifyingGlassPlus } from 'phosphor-react';
import logo from './assets/logo.svg';
import apex from './assets/apex.png';
import csgo from './assets/csgo.png';
import dota2 from './assets/dota2.png';
import fortnite from './assets/fortnite.png';
import lol from './assets/lol.png';
import warcraft from './assets/warcraft.png';

function App() {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logo} alt="logo" />
      <h1 className='text-6xl text-white font-black mt-20'>
        Seu <span className='text-transparent bg-gradient bg-clip-text'>duo</span> está aqui.
      </h1>
      <div className='grid grid-cols-6 gap-6 mt-16'>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={apex} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Apex</strong>
            <span className='text-zinc-300 text-sm block'>4 anúnicios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={fortnite} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Fortnite</strong>
            <span className='text-zinc-300 text-sm block'>4 anúnicios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={lol} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>League of Legends</strong>
            <span className='text-zinc-300 text-sm block'>4 anúnicios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={csgo} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>CS:GO</strong>
            <span className='text-zinc-300 text-sm block'>4 anúnicios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={warcraft} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Warcraft</strong>
            <span className='text-zinc-300 text-sm block'>4 anúnicios</span>
          </div>
        </a>
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={dota2} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block'>Dota 2</strong>
            <span className='text-zinc-300 text-sm block'>4 anúnicios</span>
          </div>
        </a>
      </div>
      <div className='pt-1 bg-gradient mt-8 self-stretch rounded-lg overflow-hidden'>
        <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
          <div>
            <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
            <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className='py-3 px-4 flex items-center gap-3 bg-violet-500 hover:bg-violet-600 text-white rounded'>
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App;

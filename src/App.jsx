import { Post } from "./components/Post"
import './global.css'
import { Header } from "./components/Header"
import style from './App.module.css'
import { SideBar } from "./components/SideBar"
export function App() {
  return (
    <div>
      <Header/>

      <div className={style.wrapper}>
        <SideBar />
        <main>
          <Post author="Gabriel Melo" content="Sou bonito, sou gostoso, jogo bola e danço."/>
          <Post author="Caetano" content="Um dia frio, um bom lugar pra ler um livro."/>
        </main>
      </div>
      
    </div>
  )
}



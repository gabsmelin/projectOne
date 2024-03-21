import { Post } from "./components/Post"
import './global.css'
import { Header } from "./components/Header"
import style from './App.module.css'
import { SideBar } from "./components/SideBar"

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/85140913?v=4",
      name: "Gabriel Melo",
      role: "Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-20 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/129622946?v=4",
      name: "Yuri Ikegwuonu",
      role: "Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2024-03-08 18:00:00')
  }
]


export function App() {
  return (
    <div>
      <Header/>

      <div className={style.wrapper}>
        <SideBar />
        <main>
          {post.map(post => {
            return (
              <Post 
                author={post.author} 
                content={post.content}
                publishedAt={post.publishedAt}

              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}



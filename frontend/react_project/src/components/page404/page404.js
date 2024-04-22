import "./page404.scss"

import { useRouteError } from "react-router-dom"

export default function Page404() {
  const error = useRouteError()
  
  return (
    <>
      <div className="P404">
        <img src="https://st1.zr.ru/_ah/img/DQotnj-kXMqQs92s_A78CQ=s800" />
        <h1>Не тот роутер выбрал, дружище</h1>
        <h2>Ты выбрал дверь под номером {error.status}, c {error.statusText} в этой комнате</h2>
        <h2>Малышь,беги, иначе с тобой случиться {error.data}</h2>
      </div>
    </>
  ) 
}
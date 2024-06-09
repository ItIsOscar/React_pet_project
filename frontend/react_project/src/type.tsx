import React from "react"

interface Props {
  title: string
}

export default function TypeScript({title} : Props) {
  return <h1>{title}</h1>
}
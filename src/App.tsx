function App() {
  return (
    <div class={"h-full flex flex-col justify-center items-center gap-12"}>
      <div class={"flex flex-col gap-2 justify-center items-center"}>
        <h1 class={"text-5xl font-bold text-slate-800"}>Amy Buchert</h1>
        <p class={"text-slate-600"}>I make art.</p>
      </div>
      <ul class={"flex gap-6"}>
        <li>
          <a
            class={
              "text-blue-500 hover:underline hover:text-blue-600 active:text-blue-700 transition-all"
            }
            href="https://www.artworkarchive.com/profile/amy-buchert"
            target={"_blank"}
          >
            Portfolio and Contact
          </a>
        </li>
        <li>
          <a
            class={
              "text-blue-500 hover:underline hover:text-blue-600 active:text-blue-700 transition-all"
            }
            href="https://instagram.com/amybuchert"
            target={"_blank"}
          >
            Follow me on Instagram
          </a>
        </li>
      </ul>
    </div>
  )
}

export default App

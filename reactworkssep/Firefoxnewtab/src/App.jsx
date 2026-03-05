function App() {
  return (
    <div className="min-h-screen bg-[#2b2a33] text-white">

      <div className="max-w-[1150px] mx-auto px-6 py-4">

        <Header />
        <SearchBar />
        <Shortcuts />

        <h2 className="mt-10 mb-4 text-lg font-semibold">
          Thought-provoking stories
        </h2>

        <StoryGrid />

      </div>

      <CustomizeButton />

    </div>
  )
}
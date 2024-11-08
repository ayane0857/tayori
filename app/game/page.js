'use client'

import { useState } from 'react'

const games = [
  {
    id: 1,
    name: "よしよしゲーム",
    description: "たよりさんをよしよしできます",
    iframeUrl: "./game.html"
  },
  {
    id: 2,
    name: "お菓子上げゲーム",
    description: "たよりさんにお菓子を上げれます",
    iframeUrl: "https://tayorig.pages.com/"
  }
]

export default function GamesList() {
  const [selectedGame, setSelectedGame] = useState(null)

  const openGameDetails = (game) => {
    setSelectedGame(game)
  }

  const closeGameDetails = () => {
    setSelectedGame(null)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">たよりゲーム一覧</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openGameDetails(game)}
          >
            <h2 className="text-xl font-semibold mb-2">{game.name}</h2>
            <p className="text-gray-600">{game.description}</p>
          </div>
        ))}
      </div>
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-4xl w-full">
            <div className="space-y-4">
              <iframe
                src={selectedGame.iframeUrl}
                className="w-full h-96 rounded-lg"
                title={selectedGame.name}
              />
              <div className="text-center">
                <h2 className="text-2xl font-bold">{selectedGame.name}</h2>
                <p className="text-gray-600 mt-2">{selectedGame.description}</p>
              </div>
              <button
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={closeGameDetails}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
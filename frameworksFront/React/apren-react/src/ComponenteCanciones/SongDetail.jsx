import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

function SongDetail() {
  return (
    <div>
        <h2>Detalles</h2>
        <SongLyric/>
        <SongArtist/>
    </div>
  )
}

export default SongDetail
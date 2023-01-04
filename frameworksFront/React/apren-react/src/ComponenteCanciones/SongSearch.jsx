import React, { useState } from 'react'
import SongDetail from './SongDetail'
import SongForm from './SongForm'

function SongSearch() {
 
  const [search, setSearch] = useState(null)
  const [lyric, setLyric] = useState(null)
  const [bio, setBio] = useState(null)
  const [loading, setLoading] = useState(null)




  return (
    <div>
      <h2>SongSearch</h2>
      <SongForm/>
      <SongDetail/>l
      </div>
  )
}

export default SongSearch
import LUTCard from './LUTCard'

const luts = [
  { id: 1, name: 'Cinematic Warm', category: 'Cinematic', compatibility: ['Premiere', 'DaVinci'] },
  { id: 2, name: 'Technical Rec709', category: 'Technical', compatibility: ['Premiere', 'Final Cut', 'DaVinci'] },
  { id: 3, name: 'Creative Neon', category: 'Creative', compatibility: ['Premiere', 'After Effects'] },
  // Add more LUTs as needed
]

export default function LUTGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {luts.map((lut) => (
        <LUTCard key={lut.id} lut={lut} />
      ))}
    </div>
  )
}


import { Carroussel } from "../components/Carroussel"

const Suggestions = () => {
  return (
    <div className="p-6" id="Suggestions">
      <p className="text-3xl font-semibold text-primary">Recomendados</p>
      <Carroussel />
    </div>
  )
}

export { Suggestions }
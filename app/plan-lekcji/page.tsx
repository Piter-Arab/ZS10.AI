import Hero from "@/components/Hero"
import LessonInfo from "@/components/LessonInfo"

export default function page() {
  return (
    <div className="w-full">
      <Hero title="Plan Lekcji" />
      <div className="w-full flex flex-col items-center mt-5">
        <p className="pb-3">Wybierz poniżej swoją klasę</p>
        <LessonInfo />
      </div>
    </div>
  )
}

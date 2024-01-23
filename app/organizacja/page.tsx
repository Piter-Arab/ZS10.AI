import LessonInfo from "@/components/LessonInfo"


export default function page() {
  return (
    <div className="w-full flex flex-col items-center">
      <h3 className="text-4xl pb-3 pt-8">Plan Lekcji</h3>
      <p className="pb-3">Wybierz poniżej swoją klasę</p>
      <LessonInfo />
    </div>
  )
}

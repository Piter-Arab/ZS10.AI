import { lessons } from "@/constants/Lessons"

export default function LessonRender() {
  return (
    <table className="odd:bg-neutral-400 even:bg-white font-mono">
      <tbody>
        <tr>
          <td>NR lekcji</td>
          <td>Sala</td>
          <td>Nazwa</td>
        </tr>
        {lessons.map((lesson) => (
          <tr className="flex flex-row gap-5">
            <td>{lesson.id}</td>

            <td>{lesson.lessonRoom}</td>

            <td>{lesson.lessonName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

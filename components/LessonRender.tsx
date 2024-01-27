import { LessonRenderProps } from "@/types/LessonRenderProps";
import { lessonTable } from "@/constants/lessonTable";
import { Days } from "@/constants/Days";

export default function LessonRender({ classCode }: LessonRenderProps) {
  const convertedClassCode = convertClassCode(classCode)
  const rows = [];
  for (let lesson = 0; lesson < 4; lesson++) {
    const cols = [];
    for (let day = 0; day < 5; day++) {
      if (lessonTable[convertedClassCode][day].plan[lesson]) {
        cols.push(lessonTable[convertedClassCode][day].plan[lesson])
      } else {
        cols.push(undefined)
      }
    }
    rows.push(cols);
  }

  return (
    <table className="font-mono table-auto text-gray-300">
      <thead>
        <tr>
          {Days.map(day => (
            <th>{day.dayName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr className="odd:bg-gray-800/50">
            {row.map(col => (
              <td className="p-2">
                {col?.name ? `${col.name} (${col.room})` : ''}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function convertClassCode(code: string) {
  const firstLetter = code.charAt(0);
  const codeWithoutFirstLetter = code.slice(1)
  const convertedCode = codeWithoutFirstLetter + firstLetter

  return convertedCode
}
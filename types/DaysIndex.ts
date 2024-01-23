export type DaysIndex = {
  dayName: string;
  classLessons: {
    className: string
    lessons: {
      lessonId: number;
      lessonName: string;
    }
  }
}
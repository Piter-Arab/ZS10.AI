import { Lesson } from "./Lesson";

export interface LessonTable {
  day: string;
  classes: {
    [className: string]: {
      [lessonNum: string]: Lesson;
    };
  };
}
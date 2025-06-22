export function basic5() {
  enum DayOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }

  const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;
  };

  return {
    DayOfWeek,
    isWeekend,
  };
}

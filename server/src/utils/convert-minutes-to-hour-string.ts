export function convertMinutesToHourString(minutesAmoutn: number) {
  const hours = Math.floor(minutesAmoutn / 60);
  const minutes = minutesAmoutn % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
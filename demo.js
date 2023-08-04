function calculateDaysBetweenDates(date1, date2) {
  const diffInMs = Math.abs(date2 - date1);
  return diffInMs / (1000 * 60 * 60 * 24);
}

const date1 = new Date('2020-01-01');
const date2 = new Date('2020-01-02');
const daysBetweenDates = calculateDaysBetweenDates(date1, date2);
console.log(daysBetweenDates); // 1

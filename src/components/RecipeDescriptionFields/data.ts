const timesList = [];

for (let i = 5; i <= 120; i += 5) {
  timesList.push(i);
}

export const cookingTimesList = timesList.map((time) => {
  return { value: time.toString(), label: time + "min" };
});

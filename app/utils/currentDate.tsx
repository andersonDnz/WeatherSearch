export const getCurrentDate = () => {
  const currentDate = new Date().toLocaleDateString('pt-Br', {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"   
  })
  return currentDate;
}
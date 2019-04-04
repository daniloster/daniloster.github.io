const LANG_DATE_FORMAT = "en-US"
const OPTIONS_DATE_FORMAT = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}

export default function formatDate(date) {
  return date.toLocaleDateString(LANG_DATE_FORMAT, OPTIONS_DATE_FORMAT)
}

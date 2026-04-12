export function formatCurrency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(value);
}

export function formatShowDate(dayOffset, label) {
  const date = new Date();
  date.setDate(date.getDate() + dayOffset);

  return {
    label: label === "Tomorrow" ? "Tmrw" : label,
    day: date.getDate()
  };
}

export function formatBookingTimestamp(isoDate) {
  const date = new Date(isoDate);
  return date.toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}


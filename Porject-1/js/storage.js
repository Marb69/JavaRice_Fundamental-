export let data = [];

export function SetItem() {
  localStorage.setItem("task", JSON.stringify(data));
}

export function GetItem() {
  const stored = localStorage.getItem("task");
  if (stored) {
    data = JSON.parse(stored);
  } else {
    data = [];
  }

  return data;
}

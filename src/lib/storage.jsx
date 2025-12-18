const KEY = "tasks";
const VERSION = "schemaVersion";
const CURRENT = 1;

export function loadTasks() {
  return JSON.parse(localStorage.getItem(KEY) || "[]");
}

export function saveTasks(tasks) {
  localStorage.setItem(KEY, JSON.stringify(tasks));
  localStorage.setItem(VERSION, CURRENT);
}

let tasks = [
  { id: 1, title: 'Naučiti Vue 3', done: false },
  { id: 2, title: 'Napraviti SPA projekt', done: false },
  { id: 3, title: 'Predati zadatak', done: false }
]

export function getTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...tasks])
    }, 500)
  })
}

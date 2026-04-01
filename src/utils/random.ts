export function shuffled<T>(items: readonly T[]): T[] {
  const arr = [...items]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

export function pickRandom<T>(items: readonly T[]): T | undefined {
  if (items.length === 0) return undefined
  const index = Math.floor(Math.random() * items.length)
  return items[index]
}

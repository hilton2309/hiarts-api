const types = ['normal', 'color'] as const

type Type = typeof types[number]

export { types, Type }
const categories = ['admin', 'editor', 'normal'] as const

type Category = typeof categories[number]

export { categories, Category }
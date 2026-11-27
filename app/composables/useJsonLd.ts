export function useJsonLd(
  schema: Record<string, unknown>,
  key: string,
) {
  useHead({
    script: [
      {
        key: `ld-${key}`,
        type: 'application/ld+json',
        innerHTML: JSON.stringify(schema),
      },
    ],
  })
}

import { siteData } from '~/data/site'

export function useSite() {
  const config = useRuntimeConfig()
  return {
    ...siteData,
    url: (config.public.siteUrl as string).replace(/\/$/, ''),
  }
}

export type SiteInfo = ReturnType<typeof useSite>

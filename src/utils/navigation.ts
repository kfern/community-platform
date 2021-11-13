import { remoteConfig } from './firebase'

export async function getExternalLinks() {
  await remoteConfig.fetchAndActivate()
  return JSON.parse(remoteConfig.getValue('externalLinks').asString())
}

remoteConfig.defaultConfig.externalLinks = JSON.stringify([
  {
    title: 'Bazar',
    link: 'https://bazar.preciousplastic.com/',
  },
  {
    title: 'Global Site',
    link: 'https://preciousplastic.com/',
  },
])

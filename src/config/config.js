/**
 *
 * This is the project configuration, feel free to edit the values
 *
 * @type {{application: {name: string, search: {placeholders: [*]}, meta: {author: string, description: string, keywords: string, themeColor: string}}, twitch: {baseUrl: string, apiKey: string, pullingTime: number}}}
 */
const config = {
  'application': {
    'name': 'Twitch Lite',
    'search': {
      'placeholders': ['Counter-Strike: Global Offensive', 'League of Legends', 'Fortnite', 'Overwatch']
    },
    'meta': {
      'author': 'Sinésio Couceiro < my@strikker.net >',
      'description': 'A lite version of twitch made in vue',
      'keywords': 'twitch, lite, streams',
      'themeColor': '#171728'
    }
  },
  'twitch': {
    'baseUrl': 'https://api.twitch.tv/kraken/',
    'apiKey': 'rgqybc6pxmnufkwav9rpqxzrhsae8j',
    'pullingTime': 15000
  }
}

export default config

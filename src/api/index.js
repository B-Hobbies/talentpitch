const BASE_URL = 'https://data2.talentpitch.co/api'

const getOffers = async () => {
  try {
    const res = await fetch(
      `${BASE_URL}/homeservice/categories/d/challenges/trending_challenges/unique/null?limit=10`,
      {
        method: 'GET',
        'Content-Type': 'application/json'
      }
    )
    const { data } = await res.json()
    return data
  } catch (error) {
    console.error('Error fetching offers', error)
    return []
  }
}

export { getOffers }

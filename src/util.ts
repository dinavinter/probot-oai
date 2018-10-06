import _ from 'lodash'

export function chooseUsers (owner: string, candidates: string[], desiredNumber: number): string[] {
  const withoutOwner = candidates.filter(
    reviewer => owner !== reviewer
  )

  if (desiredNumber === 0) {
    return withoutOwner
  }

  return _.sampleSize(withoutOwner, desiredNumber)
}

export function includesSkipKeywords (title: string, skipKeywords: string[]): boolean {
  for (const skipKeyword of skipKeywords) {
    if (title.toLowerCase().includes(skipKeyword.toLowerCase()) === true) {
      return true
    }
  }

  return false
}

export type MemberType = 'Model' | 'Photographer' | 'Artist' | 'Administrator'

export interface MemberBrief {
  userId: string
  type: MemberType
  publicName: string
  avatarUrl: string | null
  slug: string
  isDonor: boolean
}

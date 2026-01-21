import type { MemberBrief } from './member'

export interface GalleryPreview {
  galleryId: number
  owner: MemberBrief
  title: string
  description: string | null
  slug: string
  views: number
  comments: number
  imageCount: number
  previewImageUrls: string[]
}

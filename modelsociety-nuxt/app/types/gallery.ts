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

export interface GalleryImage {
  imageId: number
  imageUrl: string
  thumbnailUrl: string
  photographer: MemberBrief
  model: MemberBrief | null
}

export interface Comment {
  commentId: number
  author: MemberBrief
  text: string
  createdAt: string
  replies: Comment[]
}

export interface GalleryLink {
  title: string
  slug: string
}

export interface GalleryDetail extends GalleryPreview {
  images: GalleryImage[]
  commentsList: Comment[]
  isOwner: boolean
  otherGalleriesByOwner: GalleryLink[]
}

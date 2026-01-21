import type { Comment, GalleryDetail } from '~/types'

const mockComments: Comment[] = [
  {
    commentId: 1,
    author: {
      userId: 'admin-001',
      type: 'Administrator',
      publicName: 'Model Society Admin',
      avatarUrl: null,
      slug: 'model-society-admin',
      isDonor: false,
    },
    text: 'Beautiful work! Just added this to the homepage banner rotation. Thanks for sharing :)',
    createdAt: '2024-01-15T10:30:00Z',
    replies: [
      {
        commentId: 2,
        author: {
          userId: '960d0927-b813-47b2-8140-001d777404b7',
          type: 'Model',
          publicName: 'Elizabethexpresses',
          avatarUrl:
            'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-avatar/Elizabethexpresses-Model-None.jpg?v=639019028347851060',
          slug: 'elizabethexpresses',
          isDonor: false,
        },
        text: 'Thank you so much!',
        createdAt: '2024-01-15T11:45:00Z',
        replies: [],
      },
    ],
  },
  {
    commentId: 3,
    author: {
      userId: '3b30dc15-f58f-4cac-ac4d-baa7a3273fe7',
      type: 'Photographer',
      publicName: 'Gregory M',
      avatarUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-avatar/Gregory-M-Photographer-None.jpg?v=636776947844439369',
      slug: 'gregory-m',
      isDonor: true,
    },
    text: "This has to be one of the most exquisite things I've ever seen. I'm going to hang it up above my toilet and look at it while I poop.",
    createdAt: '2024-01-14T09:20:00Z',
    replies: [
      {
        commentId: 4,
        author: {
          userId: '960d0927-b813-47b2-8140-001d777404b7',
          type: 'Model',
          publicName: 'Elizabethexpresses',
          avatarUrl:
            'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-avatar/Elizabethexpresses-Model-None.jpg?v=639019028347851060',
          slug: 'elizabethexpresses',
          isDonor: false,
        },
        text: "Aw, you're just too kind! I almost can't take it. I love you!",
        createdAt: '2024-01-14T10:00:00Z',
        replies: [],
      },
    ],
  },
  {
    commentId: 5,
    author: {
      userId: 'admin-001',
      type: 'Administrator',
      publicName: 'Model Society Admin',
      avatarUrl: null,
      slug: 'model-society-admin',
      isDonor: false,
    },
    text: 'Beautiful work! Just added this to the homepage banner rotation. Thanks for sharing :)',
    createdAt: '2024-01-13T14:15:00Z',
    replies: [
      {
        commentId: 6,
        author: {
          userId: '400ecfc4-f45f-4119-8324-7c0ee5591437',
          type: 'Model',
          publicName: 'Julie Romanova',
          avatarUrl:
            'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-avatar/Julie-Romanova-Model-None.jpg?v=638939731174914056',
          slug: 'julie-romanova',
          isDonor: false,
        },
        text: 'Thank you so much!',
        createdAt: '2024-01-13T15:30:00Z',
        replies: [],
      },
      {
        commentId: 7,
        author: {
          userId: 'de9905d9-6465-45ab-8ec2-d46f9fb97791',
          type: 'Photographer',
          publicName: 'Larry Hoth',
          avatarUrl:
            'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-avatar/Larry-Hoth-Photographer-None.jpg?v=637587802118998658',
          slug: 'larry-hoth',
          isDonor: true,
        },
        text: 'I totally agree!',
        createdAt: '2024-01-13T16:00:00Z',
        replies: [],
      },
    ],
  },
]

// Thumbnail URLs use Medium2 for smaller file size in grid
const thumbnailUrls = [
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-photo-by-model-amateurmodelbe-Medium2u4.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/willow-window-artistic-nude-photo-by-photographer-flavio-morais-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-erotic-photo-by-photographer-dvan-Medium2u6.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-nature-photo-by-model-amateurmodelbe-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/bathed-in-the-golden-sunlight-casting-a-warm-glow-that-seemed-to-celebrate-her-very-existence-artistic-nude-artwork-by-photographer-dieter-kaupp-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/Reflection-Artistic-Nude-Photo-by-Model-Inner-Essence-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-photo-by-model-amateurmodelbe-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/dress-artistic-nude-photo-by-photographer-hotakainen-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-sensual-photo-by-photographer-nude_art-Medium2u44.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-photo-by-model-amateurmodelbe-Medium2u5.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/a-long-stretch-artistic-nude-photo-by-photographer-imagesse-Medium2.jpg',
  'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/artistic-nude-photo-by-model-amateurmodelbe-Medium2u2.jpg',
]

export const mockGalleryDetail: GalleryDetail = {
  galleryId: 91794,
  owner: {
    userId: '960d0927-b813-47b2-8140-001d777404b7',
    type: 'Model',
    publicName: 'Elizabethexpresses',
    avatarUrl:
      'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-avatar/Elizabethexpresses-Model-None.jpg?v=639019028347851060',
    slug: 'elizabethexpresses',
    isDonor: false,
  },
  title: 'Mature Beauty',
  description: 'The female form is beautiful and interesting in every stage of life.',
  slug: 'mature-beauty-',
  views: 280685,
  comments: 175,
  imageCount: 1122,
  previewImageUrls: thumbnailUrls,
  isOwner: true,
  otherGalleriesByOwner: [
    { title: 'My favorites', slug: 'my-favorites' },
    { title: 'Nudes in Nature', slug: 'nudes-in-nature' },
    { title: 'Black and White Awesome', slug: 'black-and-white-awesome' },
    { title: 'Color Crazy', slug: 'color-crazy' },
    { title: 'Studio Sessions', slug: 'studio-sessions' },
    { title: 'Artistic Expressions', slug: 'artistic-expressions' },
  ],
  images: [
    {
      imageId: 628085,
      imageUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/willow-window-artistic-nude-photo-by-photographer-flavio-morais-FullSize.jpg',
      thumbnailUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/willow-window-artistic-nude-photo-by-photographer-flavio-morais-Medium2.jpg',
      photographer: {
        userId: '5e931242-754d-47c1-8bd5-f32780cdb235',
        type: 'Photographer',
        publicName: 'Flavio Morais',
        avatarUrl: null,
        slug: 'flavio-morais',
        isDonor: false,
      },
      model: {
        userId: '9948de74-9779-4699-a631-f3d27b229f56',
        type: 'Model',
        publicName: 'Willow Noir',
        avatarUrl: null,
        slug: 'willow-noir',
        isDonor: false,
      },
    },
    {
      imageId: 538119,
      imageUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/bathed-in-the-golden-sunlight-casting-a-warm-glow-that-seemed-to-celebrate-her-very-existence-artistic-nude-artwork-by-photographer-dieter-kaupp-FullSize.jpg',
      thumbnailUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/bathed-in-the-golden-sunlight-casting-a-warm-glow-that-seemed-to-celebrate-her-very-existence-artistic-nude-artwork-by-photographer-dieter-kaupp-Medium2.jpg',
      photographer: {
        userId: 'ff2b5fee-4ade-4fe7-b604-fe7714824cfb',
        type: 'Photographer',
        publicName: 'Dieter Kaupp',
        avatarUrl: null,
        slug: 'dieter-kaupp',
        isDonor: true,
      },
      model: null,
    },
    {
      imageId: 178890,
      imageUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/Reflection-Artistic-Nude-Photo-by-Model-Inner-Essence-FullSize.jpg',
      thumbnailUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/Reflection-Artistic-Nude-Photo-by-Model-Inner-Essence-Medium2.jpg',
      photographer: {
        userId: 'c660aea2-aa7f-455c-94ef-d75bccfb9aee',
        type: 'Photographer',
        publicName: 'Peaquad Imagery',
        avatarUrl: null,
        slug: 'peaquad-imagery',
        isDonor: false,
      },
      model: {
        userId: 'bf4f5052-fc1b-42e6-ad7b-66fdcdef3111',
        type: 'Model',
        publicName: 'Inner Essence',
        avatarUrl: null,
        slug: 'inner-essence',
        isDonor: false,
      },
    },
    {
      imageId: 592815,
      imageUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/a-long-stretch-artistic-nude-photo-by-photographer-imagesse-FullSize.jpg',
      thumbnailUrl:
        'https://modelsocietyimagecloud.blob.core.windows.net/modelsociety-imagecloud-image/a-long-stretch-artistic-nude-photo-by-photographer-imagesse-Medium2.jpg',
      photographer: {
        userId: '4dd67436-36ff-4b59-93f8-6a5edb4441e5',
        type: 'Photographer',
        publicName: 'imagesse',
        avatarUrl: null,
        slug: 'imagesse',
        isDonor: false,
      },
      model: {
        userId: 'd837bded-2acf-4ebe-8eae-a56ca956c188',
        type: 'Model',
        publicName: 'Jackieg',
        avatarUrl: null,
        slug: 'jackieg',
        isDonor: false,
      },
    },
  ],
  commentsList: mockComments,
}

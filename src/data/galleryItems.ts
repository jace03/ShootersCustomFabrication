import heroImg from '../assets/hero.png'

export type GalleryItem = {
  src: string
  alt: string
}

export const galleryItems: GalleryItem[] = [
  { src: heroImg, alt: 'Fabrication project' },
  { src: heroImg, alt: 'Welded repair' },
  { src: heroImg, alt: 'Custom metalwork' },
  { src: heroImg, alt: 'Shop fabrication' },
  { src: heroImg, alt: 'Installation work' },
  { src: heroImg, alt: 'Finished build' },
  { src: heroImg, alt: 'Detail shot' },
  { src: heroImg, alt: 'Before and after' },
  { src: heroImg, alt: 'Work in progress' },
  { src: heroImg, alt: 'Fabrication detail' },
  { src: heroImg, alt: 'Repair in progress' },
  { src: heroImg, alt: 'Final welds' },
]

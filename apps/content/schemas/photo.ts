import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hide',
      title: 'Hide',
      description: 'Prevents the image from being randomly selected.',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      image: 'image',
      hide: 'hide',
    },
    prepare({image, hide}) {
      return {media: image, title: '', subtitle: hide ? 'Hidden' : ''}
    },
  },
})

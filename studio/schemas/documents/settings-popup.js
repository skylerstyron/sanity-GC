
export default {
  title: 'Popup Settings',
  name: 'popupSettings',
  type: 'document',

  fields: [
    {
      title: 'Popup Title',
      name: 'popupTitle',
      type: 'string',
    },
    {
      title: 'Newsletter',
      name: 'newsletter',
      type: 'newsletter',
    },
    
  ],
  preview: {
    prepare() {
      return {
        title: 'Popup Settings'
      }
    }
  }
}

// schemas/user.js
export default {
    name: 'user',
    title:'User',
    type: 'document',
    fields: [
      {
        name: 'username',
        type: 'string',
        title: 'UserName'
      },
      {
        name: 'image',
        type: 'string',
        title: 'Image'
      }
    ]
  }
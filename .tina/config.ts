import { defineConfig } from "tinacms";

export default defineConfig({
  branch: 'main',
  clientId: 382b9da7-8a36-41f2-938e-b774bbbf6e98, // isi nanti setelah setup Tina Cloud
  token: baa4d7a613aab5208c80463f05ddc3a17bea8084, // isi nanti

  build: {
    outputFolder: "public",
    publicFolder: "static"
  },

  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "static"
    }
  },

  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        format: "md",
        ui: {
          router: ({ document }) => {
            return `/posts/${document._sys.filename}`;
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            text: true,
            isBody: true
          },
          {
            type: "string",
            name: "description",
            label: "Description"
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            ui: {
              dateFormat: "MMMM DD YYYY",
              timeFormat: "hh:mm A"
            }
          },
          {
            type: "image",
            name: "image",
            label: "Image"
          },
          {
            type: "reference",
            name: "tags",
            label: "Tags",
            collections: ["tag"]
          }
        ]
      },
      {
        name: "tag",
        label: "Tags",
        path: "content/tags",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true
          }
        ]
      }
    ]
  }
});

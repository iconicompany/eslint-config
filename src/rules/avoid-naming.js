export default {
  meta: {
    messages: {
      avoidName: "Avoid using variables named '{{ name }}'"
    },
    schema: [
      {
        type: "object",
        properties: {
          toAvoid: {
            type: "array",
            items: {
              type: "string"
            }
          }
        }
      }
    ]
  },
  create(context) {
    const [options] = context.options;

    return {
      Identifier(node) {
        if (options.toAvoid.includes(node.name)) {
          context.report({
            node,
            messageId: "avoidName",
            // eslint-disable-next-line iconicompany/avoid-naming -- eslint variables format
            data: {
              name: "data"
            }
          });
        }
      }
    };
  }
};

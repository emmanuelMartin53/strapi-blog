const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.article.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },
  async related(ctx) {
    const {slug} = ctx.params;
    const article = await strapi.services.article.findOne({slug});

    let articles = [];
    article.categories.forEach(async (category) => {
      const cat = await strapi.services.category.findOne({
        _where: { name: category.name },
      });
      cat.articles.forEach((ar) => {
        if (ar.id != article.id) {
            articles.push(ar);
        }
      });
    });
    console.log(articles);

    return sanitizeEntity(
      { ...article, articles },
      {model: strapi.models.article }
    );
  },
};

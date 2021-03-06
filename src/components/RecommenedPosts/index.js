import React from 'react';
import propTypes from 'prop-types';
import { RecommendedLink, RecommendedWrapper } from './styles';

const RecommendedPosts = ({ next, previous }) => (
  <RecommendedWrapper>
    {previous && (
      <RecommendedLink to={`/${previous.fields.slug}`} className="previous">
        {previous.frontmatter.title}
      </RecommendedLink>
    )}
    {next && (
      <RecommendedLink to={`/${next.fields.slug}`} className="next">
        {next.frontmatter.title}
      </RecommendedLink>
    )}
  </RecommendedWrapper>
);

RecommendedPosts.prototype = {
  next: propTypes.shape({
    frontmatter: propTypes.shape({ title: propTypes.string.isRequired }),
    fields: propTypes.shape({ slug: propTypes.string.isRequired }),
  }),
  previous: propTypes.shape({
    frontmatter: propTypes.shape({ title: propTypes.string.isRequired }),
    fields: propTypes.shape({ slug: propTypes.string.isRequired }),
  }),
};

export default RecommendedPosts;

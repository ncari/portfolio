import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import BlogCard from '../components/Blog';

function Blog({ data }) {
    const posts = data.allContentfulBlogPost.edges;
    return (
        <Layout>
            {posts.map(({ node }) => (
                <div className='mb-4'>
                <BlogCard key={node.id} title={node.title} description={node.description}
                    updatedAt={node.updatedAt}/>
                </div>
            ))}
        </Layout>
    );
}

export const query = graphql`query {
    allContentfulBlogPost {
        edges {
            node {
                id
                title
                description
                updatedAt(formatString: "DD MMM")
            }
        }
    }
}`;

export default Blog;
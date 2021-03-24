import { GetMethod, PostMethod, QueryMethodsWrapper } from 'AppStyles';
import React from 'react';
import { Link } from 'react-router-dom';

export const QueryMethods = () => {
  return (
    <QueryMethodsWrapper>
      <Link
          to={'/chatwithgetmethod'}
        >
        <GetMethod>Get query</GetMethod>
      </Link>
      
      <Link
          to={'/chatwithpostmethod'}
        >
        <PostMethod>Post query</PostMethod>
      </Link>
    </QueryMethodsWrapper>
  )
}

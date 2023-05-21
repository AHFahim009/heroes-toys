import { useEffect } from "react";

const Blogs = () => {
  useEffect(() => {
    document.title = "Heroes - Blogs";
  }, []);
  return (
    <div className="blog-container bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h2>
          <p className="text-gray-700">
            Answer: An access token is a credential that is used to authenticate
            and authorize access to protected resources. It is typically
            short-lived and is issued by an authentication server after a
            successful login. Access tokens are sent with each request to the
            server to access protected resources. On the other hand, a refresh
            token is a long-lived credential that is used to obtain a new access
            token when the current one expires. Refresh tokens are securely
            stored and only sent to the authentication server when needed. For
            client-side storage, access tokens are commonly stored in browser
            cookies or local storage, while refresh tokens are usually stored in
            HTTP-only cookies for better security.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            Compare SQL and NoSQL databases?
          </h2>
          <p className="text-gray-700">
            Answer: SQL (Structured Query Language) databases are based on the
            relational data model and use tables to store structured data. They
            have a fixed schema and are suitable for applications with complex
            relationships and transactions. NoSQL (Not Only SQL) databases, on
            the other hand, use various data models such as key-value, document,
            columnar, or graph. They provide flexibility in terms of schema and
            are often used for handling large amounts of unstructured or
            semi-structured data. NoSQL databases are horizontally scalable and
            can handle high read/write workloads, but they may lack some of the
            ACID (Atomicity, Consistency, Isolation, Durability) properties
            provided by SQL databases.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            What is Express.js? What is Nest.js?
          </h2>
          <p className="text-gray-700">
            Answer: Express.js is a popular web application framework for
            Node.js. It provides a simple and flexible way to build web servers
            and APIs. Express.js is known for its minimalist design and allows
            developers to handle routes, middleware, and request/response
            handling easily. It has a large ecosystem of middleware packages
            available, making it highly extensible.
          </p>
          <p className="text-gray-700">
            Nest.js is a progressive Node.js framework for building scalable and
            efficient server-side applications. It is heavily inspired by
            Angular and combines TypeScript with Express.js under the hood.
            Nest.js provides a modular architecture, dependency injection, and a
            powerful CLI tool, making it easy to develop complex backends. It is
            designed to support the use of modern JavaScript/TypeScript features
            and follows the SOLID principles.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">
            What is MongoDB aggregate and how does it work?
          </h2>
          <p className="text-gray-700">
            Answer: In MongoDB, the aggregate method is used for data
            aggregation and provides a way to perform complex queries and
            transformations on the data. It takes an array of stages, where each
            stage represents a specific operation in the aggregation pipeline.
            The pipeline consists of multiple stages like filtering, grouping,
            projecting, sorting, etc., which are applied sequentially to the
            input documents.
          </p>
          <p className="text-gray-700">
            Using the aggregate framework, you can perform operations like
            filtering documents based on certain conditions, grouping documents
            by a specific field, calculating aggregations (e.g., sums, averages,
            counts), joining data from multiple collections, and more.
            Aggregation pipelines allow you to perform advanced data
            manipulations and transformations efficiently within the database,
            reducing the amount of data transferred over the network.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

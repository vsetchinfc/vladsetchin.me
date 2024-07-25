# Proof of the Concept

## Markdown Blog Support for Angular Project

I got the idea of the project to create a blog markdown support for my personal site. This is a proof of the concept project to see how to achieve it. If it will perform well I will move the contents of my current blog at [vladsetchin.me](https://vladsetchin.me) to this project.

This current implementation will contain a minimal site structure.

Limitation: This implementation will be suitable for small size blog. For blog with large number of posts it is recommended to switch to blog support by **_[Scully](https://scully.io)_**.

### Site Structure

- Home Page
- Blog List Page
- Blog Page

> #### Home Page

Home Page will show a list of the blog post summaries that are pinned and number of the lastest articles in reveres published date order.

> #### Blog List Page

Blog List Page will show a list of the blog post summaries that are in the reverse order to the max number of summaries per page. This page also will accept route parameters: _year, month, tag_ to display filtered list of blog post summaries.

> #### Blog Page

This will display the whole article contents. It will accept just one parameter, a _blog id_.

### Helper Components

- Tag List Component
- Year, Month list Component
- Page Header Component

> #### Tag List Component

> #### Year, Month list Component

> #### Page Header Component

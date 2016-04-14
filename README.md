# webpack-dev-api-server

A small, but perhaps helpfull little project for solving the use of an app server and at the same time get 
the better performance of `webpack-dev-server`.

# Intro

Webpack is pretty cool, steep learning curve in my opinion and hard to grasp at first glance. 
But I guess it's cool and all with a module bundler, 
I have no opinion on other module bundlers such as SystemJS or Browserify, 
I don't even know (or care) if they solve the same thing.

## Problem

However, a problem I've been battling with is the performance of `webpack --watch`. At some times
it **eats** the memory of my computer, specially if you're project is growing. 

Often a web developer needs to have some logic going on the backend. 
This means we need to have our app server running with cool api routes, and serve static content. 
This is not possible with `webpack-dev-server` since the requests need to be proxied to our API server, somehow.

## Solution

I found this site [Nikolay Nemshilov](http://nikolay.rocks/2016-01-13-connect-webpack-to-backend) site where he
described how to solve this. I took it and removed the `babel` (or whatever transpiler he's using) dependency he was using and turned it into a **(almost)** runnable project.

The idea is to only run one node file, that has required both the api and the webpack-dev-server.

But hey?! You might ask, what am I going to do when this hits production? Well it's part of the solution too.

Check out the code comments if you want to know whats going on, 
or just take it and tweak some parts of it to get it running on your project, I don't really care.


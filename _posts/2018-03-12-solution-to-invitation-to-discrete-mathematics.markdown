---
layout: post
title:  "Solution to 'Invitation to Discrete Mathematics'"
date:   2018-03-12 22:52:59 +0900
author: Choong-il Ryu
categories: Mathematics
tags:	discrete_math
cover:  "/assets/Graph-Theory.jpg"
---
As of March 2018, I'm taking a Mook course regaring [discrete mathematics](https://www.coursera.org/learn/discrete-mathematics/) from Coursera. Unfortunately, the video lecture coverage is too narrow to understand the subject and to confidently solve assignments and quiz, which is why many students complain about the course. However, as beauty is in the eye of the beholder, I decided to see the bright side and to take this opportunity to study the given [textbook](http://home.iitj.ac.in/~vinod2292/discrete_math/Matousek%20%20Discrete%20Math.pdf) thoroughly.

Despite I will probably drop the course, I hope I won't give up the textbook and make this solution page to keep growing.   

## Section 1.2
### Question 1a

If $$ n $$ is odd, let $$ n = 2m + 1 $$ where $$n, m \in \mathbb{Z}$$.


$$(left) = \lfloor\frac{(n+1)^2}{2}\rfloor
= \lfloor\frac{(2m+2)^2}{2}\rfloor
= \lfloor{2(m+1)^2}\rfloor
= 2(m+1)^2
= 2m^2+4m+2.$$

$$(right)
= \lfloor\frac{n^2}{2}\rfloor+n
= \lfloor\frac{(2m+1)^2}{2}\rfloor+2m+1
= \lfloor2m^2+2m+\frac{1}{2}\rfloor+2m+1
= 2m^2+2m+\lfloor\frac{1}{2}\rfloor+2m+1
= 2m^2+4m+1$$

$$\therefore (left)\ne(right)$$

Although we found the solution, let's do the similar math for even $$n$$ where $$n = 2m$$.

$$(left)
= \lfloor\frac{(n+1)^2}{2}\rfloor
= \lfloor\frac{(2m+1)^2}{2}\rfloor
= \lfloor{2m^2+2m+\frac{1}{2}}\rfloor
= 2m^2+2m+\lfloor\frac{1}{2}\rfloor
= 2m^2+2m.$$

$$(right)
= \lfloor\frac{n^2}{2}\rfloor+n
= \lfloor\frac{(2m)^2}{2}\rfloor+2m
= 2m^2+2m.$$

$$\therefore (left) = (right)$$

Consequently, $$(left) \ne (right)$$.


### Question 1b

Let's consider three cases of (n,k) is (even,even), (even,odd), or (odd,odd).

When (even,even), let $$n = 2m, k = 2l$$, where $$n, m, k, l \in \mathbb{Z}$$.

$$\lfloor\frac{n+k}{2}\rfloor
= \lfloor\frac{2m+2l}{2}\rfloor
= m+l
= \frac{2m}{2}+\frac{2l}{2}
= \lfloor\frac{2m}{2}\rfloor+\lfloor\frac{2l}{2}\rfloor
= \lfloor\frac{n}{2}\rfloor+\lfloor\frac{k}{2}\rfloor$$

$$\therefore (left) = (right)$$

When (even,odd), let $$n = 2m, k = 2l+1$$,

$$(left)
= \lfloor\frac{n+k}{2}\rfloor
= \lfloor\frac{2m+2l+1}{2}\rfloor
= \lfloor{m+l+\frac{1}{2}}\rfloor
= m+l$$

$$(right)
= \lfloor\frac{n}{2}\rfloor+\lfloor\frac{k}{2}\rfloor
= \lfloor\frac{2m}{2}\rfloor+\lfloor\frac{2l+1}{2}\rfloor
= \lfloor{m}\rfloor+\lfloor{l+\frac{1}{2}}\rfloor
= m+l$$

$$\therefore (left) = (right)$$

When (odd,odd), let $$n = 2m+1, k = 2l+1$$,

$$(left)
= \lfloor\frac{n+k}{2}\rfloor
= \lfloor\frac{2m+1+2l+1}{2}\rfloor
= \lfloor{m+l+1}\rfloor
= m+l+1$$

$$(right)
= \lfloor\frac{n}{2}\rfloor+\lfloor\frac{k}{2}\rfloor
= \lfloor\frac{2m+1}{2}\rfloor+\lfloor\frac{2l+1}{2}\rfloor
= \lfloor{m+\frac{1}{2}}\rfloor+\lfloor{l+\frac{1}{2}}\rfloor
= m+l$$

$$\therefore (left) \ne (right)$$

Consequently, $$(left) \ne (right)$$.

### Question 1c

Let $$x = m + p$$, where m $$\in \mathbb{Z}$$, p $$\in \mathbb{Q}$$,

$$(left)
= \lceil{\lfloor{x}\rfloor}\rceil
= \lceil{\lfloor{m + p}\rfloor}\rceil
= \lceil{m}\rceil
= m$$

$$(right)
= \lceil{x}\rceil
= \lceil{m + p}\rceil
= \lceil{m}\rceil + \lceil{p}\rceil
= m+1$$

$$\therefore (left) \ne (right)$$

### Question 1d

Let $$x = m + p$$, $$y = n + q$$, where m, n $$\in \mathbb{Z}$$ and p, q $$\in \mathbb{Q}$$,

$$(left)
= \lceil{\lfloor{x}\rfloor+\lfloor{y}\rfloor}\rceil
= \lceil{\lfloor{m+p}\rfloor+\lfloor{n+q}\rfloor}\rceil
= \lceil{m+n}\rceil
= m+n$$

$$(right)
= \lfloor{x}\rfloor + \lfloor{y}\rfloor
= \lfloor{m+p}\rfloor + \lfloor{n+q}\rfloor
= \lfloor{m}\rfloor + \lfloor{p}\rfloor + \lfloor{n}\rfloor + \lfloor{q}\rfloor
= m+n$$

$$\therefore (left) = (right)$$

### Question 2 ☆

Let $$\lfloor\sqrt{x}\rfloor = m$$,

$$m \leq \sqrt{x} < m+1,$$

$$m^2 \leq x < (m+1)^2,$$

$$m^2 \leq \lfloor{x}\rfloor < (m+1)^2,$$

$$m \leq \sqrt{\lfloor{x}\rfloor} < (m+1)$$

$$\therefore \lfloor{\sqrt{\lfloor{x}\rfloor}}\rfloor = m$$

$$\therefore \lfloor\sqrt{x}\rfloor =  \lfloor{\sqrt{\lfloor{x}\rfloor}}\rfloor$$

### Question 3a

### Question 3b

### Question 3c

5 ways:

$$(A \cup B) \cup (C \cup D),$$  

$$((A \cup B) \cup C) \cup D,$$

$$(A \cup (B \cup C)) \cup D,$$

$$A \cup (B \cup (C \cup D)),$$

$$A \cup ((B \cup C) \cup D)$$


### Question 3d ☆☆

### Question 4

$$2^X = 2^Y  \iff \{x | x \subset X\} = \{y | y \subset Y\} \implies X = Y$$


### Question 5

$$(x,y) = (x,z) \implies y = z$$

$$y = z$$ does not imply $$Y = Z$$.

### Question 6


### Question 7

Represent each number as $$2^k(2m+1)$$, where  $$0 \leq k, m \in \mathbb{Z}$$. Since $$m$$ can attain at most 500 distinct values from $$\{0,1,2,...,499\}$$, the considered set contains two numbers of form $$2^k(2m+1)$$ and $$2^{k'}(2m+1)$$ TBD..

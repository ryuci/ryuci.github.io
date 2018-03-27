---
layout: post
title:  "Using Math Expressions in Your Jekyll Blog"
date:   2018-03-12 23:53:59 +0900
author: Choong-il Ryu
categories: Mathematics
tags:	jekyll latex mathjax
cover:  "/assets/mj-logo.svg"
---


My blog is using [Kramdown](https://kramdown.gettalong.org/syntax.html) markdown converter. Since Kramdown supports [MathJax](https://www.mathjax.org), you can do PNG rendering using Latex syntax. In plain words, you can put fancy math expressions like this $$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$ in your blog using LaTex syntax.

## How to enable MathJax

1. Put following tag in your HTML file.`<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>` In my case I put it in `index.html` and `_layouts/default.thml`.
2. In `index.html`, change `{ post.content | strip_html | truncatewords: 50 }` to `{ post.content | truncatewords: 50 }`  
 3. This step might be necessary if it does not work yet: add `mathjax: true` under `# Build settings` in your `_config.yml` file.


## Reference

* [MathJax](https://www.mathjax.org)
* [MathJax Samples](https://www.mathjax.org/#samples)
* [Kramdown Math Blocks](https://kramdown.gettalong.org/syntax.html#math-blocks)
* [Use Maruku instead of Kramdown](http://haixing-hu.github.io/programming/2013/09/20/how-to-use-mathjax-in-jekyll-generated-github-pages/) - note that Kramdown replaced Maruku in the latest Jekyll version.
* [List of Latex symbols](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)

## Examples

### Symbols Frequently Used in Proofs

$$ A\,\alpha\,B\,\beta\,\Gamma\,\gamma\,E\,\epsilon\,\Pi\,\pi\,\Sigma\,\sigma $$
{% highlight javascript %}
$$ A\,\alpha\,B\,\beta\,\Gamma\,\gamma\,E\,\epsilon\,\Pi\,\pi\,\Sigma\,\sigma $$
{% endhighlight %}
Note 1. Unlike conventional LaTex, we should use normal alphabet when possible, like $$A$$.

Note 2. `\,` means a space.
<br/>

$$ \exists,\forall,\neg,\lor,\land,\to,\leftrightarrow,\implies,\iff,\therefore,\because $$
{% highlight javascript %}
$$ \exists,\forall,\neg,\lor,\land,\to,\leftrightarrow,\implies,\iff,\therefore,\because $$
{% endhighlight %}
<br/>

### Set theory

$$ \emptyset,\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R} $$
{% highlight javascript %}
$$ \emptyset,\mathbb{N},\mathbb{Z},\mathbb{Q},\mathbb{R} $$
{% endhighlight %}
<br/>

$$\{2, 4, 6, 8\dots\}$$
{% highlight javascript %}
$$\{2, 4, 6, 8\dots\}$$
{% endhighlight %}
<br/>

$$\{x \mid x \text{ is positive and even}\}$$
{% highlight javascript %}
$$\{x \mid x \text{ is positive and even}\}$$
{% endhighlight %}
<br/>

$$ \subset, \supset, \not \subset, \not \supset, \subseteq,\supseteq,\nsubseteq,\nsupseteq $$
{% highlight javascript %}
$$ \subset, \supset, \not \subset, \not \supset, \subseteq,\supseteq,\nsubseteq,\nsupseteq $$
{% endhighlight %}
<br/>

$$(A \cup B) \cap C \in D \subset E$$
{% highlight javascript %}
$$(A \cup B) \cap C \in D \subset E$$
{% endhighlight %}
<br/>

$$\bigcup_{i=1}^{\infty} F_{i}$$
{% highlight javascript %}
$$\bigcup_{i=1}^{\infty} F_{i}$$
{% endhighlight %}
<br/>

$$(F\circ G)(x)\,means\,x \overset{F\circ G}{\mapsto} y $$
{% highlight javascript %}
$$(F\circ G)(x)\,means\,x \overset{F\circ G}{\mapsto} y $$
{% endhighlight %}
<br/>




### Algebra

$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$

{% highlight javascript %}
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
{% endhighlight %}
<br/>

$$ \cos(θ+φ)=\cos(θ)\cos(φ)−\sin(θ)\sin(φ) $$

{% highlight javascript %}
$$ \cos(θ+φ)=\cos(θ)\cos(φ)−\sin(θ)\sin(φ) $$
{% endhighlight %}
<br/>

$$ \sigma = \sqrt{ \frac{1}{N} \sum_{i=1}^N (x_i -\mu)^2} $$

{% highlight javascript %}
$$ \sigma = \sqrt{ \frac{1}{N} \sum_{i=1}^N (x_i -\mu)^2} $$
{% endhighlight %}  
<br/>

$$ \mathbf{X} = \mathbf{Z} \mathbf{P^\mathsf{T}} $$

{% highlight javascript %}
$$ \mathbf{X} = \mathbf{Z} \mathbf{P^\mathsf{T}} $$
{% endhighlight %}
<br/>

$$ \mathbf{X}\_{n,p} = \mathbf{A}\_{n,k} \mathbf{B}\_{k,p} $$

{% highlight javascript %}
$$ \mathbf{X}\_{n,p} = \mathbf{A}\_{n,k} \mathbf{B}\_{k,p} $$
{% endhighlight %}
<br/>

$$ \mathsf{Data = PCs} \times \mathsf{Loadings} $$

{% highlight javascript %}
$$ \mathsf{Data = PCs} \times \mathsf{Loadings} $$
{% endhighlight %}
<br/>

$$ E = \frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}} $$

{% highlight javascript %}
$$ E = \frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}} $$
{% endhighlight %}
<br/>


$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$
{% highlight javascript %}
$$
\begin{align*}
  & \phi(x,y) = \phi \left(\sum_{i=1}^n x_ie_i, \sum_{j=1}^n y_je_j \right)
  = \sum_{i=1}^n \sum_{j=1}^n x_i y_j \phi(e_i, e_j) = \\
  & (x_1, \ldots, x_n) \left( \begin{array}{ccc}
      \phi(e_1, e_1) & \cdots & \phi(e_1, e_n) \\
      \vdots & \ddots & \vdots \\
      \phi(e_n, e_1) & \cdots & \phi(e_n, e_n)
    \end{array} \right)
  \left( \begin{array}{c}
      y_1 \\
      \vdots \\
      y_n
    \end{array} \right)
\end{align*}
$$
{% endhighlight %}
<br/>



### Calculus

$$ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz $$

{% highlight javascript %}
$$ f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz $$
{% endhighlight %}
<br/>

$$ \int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot ndS $$

{% highlight javascript %}
$$ \int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot ndS $$
{% endhighlight %}  
<br/>

$$ \vec{\nabla} \times \vec{F} = \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k} $$

{% highlight javascript %}
$$ \vec{\nabla} \times \vec{F} = \left( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right) \mathbf{i} + \left( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right) \mathbf{j} + \left( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right) \mathbf{k} $$
{% endhighlight %}  
<br/>

$$ (\nabla_X Y)^k = X^i (\nabla_i Y)^k = X^i \left( \frac{\partial Y^k}{\partial x^i} + \Gamma_{im}^k Y^m \right) $$

{% highlight javascript %}
$$ (\nabla_X Y)^k = X^i (\nabla_i Y)^k = X^i \left( \frac{\partial Y^k}{\partial x^i} + \Gamma_{im}^k Y^m \right) $$
{% endhighlight %}
<br/>


$$ \int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot nd S $$

{% highlight javascript %}
$$ \int_D ({\nabla\cdot} F)dV=\int_{\partial D} F\cdot nd S $$
{% endhighlight %}
<br/>

### Embedded in sentence

When $$a \ne 0$$, there are two solutions to $$ax^2 + bx + c = 0$$ and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$

{% highlight javascript %}
When $$a \ne 0$$, there are two solutions to $$ax^2 + bx + c = 0$$
and they are $$x = {-b \pm \sqrt{b^2-4ac} \over 2a}.$$
{% endhighlight %}
<br/>

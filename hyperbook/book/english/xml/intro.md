---
name: Introduction to XML
index: 1
---

## Introduction to XML

The communication between the [game server](glossary/server)
and the [computer player](glossary/player)
is realized using XML messages.
XML is a markup language,
i.e., a language that provides not only the data itself
but also information about the interpretation or processing of it.
The advantage of this language is
that it can be read well both by computers and by humans.
This section provides an introduction to the structure of XML.

### Tags

The basic elements of XML are *tags*.
A tag provides information about the type of data to be processed.
In XML, a tag is formed by placing the tag name between angle brackets.
XML distinguishes between three different types of tags:

-   Opening tag: `<tag>`
-   Closing tag: `</tag>`
-   Empty tag: `<tag />`

The slash means that the tag is closed.
The slash at the end directly closes the tag that was just opened.

Between the opening and closing tag is the information to be communicated.

**Note:** XML strictly distinguishes between upper and lower case.

#### Formation rules

Tags may not be used arbitrarily in documents.
The following rules apply:

-   For every opening tag, there must be a corresponding closing tag.
-   Tags may be nested within each other,
    but individual tags must not overlap.
-   There can only be one root tag,
    i.e., at the top level there is exactly one tag
    that contains all others.

#### Example of correct XML syntax

```xml
<addition>
  <complex_number>
    <real_part>3.5</real_part>
    <imaginary_part>4.2</imaginary_part>
  </complex_number>
  <complex_number>
    <real_part>1</real_part>
    <imaginary_part>6.9</imaginary_part>
  </complex_number>
</addition>
```

#### Examples of incorrect XML syntax

Incorrect because there are multiple elements at the top level:

```xml
<heading>
  Example document
</heading>
<text>
  This is an <underlined>example text</underlined>
  <paragraph />
  More text
</text>
```

Incorrect because tags overlap:

```xml
<document>
  <heading>
    Example document
  </heading>
  <text>
    <italic>This <underlined>is </italic>an example text</underlined>
    <paragraph />
    More text
  </text>
</document>
```

### Attributes

You can also insert attributes within a tag to convey information:

```xml
<tag attribute="value" />
```

This way, the example with complex numbers can be made somewhat clearer:

```xml
<addition>
  <complex_number real_part="3.5" imaginary_part="4.2" />
  <complex_number real_part="1" imaginary_part="6.9" />
</addition>
```

### The header

The first line in an XML document is also important.
From it, the computer program can learn how to handle the data
(e.g., which character set is used).
This header looks very similar to a tag:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no" ?>
```

Such a tag is also called *processing instruction*.

Theoretically, there can be multiple processing instructions
in an XML document,
but for the Software-Challenge, only the header is relevant.

### Comments

Comments are also possible in an XML document;
they are ignored when reading:

```xml
<!-- I am an XML comment -->
```

There can be any number of such comments,
and they may only appear between tags.

### Further information

-   [Wikipedia article on XML](https://en.wikipedia.org/wiki/XML)

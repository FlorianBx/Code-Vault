export const fakeSnippets: Snippet[] = [
	{
		id: "1",
		title: "Basic Vue Component",
		authorName: "VueDev",
		description: "A simple Vue component to display a message.",
		code: `<template>\n  <div>{{ message }}</div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      message: 'Hello Vue!'\n    };\n  }\n};\n</script>`,
		language: "Vue",
		tags: "vue,component,basic",
		authorId: "user123",
	},
	{
		id: "2",
		title: "JavaScript Array Filtering",
		authorName: "JSDude",
		description: "Function to filter an array in JavaScript.",
		code: `const numbers = [1, 2, 3, 4, 5];\nconst even = numbers.filter(number => number % 2 === 0);\nconsole.log(even);`,
		language: "JavaScript",
		tags: "javascript,array,filter",
		authorId: "user456",
	},
	{
		id: "3",
		title: "Simple PHP Greeting Function",
		authorName: "PHPEngineer",
		description: "A PHP function to say hello.",
		code: `<?php\nfunction sayHello($name) {\n  return 'Hello ' . $name;\n}\necho sayHello('World');\n?>`,
		language: "PHP",
		tags: "php,function",
		authorId: "user789",
	},
	{
		id: "4",
		title: "Basic Python Function",
		authorName: "PyDev",
		description: "A simple Python function to calculate factorial.",
		code: `def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)\n\nprint(factorial(5))`,
		language: "Python",
		tags: "python,function",
		authorId: "user101",
	},
	{
		id: "5",
		title: "CSS Flexbox Centering",
		authorName: "CSSMaster",
		description: "Centering elements using CSS Flexbox.",
		code: `.container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}`,
		language: "CSS",
		tags: "css,flexbox,centering",
		authorId: "user202",
	},
	{
		id: "6",
		title: "HTML Basic Structure",
		authorName: "HTMLFan",
		description: "A basic HTML page structure.",
		code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>My Web Page</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>`,
		language: "HTML",
		tags: "html,structure,basic",
		authorId: "user303",
	},
	{
		id: "7",
		title: "Simple SQL Query",
		authorName: "SQLGuru",
		description: "A simple SQL query to retrieve data from a table.",
		code: `SELECT * FROM users WHERE age > 18;`,
		language: "SQL",
		tags: "sql,query,database",
		authorId: "user404",
	},
	{
		id: "8",
		title: "React Functional Component",
		authorName: "ReactDev",
		description: "A basic functional component in React.",
		code: `import React from 'react';\n\nconst MyComponent = () => {\n  return <div>Hello React!</div>;\n};\n\nexport default MyComponent;`,
		language: "React",
		tags: "react,functional,component",
		authorId: "user505",
	},
	{
		id: "9",
		title: "Basic Node.js Server",
		authorName: "NodeNinja",
		description: "Creating a simple server using Node.js and Express.",
		code: `const express = require('express');\nconst app = express();\n\napp.get('/', (req, res) => {\n  res.send('Hello World!');\n});\n\napp.listen(3000, () => {\n  console.log('Server is running on port 3000');\n});`,
		language: "Node.js",
		tags: "nodejs,express,server",
		authorId: "user606",
	},
	{
		id: "10",
		title: "Basic Ruby Method",
		authorName: "RubyRocks",
		description: "A simple Ruby method for addition.",
		code: `def add(a, b)\n  a + b\nend\n\nputs add(2, 3)`,
		language: "Ruby",
		tags: "ruby,method,function",
		authorId: "user707",
	},
];

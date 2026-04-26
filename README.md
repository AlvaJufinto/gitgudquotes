# Git Gud Quotes

A collaborative quote board designed for software engineering students to practice Git and GitHub workflows. 

This project simulates an open-source collaboration environment. By submitting a pull request, your quote will be instantly featured on the live static site in our Git Gud Quotes gallery! Built purely with HTML, CSS, and plain JavaScript.

## 🎯 Learning Objectives

- Understand the standard open-source Fork & Pull Request workflow.
- Practice branching, committing, and pushing code.
- Gain experience modifying structured data (JSON).
- Learn how to resolve merge conflicts (if multiple students edit the file at the same time).
- Understand Git and GitHub collaboration best practices.

## 🛠️ How to Contribute

To get your quote on the board, follow the step-by-step guide below.

### Step-by-Step Contribution Guide

1. **Fork the Repository**
   Click the "Fork" button in the top right corner of this GitHub repository to create your own copy on your GitHub profile.

2. **Clone Your Fork**
   Clone the repository to your local machine using your terminal:
   ```bash
   git clone https://github.com/YOUR_USERNAME/github-tutorial.git
   cd github-tutorial
   ```

3. **Create a New Branch**
   Create an isolation branch for your work. Don't work directly on `main`!
   ```bash
   git checkout -b add-quote-yourname
   ```

4. **Edit `quotes.json`**
   Open the `quotes.json` file in your favorite text editor. Add your quote object to the **end** of the JSON array. Follow the [JSON Format Rules](#-json-format-rules) exactly.

5. **Commit Your Changes**
   Stage and commit your changes with a clear commit message in the imperative mood.
   ```bash
   git add quotes.json
   git commit -m "Add quote from [Your Name]"
   ```

6. **Push to Your Fork**
   Push the new branch up to your forked repository on GitHub.
   ```bash
   git push origin add-quote-yourname
   ```

7. **Create a Pull Request**
   Go to the original repository on GitHub, and click "Compare & pull request". 
   - **Pull Request Title Format**: `Add quote from [Your Name]`
   - Verify there are no merge conflicts before submitting.

---

## 📝 JSON Format Rules

When editing `quotes.json`, ensure your entry matches the exact format of the existing objects. 
- Ensure proper use of double quotes (`"`), commas `,`, and curly braces `{}`. 
- The array must be valid JSON format!

### Example Quote Entry

```json
  {
    "name": "Jane Doe",
    "class": "SE-101",
    "quote": "git push --force is not your friend."
  }
```
*(Make sure to add a comma `,` after the previous entry's closing brace `}` before adding yours!)*

---

## 🚦 Contribution Rules

To keep the repository clean and collaborative, please adhere to these rules:
- **Do NOT edit other students' quotes.** Only add your own.
- **Use a meaningful branch name** (e.g., `add-quote-johndoe`).
- **Use clear commit messages in the imperative mood** (e.g., `Add quote from John Doe` rather than `added my quote`).
- **Validate your JSON before submitting!** Missing commas or broken brackets will break the application. You can use tools like [JSONLint](https://jsonlint.com/) or built-in IDE features to check.

---

## 📚 Optional README Collaboration Task

Want to do a little extra? Add a helpful Git tip or common error solution below! (Propose this in a separate Pull Request or along with your quote).

### Git Tips & Tricks
- *Add your favorite tip here!*

### Common Git Errors and Solutions
- *Add a common error and its solution here!*

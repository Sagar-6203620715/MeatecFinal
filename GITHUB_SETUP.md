# GitHub Repository Setup Instructions

## Push to GitHub

Follow these steps to push your code to your GitHub account:

### 1. Create a New Repository on GitHub

1. Go to https://github.com/Sagar-6203620715
2. Click on "New" or "New repository"
3. Repository name: `MeatecFinal` (or any name you prefer)
4. Description: "Full-stack task management application with React, NestJS, MongoDB, and JWT authentication"
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

### 2. Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands in your terminal:

```bash
# Add the remote repository (replace with your actual repository URL)
git remote add origin https://github.com/Sagar-6203620715/MeatecFinal.git

# Verify the remote was added
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Alternative: If you already have a different remote URL

If you need to change the remote URL:

```bash
# Remove existing remote (if any)
git remote remove origin

# Add your GitHub repository
git remote add origin https://github.com/Sagar-6203620715/MeatecFinal.git

# Push to GitHub
git push -u origin main
```

### 3. Verify

After pushing, visit your repository on GitHub:
https://github.com/Sagar-6203620715/MeatecFinal

You should see all your files there!

## Future Updates

When you make changes to the code:

```bash
# Stage changes
git add .

# Commit changes
git commit -m "Your commit message"

# Push to GitHub
git push
```

## Troubleshooting

### Authentication Issues

If you encounter authentication issues when pushing:

1. **Use Personal Access Token (Recommended)**:
   - Go to GitHub Settings > Developer settings > Personal access tokens > Tokens (classic)
   - Generate a new token with `repo` permissions
   - Use the token as your password when pushing

2. **Or use SSH**:
   ```bash
   # Change remote to SSH
   git remote set-url origin git@github.com:Sagar-6203620715/MeatecFinal.git
   ```

### Branch Name Issues

If your default branch is `master` instead of `main`:

```bash
git branch -M main
git push -u origin main
```


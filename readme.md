#…or create a new repository on the command line

echo "# conecao-mysql" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:bboyguil/conecao-mysql.git
git push -u origin master


#or push an existing repository from the command line

git remote add origin git@github.com:bboyguil/conecao-mysql.git
git push -u origin master
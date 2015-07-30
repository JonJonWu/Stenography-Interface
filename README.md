# Stenography
 Interface

Steps for Installation:

1. Extract all files.
2. Relocate the Keyboard directory outside of the main interface directory.
3. Install meteor and navigate to this directory and enter "meteor" in the command line.
4. Navigate to the directory of mongo programs and run the following command line and move the dictionary JSON
   into the mongo directory: mongoimport -h localhost:3001 --db meteor --collection "dictionary" --file dict.json
5. Access the web app at localhost:3000/Stenography. You can check whether the dictionary JSON imported properly
   by entering the following code on the console: Dictionary.find().count(). It should return 124311 entries.
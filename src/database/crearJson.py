from contextlib import nullcontext
import requests
import json

db = {}
db["games"] = []
cont = 1
pages = 1

def getPlatforms(platforms):
    allPlatforms = []
    for platform in platforms:
        if(platform["platform"]["slug"]== "playstation"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/1/1443.png")
        if(platform["platform"]["slug"]== "xbox"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/1/1321.png")
        if(platform["platform"]["slug"]== "pc"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/732/732076.png")
        if(platform["platform"]["slug"]== "linux"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/25/25719.png")
        if(platform["platform"]["slug"]== "nintendo"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/871/871510.png")
        if(platform["platform"]["slug"]== "mac"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/2175/2175370.png")
        if(platform["platform"]["slug"]== "ios"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/731/731985.png")
        if(platform["platform"]["slug"]== "android"):
            allPlatforms.append("https://cdn-icons-png.flaticon.com/512/38/38002.png")
    return allPlatforms

def getTags(tags):
    allTags = []
    for tag in tags:
        allTags.append(tag["name"])
    return allTags

def getGenres(genres):
    allGenres = []
    for genre in genres:
        allGenres.append(genre["name"])
    return allGenres

def addGames(cont, db, url, pages):
    resp = requests.get(url)
    respOk = resp.json()
    pages += 1
    for game in respOk["results"]:
        db["games"].append({
            "id" : cont,
            "game_name" : game["name"],
            "game_title" : game["name"],
            "released" : game["released"],
            "rating" : game["rating"],
            "image" : game["background_image"],
            "platforms" : getPlatforms(game["parent_platforms"]),
            "genres" : getGenres(game["genres"]),
            "tags" : getTags(game["tags"])
        })
        cont +=1
    if pages <= 25:
        addGames(cont, db, f"https://api.rawg.io/api/games?key=88acfd488e854958a3dd8f3e59cd8ed1&page={pages}", pages)
    else:
        with open("allGames.json", "w") as file:
            json.dump(db, file, indent=1)        

addGames(cont, db, f"https://api.rawg.io/api/games?key=88acfd488e854958a3dd8f3e59cd8ed1&page={pages}", pages)
print(f"https://api.rawg.io/api/games?key=88acfd488e854958a3dd8f3e59cd8ed1&page={pages}")
from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

middlewares = [
     Middleware(
         CORSMiddleware,
         allow_origins=['*'],
         allow_methods=['*'],
         allow_headers=['*']
     )
 ]

app = FastAPI(middleware=middlewares)

# with open('../../../italia/anello.txt') as f:
#     lines = f.readlines()
#
# client = MongoClient('localhost', 27017)

# db = client.test_database
#
# article = {"title": "La Compagna dell'Anello", "text": lines}
#
# articles = db.articles
#
# articles.insert_one(article)

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/create")
async def create_text():
    return {"message": "creating text"}

async def read_text():
    pass

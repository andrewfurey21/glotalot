from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from database import *

middlewares = [
     Middleware(
         CORSMiddleware,
         allow_origins=['*'],
         allow_methods=['*'],
         allow_headers=['*']
     )
 ]

app = FastAPI(middleware=middlewares)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.post("/upload")
async def create_text(text: TextModel):
    pass
    # return {**text.dict()}

async def get_text():
    pass

@app.get("/texts")
async def get_texts():
    return get_text_descriptions()

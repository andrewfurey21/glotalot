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
    return {}

@app.post("/upload")
async def create_text(text: TextModel):
    pass
    # return {**text.dict()}

@app.get("/texts")
async def get_texts():
    return get_text_information()

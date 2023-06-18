from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from database import *
import uuid
from pydantic import BaseModel

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

class TextDescription(BaseModel):
    text: str
    title: str

@app.post("/upload/")
async def create_text(text_desc: TextDescription):
    length = len(text_desc.text.split(" "))
    id = uuid.uuid4()
    data = TextModel(text_desc.title, text_desc.text, 0, length, id)
    add_text(data)

@app.get("/texts")
async def get_texts():
    return get_text_info()

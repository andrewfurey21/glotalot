from fastapi import FastAPI
from starlette.middleware import Middleware
from starlette.middleware.cors import CORSMiddleware

from database import *
from translate import translate

import uuid
from pydantic import BaseModel

class TextDescription(BaseModel):
    text: str
    title: str

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

@app.post("/upload/")
async def create_text(text_desc: TextDescription):
    length = len(text_desc.text.split(" "))
    id = uuid.uuid4().hex
    data = TextModel(text_desc.title, text_desc.text, 0, length, id)
    add_text(data)

@app.get("/texts/")
async def get_texts():
    return get_texts_info()

@app.get("/read/")
async def get_full_text(id: str=""):
    return get_text(id)


@app.get("/translate/")
async def translate_text(text: str=""):
    return translate(text)

@app.get("/add_word/")
async def add(text: str="", source_lang: str="EN-GB", target_lang: str="IT"):
#    translation = translate(text, source_lang=source_lang, target_lang=target_lang)
    translation = translate(text)
    word = SavedWordsModel(text, translation, source_lang, target_lang)
    add_word(word)
    return translation

import sys
from uuid import uuid4
from datetime import date
from dataclasses import dataclass, asdict

from pymongo import MongoClient

from constants import *

@dataclass
class TextModel():
    title: str
    text: str
    completion_perc: float
    words: int
    id: str

@dataclass
class SavedWordsModel:
    word: str
    translation: str
    source_lang: str
    target_lang: str

def get_texts_from_db():
    client = MongoClient(NAME, PORT)
    db = client[TEXT_DATABASE_NAME]
    return db[TEXT_COLLECTION_NAME]

def get_saved_words_from_db():
    client = MongoClient(NAME, PORT)
    db = client[SAVED_WORDS_DATABASE_NAME]
    return db[SAVED_WORDS_COLLECTION_NAME]

def get_texts_info():
    texts = get_texts_from_db()
    descriptions = []
    for text in texts.find():
        description = {
            "title": text["title"],
            "completion_perc": text["completion_perc"],
            "words": text["words"],
            "id": text["id"]
        }
        descriptions.append(description)
    return descriptions

def get_text(id: str):
    texts = get_texts_from_db()
    text = texts.find_one({"id": id})
    text_model = TextModel(text["title"], text["text"], text["completion_perc"], text["words"], text["id"])
    return text_model

def add_text(text: TextModel):
    texts = get_texts_from_db()
    data = asdict(text)
    texts.insert_one(data)

def delete_text(id: str):
    texts = get_texts_from_db()
    texts.delete_one({"id": id})

def update_text_info(title, completion_perc):
    texts = get_texts_from_db()
    text.update_one({'title': title}, {"$set": {"title": title, "completion_perc": completion_perc}})

def get_all_words():
    saved_words = get_saved_words_from_db()

def add_word(word: SavedWordsModel):
    saved_words = get_saved_words_from_db()
    data = asdict(word)
    saved_words.insert_one(data)

if __name__ == "__main__":
    if len(sys.argv) > 0:
        for arg in sys.argv:
            if arg == "clear":
                print("Clearing database.")
                get_texts_from_db().drop()
    else:
        pass

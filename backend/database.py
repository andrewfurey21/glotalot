import sys

from pymongo import MongoClient
from dataclasses import dataclass, asdict
from datetime import date

from constants import *
from uuid import uuid4

@dataclass
class TextInfoModel():
    title: str
    completion_perc: float
    words: int
    id: str

@dataclass
class TextModel():
    title: str
    completion_perc: float
    words: int
    id: str
    text: str

def get_texts_from_db():
    client = MongoClient(NAME, PORT)
    db = client[TEXT_DATABASE_NAME]
    return db[TEXT_COLLECTION_NAME]

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
    text_model = TextModel(text["title"], text["completion_perc"], text["words"], text["id"], text["text"])
    return text_model

def add_text(text: TextInfoModel):
    texts = get_texts_from_db()
    data = asdict(text)
    texts.insert_one(data)

def delete_text(id: str):
    texts = get_texts_from_db()
    texts.delete_one({"id": id})

def update_text_info(title, completion_perc):
    texts = get_texts_from_db()
    text.update_one({'title': title}, {"$set": {"title": title, "completion_perc": completion_perc}})



if __name__ == "__main__":
    for arg in sys.argv:
        if arg == "clear":
            print("Clearing database.")
            get_texts_from_db().drop()
    text = get_text("b26eb67db54e411daa51d5af87cc5321")
    print(text)

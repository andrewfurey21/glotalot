
from pymongo import MongoClient
from dataclasses import dataclass, asdict
from datetime import date

from constants import *
from uuid import uuid4

@dataclass
class TextModel():
    title: str
    text: str
    completion_perc: float
    words: int
    id: str

def get_texts_from_db():
    client = MongoClient(NAME, PORT)
    db = client[TEXT_DATABASE_NAME]
    return db[TEXT_COLLECTION_NAME]

def get_text_info():
    texts = get_texts_from_db()
    descriptions = []

    for text in texts.find():
        description = {
            "title": text["title"],
            "text": text["text"],
            "completion_perc": text["completion_perc"],
            "words": text["words"],
            "id": text["id"]
        }

        descriptions.append(description)

    return descriptions

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



if __name__ == "__main__":
    text = TextModel("example text", "some more text", .5, 3, uuid4())
    add_text(text)

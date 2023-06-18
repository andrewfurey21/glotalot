
from pymongo import MongoClient
from dataclasses import dataclass, asdict
from datetime import date

@dataclass
class TextModel():
    name: str
    text: str
    completion_perc: float
    words: int

def get_text_information():
    client = MongoClient('localhost', 27017)
    db = client.database
    texts = db['collection']

    descriptions = []

    for text in texts.find():
        description = {
            "name": text["name"],
            "text": text["text"],
            "completion_perc": text["completion_perc"],
            "words": text["words"]
        }

        descriptions.append(description)

    return descriptions

def add_text(text: TextModel):
    client = MongoClient('localhost', 27017)
    db = client.database
    texts = db['collection']
    data = asdict(text)
    texts.insert_one(data)

if __name__ == "__main__":
    text = TextModel("example text", "some more text", .5, 3)
    add_text(text)

from deepl import Translator
from key import *

def translate(text: str, target_lang="IT"):
    return Translator(auth_key).translate_text(text, target_lang=target_lang)

from deepl import Translator
from key import *

def translate(text: str, target_lang="EN-GB", source_lang="IT"):
    translation = Translator(auth_key).translate_text(text, source_lang=source_lang, target_lang=target_lang)
    return translation.text

if __name__ == "__main__":
    translation = translate("hello")
    print(translation)

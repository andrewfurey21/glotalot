from deepl import Translator
from key import *

def translate(text: str, target_lang="EN-GB"):
    translation = Translator(auth_key).translate_text(text, target_lang=target_lang)
    return translation.text

if __name__ == "__main__":
    translation = translate("hello")
    print(translation)

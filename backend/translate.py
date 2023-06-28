from deepl import Translator
from key import *

def source_langs():
    langs = Translator(DEEPL_KEY).get_source_languages()
    codes = []
    for lang in langs:
        codes.append({"lang": lang.name, "code": lang.code})
    return codes

def target_langs():
    langs = Translator(DEEPL_KEY).get_target_languages()
    codes = []
    for lang in langs:
        codes.append({"lang": lang.name, "code": lang.code})
    return codes

def translate(text: str, target_lang="EN-GB", source_lang="IT"):
    translation = Translator(DEEPL_KEY).translate_text(text, source_lang=source_lang, target_lang=target_lang)
    return translation.text

if __name__ == "__main__":
    # translation = translate("buongiorno")
    print(target_langs())

from deepl import Translator

from key import *

translator = Translator(auth_key)

result = translator.translate_text("What are you doing?", target_lang="IT")

print(result)

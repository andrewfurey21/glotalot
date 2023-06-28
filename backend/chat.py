from langchain.llms import LlamaCpp
from langchain import PromptTemplate, LLMChain
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

from constants import MODEL_PATH

template = """
You only speak in {language}
Pretend to be a waiter at a italian restaurant
"""

prompt = PromptTemplate.from_template(template)
prompt.format(language="italian")

callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])

llm = LlamaCpp(
    model_path=MODEL_PATH, callback_manager=callback_manager, verbose=True
)

llm_chain = LLMChain(prompt=prompt, llm=llm)

question = "Waiter? I'd like to order some food."
llm_chain.run(question)

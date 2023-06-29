from langchain.llms import LlamaCpp
from langchain import PromptTemplate, LLMChain, ConversationChain
from langchain.callbacks.manager import CallbackManager
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from langchain.memory import ConversationBufferWindowMemory

from constants import MODEL_PATH

template = """
Only speak {language}
"""

prompt = PromptTemplate.from_template(template)
prompt.format(language="italian")

#callback_manager = CallbackManager([StreamingStdOutCallbackHandler()])

llm = LlamaCpp(
    model_path=MODEL_PATH, verbose=False
)

llm_chain = LLMChain(prompt=prompt, llm=llm)

def ask_question(question: str):
    return llm_chain.run(question)

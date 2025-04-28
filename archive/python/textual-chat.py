from textual.app import App, ComposeResult
from textual.widgets import Header, Footer, Static
from textual.containers import VerticalScroll
import asyncio
import random

MESSAGES = [
    "Alice: Hey, how are you?",
    "Bob: Doing great! Just working on a project.",
    "Charlie: Same here, crunch time!",
    "Dana: Anyone tried that new framework?",
    "Eli: Yeah, it's actually pretty cool.",
    "Alice: Let's catch up later.",
    "Bob: Sure thing!",
]

class ChatApp(App):
    def compose(self) -> ComposeResult:
        yield Header()
        self.chat_container = VerticalScroll()
        yield self.chat_container
        yield Footer()

    async def on_mount(self) -> None:
        asyncio.create_task(self.simulate_messages())

    async def simulate_messages(self) -> None:
        while True:
            message = random.choice(MESSAGES)
            await self.chat_container.mount(Static(message, classes="chat-line"))
            self.chat_container.scroll_end(animate=False)
            await asyncio.sleep(2)

if __name__ == "__main__":
    ChatApp().run()

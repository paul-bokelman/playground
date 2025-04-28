import asyncio
import websockets

async def echo(websocket: websockets.WebSocketServerProtocol, path: str):
    async for message in websocket:
        await websocket.send(message)
    
async def main():
    async with websockets.serve(echo, "localhost", 9000):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())
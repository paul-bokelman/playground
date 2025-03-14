import socket

host = "0.0.0.0"  # Listen on all interfaces
port = 9999

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server:
    server.bind((host, port))
    server.listen(1)
    conn, addr = server.accept()
    with conn:
        print(f"Connection from {addr}")
        data = conn.recv(4096)  # Adjust buffer size if necessary
        print("Received data:", data.hex())
        print("Received data:", data)
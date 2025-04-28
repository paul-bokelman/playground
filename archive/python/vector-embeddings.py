from sentence_transformers import SentenceTransformer
import faiss
import numpy as np

# load local embedding model
model = SentenceTransformer('intfloat/e5-small-v2')

# some "tool descriptions" to index
tools = [
    "Photo editor with layers support",
    "Music player with playlist management",
    "Video editor for YouTube creators",
    "Online IDE for coding in Python",
    "Mind-mapping tool for brainstorming"
]

# embed all tool descriptions
tool_embeddings = model.encode(tools)

# create FAISS index
dimension = tool_embeddings.shape[1]
index = faiss.IndexFlatL2(dimension)
index.add(np.array(tool_embeddings)) # add vector tool embeddings to index

# embed a query for searching
query = "I need something to edit images with different layers"
query_embedding = model.encode([query])

# get the top 3 matches
k = 3
distances, indices = index.search(np.array(query_embedding), k)

# show the results
print("\nTop matches for query:")
for idx in indices[0]:
    print(f"- {tools[idx]}")

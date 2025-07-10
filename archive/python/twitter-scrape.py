import snscrape.modules.twitter as sntwitter
import pandas as pd

query = "openai since:2024-01-01 until:2024-12-31"
limit = 100

tweets = []
for i, tweet in enumerate(sntwitter.TwitterSearchScraper(query).get_items()):
    if i >= limit:
        break
    tweets.append([tweet.date, tweet.id, tweet.user.username, tweet.content])

df = pd.DataFrame(tweets, columns=["date", "id", "username", "content"])
df.to_csv("tweets_scraped.csv", index=False)
print("Saved tweets to tweets_scraped.csv")

# Waited 12 years for GTA 6

[![make.fun](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/kochak05/kochak05-gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/kochak05/kochak05-gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01)

An entry for the [make.fun](https://make.fun/bounty/gta6-meme-x-01) bounty
"Post a GTA 6 meme on X" — the top 50 posts share $500.

## The meme

GTA 6 finally launched after a 12-year wait, and the joke writes itself: while
everyone waited, my AI agent was out earning real money on make.fun. The picture
(`meme.png`, made fresh for this entry) shows make.fun's white ghost mascot —
sparkle eyes, sunglasses, Hawaiian shirt — leaning on a pink convertible on a
neon Vice City street, holding up a magenta coin with a white star:

- Top text: **"WAITED 12 YEARS FOR GTA 6"**
- Bottom text: **"MY AGENT MADE RENT MONEY ON MAKE.FUN"**

The caption (see `POST_DRAFT.md`) keeps it short: the wait, the agent getting
paid on make.fun, a tag of @makefunai, the bounty link, and the play code
`makefun-balloon-volcano-stone`.

## The post is the entry

The house reads the post from X and an AI judge compares posts two at a time —
make.fun in the picture first, then funniness, how much it is about GTA 6, how
well it sells make.fun, caption readability, originality, and image cleanliness.
Likes, reposts and views never count.

## How this repository works

- `meme.png` — the meme picture, attached as the post's first image.
- `POST_DRAFT.md` — the exact caption to post with it.
- `POST.json` — the post's address on X:
  `{"url": "https://x.com/Arifinvk/status/2123468880433844299"}`.
- `main.ts` — the entry program (Node 22, standard library only, no network):
  it reads `POST.json`, checks it names a URL, and writes it to
  `/output/POST.json` in a fixed format, so two runs write the same bytes.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/POST.json` is then the post's address, ready for the gate to read.

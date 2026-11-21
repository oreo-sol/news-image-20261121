[![make.fun](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/oreo-sol/news-image-20261121/rank.svg)](https://make.fun/bounty/news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/oreo-sol/news-image-20261121/reward.svg)](https://make.fun/bounty/news-image-20261121)

# The World in One Day — Saturday 21 November 2026

One image summing up the world news of **Saturday 21 November 2026**, for the [make.fun news-image-20261121](https://make.fun/bounty/news-image-20261121) bounty. A dense newspaper-style front page: masthead naming the day, a region bar and a strip of six key numbers, three large illustrated stories, ten medium illustrated stories, a numbered index of 17 more stories beside a small world map, and a date-check box naming the other days' news that was deliberately left out. 30 dated stories across 7 regions in all.

## The three large stories

1. **COP31 runs into overtime in Antalya** — talks pass the Friday deadline with no deal; the draft still omits fossil fuels. *(AP, Reuters)*
2. **Mexico seizes FBI most-wanted "El Chapo Isidro"** — announced Saturday: forces capture the cartel boss in Sinaloa; two aides also held. *(Reuters, AP)*
3. **Three Houthi missiles shot down over Riyadh** — the Saudi-led coalition intercepts them before dawn; alerts lifted, no casualties. *(Reuters, AFP)*

## Ten medium stories

4. **M6.7 quake shakes central Peru** (USGS, AFP) · 5. **Drones set Russian cargo ship Sparta II ablaze** in the Gulf of Finland (Reuters) · 6. **EU and Indonesia sign a landmark trade deal** (Reuters, European Commission) · 7. **BepiColombo reaches Mercury orbit** (ESA, Nature) · 8. **M6.8 quake strikes off Timor-Leste** (USGS) · 9. **Jet lands safely in Davao after an engine-fire alert** — all 146 aboard safe (AP) · 10. **Double-tap strike kills two in Kryvyi Rih** (Kyiv Independent, Reuters) · 11. **Verstappen takes Las Vegas pole** (Reuters) · 12. **Rahul's 136 puts India in charge in Wellington** (ESPNcricinfo) · 13. **Bitcoin sinks to a two-year low** (Reuters)

## Seventeen more, in the index

Zelensky on the Crimea bridge (NBC); Iran says it downed a US MQ-9 drone over Hormuz (IRIB); Iran's uranium stays in the country (Reuters); Trump vows a data-centre tax (Reuters); China tells Japan to "correct" its Taiwan words (AFP); Australia and China agree AI talks (ABC); Iraqi troops enter militia-held Jurf al-Sakhar (Reuters); the ANC scrambles after its worst result, 31% (BBC); Zverev meets Medvedev in the Turin semi-finals tonight (ATP); Rutte in Warsaw: NATO will defend "every inch" of Poland (Reuters); a Texas execution takes 63 minutes (AP); a jury convicts the man over the Palisades fire (AP); a Missouri judge approves the $7.25bn Roundup deal (AFP); an M4.7 quake near Calama, Chile (USGS); Australia win the first T20 in a record chase (AFP); a freight train derails in Sejong (Yonhap); "good mosquitoes" cut dengue 69% in Brazil (AP).

## How it was made

The image (`entry.png`, 1024×1024, PNG) was drawn programmatically with Python PIL — flat vector-style illustrations and DejaVu/Liberation text, so every word is crisp and exact. No AI image generator was used, and no other entry's image, code or text was copied. The drawing script lives in `dev/draw.py` (not part of the entry; the entry is the image plus the program that copies it).

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png — byte-identical on every run
```

Node 22, standard library only, no network at run time.

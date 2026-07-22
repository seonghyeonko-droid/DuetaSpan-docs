# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "floor",
#       "text": "User lives on the 5th floor."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "dislike",
#       "text": "User can't stand anchovies."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "child",
#       "text": "User has a child named Yuna, age 3."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "diet",
#       "text": "User is low-sodium."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-05-02",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-03-14",
#       "title": "Switching phone plans",
#       "bullets": [
#         "uses about 30GB of data a month",
#         "wants to keep the same number"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Haemi, I'm trying to settle a  | S2 Speaking of siblings, I'm actually | S3 That works. But I'll need a place  | S4 Sorry about that. Actually, six hu

     0.00s  user  발화 시작: Hey Haemi, I'm trying to settle a bet with my brother. Do yo
     7.01s  <ret> 발화 (turn1 첫 프레임)
     7.23s  agent 발화 시작: <ret> It looks like the record belongs to Alan Shearer.
     7.42s  user  발화 끝
     8.01s  ⚡SPAN 주입 [d'=1.01s / d_lead=3.05s]: Alan Shearer is the all-time highest goal scorer in the English Premie
     8.16s  user  발화 시작: Yeah.
     8.61s  user  발화 끝
    10.28s  agent 발화 끝
    11.13s  user  발화 시작: Oh, I knew it was him! He was a legend.
    13.63s  agent 발화 시작: [happy] He certainly was. It's lovely how sports can bring s
    13.72s  user  발화 끝
    19.53s  user  발화 시작: Yeah.
    20.16s  user  발화 끝
    21.64s  agent 발화 끝
    21.85s  user  발화 시작: Speaking of siblings, I'm actually planning a trip to visit 
    24.99s  agent 발화 시작: Uh-huh.
    25.76s  agent 발화 끝
    27.47s  agent 발화 시작: That sounds like a wonderful way to reconnect. Taking time f
    27.69s  user  발화 끝
    33.67s  agent 발화 끝
    33.77s  user  발화 시작: I need to find a flight from New York to London for August t
    37.03s  <ret> 발화 (turn10 첫 프레임)
    37.13s  agent 발화 시작: <ret> I found a flight on August tenth departing from JFK at
    37.38s  user  발화 끝
    37.63s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.91s]: (tool result) Flight BA112 from JFK to LHR on August 10, 2026, departs
    41.47s  user  발화 시작: Yeah.
    42.10s  user  발화 끝
    44.04s  agent 발화 끝
    44.14s  user  발화 시작: That works. But I'll need a place to stay. Can you find a ho
    46.91s  agent 발화 시작: Mhm.
    47.41s  agent 발화 끝
    48.52s  <ret> 발화 (turn14 첫 프레임)
    49.02s  agent 발화 시작: <ret> [curious] The Savoy is available, with rooms starting 
    49.14s  user  발화 끝
    49.35s  ⚡SPAN 주입 [d'=0.84s / d_lead=7.23s]: (tool result) The Savoy is a luxury hotel in London with rooms startin
    56.25s  agent 발화 끝
    56.55s  user  발화 시작: Honey, the oven timer's going off — can you grab it?
    59.30s  user  발화 시작: Sorry about that. Actually, six hundred is a bit too much. D
    59.32s  user  발화 끝
    63.56s  agent 발화 시작: Yeah.
    64.31s  <ret> 발화 (turn18 첫 프레임)
    64.38s  agent 발화 끝
    64.89s  agent 발화 시작: <ret> How about the citizenM London Bankside? It's a bit mor
    64.94s  ⚡SPAN 주입 [d'=0.63s / d_lead=6.76s]: (tool result) The citizenM London Bankside is a moderate hotel with ro
    65.09s  user  발화 끝
    71.65s  agent 발화 끝
    71.71s  user  발화 시작: That's much better. I'll check it out.
    73.71s  agent 발화 시작: [happy] I'm glad we found something that works. I hope your 
    73.83s  user  발화 끝
    80.11s  agent 발화 끝

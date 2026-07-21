# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Hugo",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "show",
#       "text": "User is currently watching a slow-burn detective drama."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "trip",
#       "text": "User is planning a trip to Bali in May."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "streaming",
#       "text": "User subscribes to Netflix and Spotify."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-03-06",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I saw a bright green fly buzzing a | S2 Okay, good to know. So, they're mo | S3 I'm meeting someone new this weeke | S4 …actually. Any advice?

     0.00s  user  발화 시작: I saw a bright green fly buzzing around earlier. What kind o
     4.46s  <ret> 발화 (turn1 첫 프레임)
     4.71s  agent 발화 시작: <ret> It was likely a blow fly, sometimes called a bottle fl
     4.81s  user  발화 끝
     5.22s  ⚡SPAN 주입 [d'=0.76s / d_lead=7.64s]: (tool result) Blow flies, also known as bottle flies, are often metall
     8.26s  user  발화 시작: Mm-hmm.
     8.70s  user  발화 끝
    12.35s  agent 발화 끝
    15.25s  user  발화 시작: Blow fly? That sounds… unpleasant. Are they dangerous?
    19.48s  agent 발화 시작: Not usually to people, but they can be a sign of decay. [sig
    19.55s  user  발화 끝
    23.29s  user  발화 시작: Right.
    23.88s  user  발화 끝
    26.98s  agent 발화 끝
    27.24s  user  발화 시작: Okay, good to know. So, they're more of a cleanup crew then?
    30.84s  user  발화 끝
    30.92s  agent 발화 시작: Exactly. They play an important role in breaking down organi
    32.65s  user  발화 시작: Yeah.
    33.05s  user  발화 끝
    36.01s  agent 발화 끝
    36.02s  user  발화 시작: I'm meeting someone new this weekend…
    38.09s  user  발화 끝
    39.69s  user  발화 시작: …actually. Any advice?
    40.64s  agent 발화 시작: Yeah, yeah.
    41.53s  user  발화 끝
    41.59s  agent 발화 시작: Oh, wonderful! First dates are exciting. Remember to listen 
    42.05s  agent 발화 끝
    46.73s  agent 발화 끝

# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Morgan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "mid 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-06-20",
#       "category": "floor",
#       "text": "User lives on the 2nd floor."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "emergency",
#       "text": "User's emergency contact is Kenji."
#     },
#     {
#       "date": "2026-04-12",
#       "category": "hobby",
#       "text": "User is into long-distance cycling."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "sibling",
#       "text": "User has a younger sibling named Leo."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "dislike",
#       "text": "User can't stand licorice."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Leli, I'm trying to remember a  | S2 …Was that the one that played a lo | S3 That rings a bell. Is there much t | S4 …of taking a road trip.

     0.00s  user  발화 시작: Hi Leli, I'm trying to remember a radio station I used to li
     1.57s  agent 발화 시작: Yeah.
     2.52s  agent 발화 끝
     5.20s  agent 발화 시작: Hello! It’s lovely to chat with you.
     5.32s  user  발화 끝
     7.93s  agent 발화 끝
     8.08s  user  발화 시작: It was a really local station, I think, and I remember it be
    12.98s  <ret> 발화 (turn4 첫 프레임)
    13.27s  agent 발화 시작: <ret> That sounds like WERT, which broadcasts from studios r
    13.40s  user  발화 끝
    14.38s  ⚡SPAN 주입 [d'=1.40s / d_lead=5.65s]: WERT is a radio station broadcasting from studios located off Intersta
    18.24s  user  발화 시작: …Was that the one that played a lot of oldies?
    18.93s  agent 발화 끝
    21.21s  agent 발화 시작: Yes, WERT is known for its classic hits and oldies format. I
    21.34s  user  발화 끝
    26.65s  user  발화 시작: Right.
    27.14s  user  발화 끝
    28.82s  agent 발화 끝
    28.96s  user  발화 시작: Oh, that’s probably it! Do you know what city it’s near?
    32.41s  <ret> 발화 (turn9 첫 프레임)
    32.89s  ⚡SPAN 주입 [d'=0.51s / d_lead=7.22s]: WERT's studios and primary broadcast range cover the Youngstown–Warren
    32.95s  agent 발화 시작: <ret> WERT is located in the Youngstown–Warren area, in nort
    33.13s  user  발화 끝
    40.13s  user  발화 시작: That rings a bell. Is there much to do around there?
    40.17s  agent 발화 끝
    41.29s  agent 발화 시작: Mm-hmm.
    42.11s  agent 발화 끝
    44.00s  user  발화 끝
    44.15s  agent 발화 시작: Youngstown and Warren offer a mix of cultural attractions an
    48.88s  user  발화 시작: Uh-huh.
    49.52s  user  발화 끝
    51.69s  agent 발화 끝
    52.13s  user  발화 시작: That sounds nice. I'm thinking…
    54.85s  user  발화 끝
    56.11s  user  발화 시작: …of taking a road trip.
    56.77s  agent 발화 시작: Yeah.
    57.59s  agent 발화 끝
    57.64s  agent 발화 시작: A road trip sounds wonderful! Perhaps you'd like me to find 
    57.72s  user  발화 끝
    61.17s  user  발화 시작: Yeah.
    61.66s  user  발화 끝
    63.53s  user  발화 시작: Actually, could you tell me the speed limit on Interstate 80
    63.61s  agent 발화 끝
    67.81s  <ret> 발화 (turn20 첫 프레임)
    68.02s  agent 발화 시작: <ret> The speed limit on Interstate 80 in Ohio is generally 
    68.20s  user  발화 끝
    68.25s  ⚡SPAN 주입 [d'=0.43s / d_lead=9.64s]: (tool result) Speed limit: 65 mph (105 km/h) on most sections, 70 mph 
    77.66s  agent 발화 끝

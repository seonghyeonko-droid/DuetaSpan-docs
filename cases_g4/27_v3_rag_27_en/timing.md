# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "bloodtype",
#       "text": "User's blood type is B+."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "car",
#       "text": "User drives a 2022 Volkswagen Golf."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "partner",
#       "text": "User's partner is named Leo."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Peruvian."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "pet",
#       "text": "User has a Maine Coon named Simba."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "work",
#       "text": "User works as a dentist."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-22",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hi Klunaen. I was reading something about Jordan Mintz and I
     5.60s  <ret> 발화 (turn1 첫 프레임)
     5.80s  agent 발화 시작: <ret> It looks like that was publicized in October two thous
     6.07s  user  발화 끝
     6.25s  ⚡SPAN 주입 [d'=0.65s / d_lead=7.46s]: Jordan Mintz's whistleblowing was publicized in October 2001.
    13.23s  user  발화 시작: Yeah, it is. Anyway, it's getting late. What time is it actu
    13.26s  agent 발화 끝
    16.85s  <ret> 발화 (turn3 첫 프레임)
    17.42s  agent 발화 시작: <ret> [happy] It is currently ten fifteen p.m.
    17.63s  user  발화 끝
    17.80s  ⚡SPAN 주입 [d'=0.95s / d_lead=3.56s]: (tool result) 2026-07-10 22:15:00
    20.91s  user  발화 시작: Oh, wow. I should probably start winding down for the night.
    20.98s  agent 발화 끝
    24.34s  user  발화 끝
    24.44s  agent 발화 시작: That sounds like a lovely idea. Be gentle with yourself as y
    29.82s  agent 발화 끝

# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Rowan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I'm feeling a bit overwhelmed  | S2 Fourth century BCE? Wow, that *is* | S3 [laugh] Warfare… | S4 …huh? That's… intense. Maybe I nee

     0.00s  user  발화 시작: Hi, I'm feeling a bit overwhelmed with studying for my exams
     3.65s  user  발화 끝
     3.66s  agent 발화 시작: Hi there! It's completely normal to feel that way when exams
     6.86s  user  발화 시작: Mm-hmm.
     7.50s  user  발화 끝
    11.21s  agent 발화 끝
    12.23s  user  발화 시작: That’s easy to say… but I just can’t seem to focus. What’s t
    17.72s  <ret> 발화 (turn4 첫 프레임)
    18.12s  agent 발화 시작: <ret> People first began using oil as an energy source way b
    18.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Oil was first used as an energy source in the fourth century BCE.
    18.20s  user  발화 끝
    25.86s  agent 발화 끝
    25.87s  user  발화 시작: Fourth century BCE? Wow, that *is* old. What were they even 
    31.09s  agent 발화 시작: Well, it wasn’t quite like powering cars, of course! They us
    31.14s  user  발화 끝
    33.40s  user  발화 시작: Uh-huh.
    34.04s  user  발화 끝
    36.83s  user  발화 시작: [laugh] Warfare…
    37.15s  agent 발화 끝
    38.71s  user  발화 끝
    39.80s  user  발화 시작: …huh? That's… intense. Maybe I need a break from studying. W
    44.66s  <ret> 발화 (turn10 첫 프레임)
    45.06s  agent 발화 시작: <ret> It's currently 26.0°C with 65% humidity and a 7.2 km/h
    45.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) Current conditions: 26.0°C, humidity 65%, wind 7.2 km/h.
    45.26s  user  발화 끝
    54.62s  agent 발화 끝

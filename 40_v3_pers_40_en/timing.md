# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Stella",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-08-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "home",
#       "text": "User's home address is 393 Oak Avenue."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Stella, my name is Fellal. I’m here to offer a listeni
     0.11s  user  발화 시작: I’m just feeling a bit lost, actually.
     0.11s  agent 발화 끝
     0.16s  agent 발화 시작: It’s understandable to feel lost sometimes, Stella. Change c
     0.16s  user  발화 끝
     0.29s  user  발화 시작: Yeah.
     0.29s  agent 발화 끝
     0.30s  agent 발화 시작: It sounds like you’re still gathering your thoughts, and tha
     0.30s  user  발화 끝
     0.44s  user  발화 시작: I think… I think I need to make a big decision, and I’m real
     0.44s  agent 발화 끝
     0.56s  agent 발화 시작: That fear is very common when facing important choices. It’s
     0.56s  user  발화 끝
     0.70s  user  발화 시작: It’s about university. I got accepted into two courses, and 
     0.70s  agent 발화 끝
     0.82s  agent 발화 시작: Both sound like wonderful opportunities, Stella. Instead of 
     0.82s  user  발화 끝
     1.00s  agent 발화 끝

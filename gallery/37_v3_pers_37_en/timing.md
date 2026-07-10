# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Elsa",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Elsa, my name is Elin. I’m a counselor here to offer s
     5.79s  agent 발화 끝
     6.21s  user  발화 시작: Oh, hi Elin. That’s… nice. Um, I’m just really stressed abou
    12.13s  agent 발화 시작: It sounds like you’re carrying a lot right now. Can you tell
    12.23s  user  발화 끝
    18.89s  agent 발화 끝
    19.58s  user  발화 시작: Well, she keeps trying to set me up on dates.
    22.35s  user  발화 끝
    22.75s  agent 발화 시작: It’s very common for parents to want to see their children h
    31.93s  agent 발화 끝
    31.94s  user  발화 시작: It is! It feels like she doesn’t respect my choices at all. 
    36.94s  agent 발화 시작: That feeling of a lack of respect is really important. Perha
    37.22s  user  발화 끝
    44.73s  agent 발화 끝

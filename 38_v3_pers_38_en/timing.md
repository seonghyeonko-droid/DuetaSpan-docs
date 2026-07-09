# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Avery",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-07",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-07-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Avery, welcome. I’m Jaeia, and I’m here to gently guide you 
     3.81s  user  발화 시작: Right.
     4.11s  user  발화 끝
     5.97s  user  발화 시작: Jaeia… that’s a beautiful name. It sounds… ancient, almost. 
     6.02s  agent 발화 끝
    12.28s  user  발화 끝
    12.44s  agent 발화 시작: It is, actually. It’s a name of Tuareg origin, meaning ‘gaze
    16.79s  user  발화 시작: Yeah.
    17.28s  user  발화 끝
    21.23s  agent 발화 시작: Often, when facing change, we search for strength within our
    21.33s  agent 발화 끝
    34.77s  agent 발화 끝
    36.51s  user  발화 시작: I— I mean, my grandmother passed away last month. It's just…
    41.48s  agent 발화 시작: Grief truly shifts everything, doesn’t it? It alters the fam
    41.60s  user  발화 끝
    50.84s  agent 발화 끝
    50.90s  user  발화 시작: Yeah. It’s just… I keep thinking about all the things I didn
    54.83s  user  발화 끝

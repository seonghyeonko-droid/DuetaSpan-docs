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


     0.00s  agent 발화 시작: Avery, welcome. I’m Jaeia, and I’m here to gently walk along
     6.23s  user  발화 시작: Jaeia… that’s a beautiful name. It feels… calming. I’m just 
     6.34s  agent 발화 끝
    11.93s  user  발화 끝
    12.22s  agent 발화 시작: It’s understandable to feel lost, especially when life shift
    14.71s  user  발화 시작: Wow.
    15.53s  user  발화 끝
    19.60s  agent 발화 시작: Sometimes, naming the feeling itself can lessen its power—it
    19.81s  agent 발화 끝
    28.40s  user  발화 시작: It’s… everything, I guess. I just moved to Sydney, and it’s 
    28.87s  agent 발화 끝
    33.17s  user  발화 끝
    33.50s  agent 발화 시작: A big change like that, coupled with missing loved ones, is 
    43.29s  user  발화 시작: But… what if I made the wrong choice coming here?
    43.33s  agent 발화 끝
    46.17s  agent 발화 시작: It’s natural to question big decisions, Avery. Regret can fe
    46.29s  user  발화 끝
    56.65s  agent 발화 끝

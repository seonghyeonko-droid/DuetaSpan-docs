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


     0.00s  agent 발화 시작: Welcome, Avery. I’m Jaeia, and I’m here to offer a gentle sp
     3.22s  user  발화 시작: Right.
     3.86s  user  발화 끝
     5.09s  user  발화 시작: Jaeia… that’s a pretty name. It sounds… calming. Is it okay 
     5.19s  agent 발화 끝
    10.79s  user  발화 끝
    11.01s  agent 발화 시작: It’s a pleasure to meet you too, Avery. I help people naviga
    15.70s  user  발화 시작: Yeah.
    16.15s  user  발화 끝
    20.46s  agent 발화 시작: Sometimes just acknowledging the weight of things is the fir
    20.70s  agent 발화 끝
    32.23s  agent 발화 끝
    34.27s  user  발화 시작: I— I mean, I’m okay, I think. It’s just… my grandmother pass
    40.30s  agent 발화 시작: That’s… not uncommon at all, Avery. Grief often arrives in w
    40.38s  user  발화 끝
    51.09s  agent 발화 끝
    51.15s  user  발화 시작: So it’s not… wrong that I’m not crying or anything? I feel l
    55.83s  user  발화 끝
    55.94s  agent 발화 시작: There's no “should” when it comes to grief, Avery. Every exp
    66.27s  agent 발화 끝

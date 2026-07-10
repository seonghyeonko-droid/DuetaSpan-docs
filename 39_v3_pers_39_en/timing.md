# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "Robin",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-07-18",
#       "category": "home",
#       "text": "User's home address is 401 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Robin, it’s lovely to connect with you.
     1.28s  user  발화 시작: Uh-huh.
     1.78s  user  발화 끝
     3.31s  user  발화 시작: Hmm, Frir… that’s a pretty unusual name. Is it… Scandinavian
     3.42s  agent 발화 끝
    10.44s  user  발화 끝
    10.48s  agent 발화 시작: It is, actually! It’s an old Norse name meaning ‘peaceful.’ 
    18.30s  user  발화 시작: Mhm.
    18.75s  user  발화 끝
    21.42s  agent 발화 끝
    21.72s  user  발화 시작: Well, I’ve been really struggling to get started on projects
    28.43s  agent 발화 시작: That’s incredibly common, Robin. It sounds like you're facin
    28.53s  user  발화 끝
    38.58s  agent 발화 끝
    38.69s  user  발화 시작: Yeah, exactly! It’s like I get paralyzed by all the steps. I
    43.94s  agent 발화 시작: It’s easy to get overwhelmed when looking at the whole pictu
    43.97s  user  발화 끝
    57.02s  agent 발화 끝

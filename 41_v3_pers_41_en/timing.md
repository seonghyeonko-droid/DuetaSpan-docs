# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Max",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "home",
#       "text": "User's home address is 979 Birch Road."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-15",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Brona… that’s a really unusual nam | S2 Uh, work mostly. It’s just… endles | S3 Not really. I’ve tried reading, bu | S4 I guess so. What do I need to do?

     0.00s  agent 발화 시작: Hello Max, it’s lovely to meet you. I’m Brona, and I help pe
     7.65s  user  발화 시작: Brona… that’s a really unusual name. Are you, like, a real p
     7.65s  agent 발화 끝
    11.83s  agent 발화 시작: That’s a fair question, Max. I’m designed to offer support, 
    11.83s  user  발화 끝
    19.48s  user  발화 시작: Yeah, yeah.
    19.48s  agent 발화 끝
    20.17s  user  발화 시작: Right. Well, I’ve been having trouble sleeping lately, and a
    20.17s  user  발화 끝
    28.52s  agent 발화 시작: It sounds like you're carrying a lot right now, Max. Stress 
    28.52s  user  발화 끝
    38.61s  user  발화 시작: Uh, work mostly. It’s just… endless. Deadlines, emails, meet
    38.61s  agent 발화 끝
    46.61s  agent 발화 시작: Yeah.
    46.61s  user  발화 끝
    46.96s  agent 발화 시작: That’s a very common experience, Max. When our minds race, i
    46.96s  agent 발화 끝
    57.04s  user  발화 시작: Not really. I’ve tried reading, but even then, I’m just thin
    57.04s  agent 발화 끝
    62.26s  agent 발화 시작: Okay.
    62.26s  user  발화 끝
    62.61s  agent 발화 시작: It's understandable that reading isn't providing the escape 
    62.61s  agent 발화 끝
    71.31s  user  발화 시작: Right.
    71.31s  agent 발화 끝
    71.65s  agent 발화 시작: They can be a simple way to signal to your body that it’s ti
    71.65s  user  발화 끝
    80.70s  user  발화 시작: Yeah.
    80.70s  agent 발화 끝
    81.05s  user  발화 시작: I guess so. What do I need to do?
    81.05s  user  발화 끝
    84.18s  agent 발화 시작: Simply find a comfortable position, either sitting or lying 
    84.18s  user  발화 끝
    94.26s  agent 발화 끝

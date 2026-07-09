# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Remy",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What’s a normal heart rate for som | S2 Oh, okay—but I read somewhere it’s | S3 Did you remember to take the trash | S4 So, fifty to one hundred is the wh

     0.00s  user  발화 시작: What’s a normal heart rate for someone healthy?
     1.99s  <ret> 발화 (turn1 첫 프레임)
     2.39s  agent 발화 시작: <ret> That’s a great question to ask about your well-being. 
     2.58s  user  발화 끝
     3.19s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.95s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     6.53s  user  발화 시작: Yeah, yeah.
     8.10s  user  발화 끝
    10.60s  agent 발화 끝
    12.08s  user  발화 시작: Oh, okay—but I read somewhere it’s lower than that?
    15.62s  <ret> 발화 (turn4 첫 프레임)
    15.86s  agent 발화 시작: <ret> It can be—a well-trained athlete often has a lower res
    15.92s  user  발화 끝
    16.98s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.34s]: [source: American Heart Association] For most adults, a normal resting
    20.08s  agent 발화 시작: A normal heart rate can also be between fifty and ninety bea
    20.20s  agent 발화 끝
    25.03s  user  발화 시작: Did you remember to take the trash out?
    25.17s  agent 발화 끝
    27.31s  user  발화 시작: So, fifty to one hundred is the whole range then?
    27.43s  user  발화 끝
    30.68s  user  발화 끝

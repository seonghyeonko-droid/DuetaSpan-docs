# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Zoe",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "home",
#       "text": "User's home address is 587 Elm Street."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, hi Zella. That's… a lot. I was | S2 I think… it started after my grand | S3 Yeah, exactly. It’s like… one minu | S4 Like what? I don’t even know where

     0.00s  agent 발화 시작: Hello Zoe, it’s lovely to connect with you. My name is Zella
     9.68s  user  발화 시작: Oh, hi Zella. That's… a lot. I wasn't expecting a coach, exa
     9.68s  agent 발화 끝
    16.14s  agent 발화 시작: It’s understandable to feel lost when life shifts unexpected
    16.14s  user  발화 끝
    23.31s  user  발화 시작: Uh-huh.
    23.31s  agent 발화 끝
    23.67s  user  발화 시작: Um, well, everything feels… pointless. I used to love my job
    23.67s  user  발화 끝
    31.20s  agent 발화 시작: That sense of meaning fading can be really disheartening. Ha
    31.20s  user  발화 끝
    38.38s  user  발화 시작: Yeah, yeah.
    38.38s  agent 발화 끝
    39.09s  user  발화 시작: I think… it started after my grandmother passed away last mo
    39.09s  user  발화 끝
    44.47s  agent 발화 시작: I’m so sorry for your loss, Zoe. Grief can colour everything
    44.47s  user  발화 끝
    51.65s  user  발화 시작: Uh-huh.
    51.65s  agent 발화 끝
    52.00s  user  발화 시작: It just feels like it shouldn’t be this hard, you know? Ever
    52.00s  user  발화 끝
    57.74s  agent 발화 시작: It’s alright to feel that time isn't a simple fix, Zoe. Grie
    57.74s  user  발화 끝
    64.91s  user  발화 시작: Yeah, totally.
    64.91s  agent 발화 끝
    65.63s  user  발화 시작: Yeah, exactly. It’s like… one minute I’m okay, and the next 
    65.63s  user  발화 끝
    70.65s  agent 발화 시작: Those waves are completely normal, and it’s brave of you to 
    70.65s  user  발화 끝
    81.41s  user  발화 시작: Uh-huh.
    81.41s  agent 발화 끝
    81.77s  user  발화 시작: I’ve been trying to distract myself, mostly. Work, seeing fr
    81.77s  user  발화 끝
    88.23s  agent 발화 시작: Distraction can be helpful in small doses, but it doesn’t ad
    88.23s  user  발화 끝
    97.19s  user  발화 시작: Yeah, totally.
    97.19s  agent 발화 끝
    97.91s  user  발화 시작: Like what? I don’t even know where to begin. I feel so silly
    97.91s  user  발화 끝
   103.65s  agent 발화 시작: It’s not silly at all, Zoe. Talking is a beautiful first ste
   103.65s  user  발화 끝
   113.69s  user  발화 시작: Yeah.
   113.69s  agent 발화 끝
   114.05s  user  발화 시작: That sounds… intense. Maybe just the talking for now?
   114.05s  user  발화 끝
   117.28s  agent 발화 시작: We can take things at your pace, Zoe. Just sharing your feel
   117.28s  user  발화 끝
   123.73s  agent 발화 끝

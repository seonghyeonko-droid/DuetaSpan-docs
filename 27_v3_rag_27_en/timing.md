# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Jordan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-23",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been feeling really lost abou | S2 Hmm, that’s…better than I thought. | S3 I hadn't really, no. It seems so d | S4 Those are possibilities. I’m just 

     0.00s  user  발화 시작: I’ve been feeling really lost about my career lately.
     3.35s  agent 발화 시작: It’s completely normal to feel that way, and I’m here to hel
     3.35s  user  발화 끝
     9.30s  user  발화 시작: Yeah.
     9.30s  agent 발화 끝
     9.67s  user  발화 시작: That’s good to hear. I used to love writing, but…
     9.67s  user  발화 끝
    13.39s  agent 발화 시작: It sounds like you’re disconnected from a passion. Let’s unp
    13.39s  user  발화 끝
    19.72s  user  발화 시작: Well, I went to school for English, but the job market seems
    19.72s  agent 발화 끝
    24.26s  <ret> 발화 (turn6 첫 프레임)
    24.55s  agent 발화 시작: <ret> It’s true the job market can feel challenging, but the
    24.55s  user  발화 끝
    25.66s  ⚡SPAN 주입 [d'=1.40s / d_lead=10.42s]: According to the Bureau of Labor Statistics, employment of writers and
    34.97s  user  발화 시작: Oh.
    34.97s  agent 발화 끝
    35.34s  user  발화 시작: Hmm, that’s…better than I thought.
    35.34s  user  발화 끝
    37.20s  agent 발화 시작: It's great you’re already reassessing things! What kind of w
    37.20s  user  발화 끝
    42.41s  user  발화 시작: Wow.
    42.41s  agent 발화 끝
    42.78s  user  발화 시작: Poetry, actually. I wrote a lot in college.
    42.78s  user  발화 끝
    45.75s  agent 발화 시작: Poetry is a wonderful outlet. Have you considered related fi
    45.75s  user  발화 끝
    50.59s  user  발화 시작: Right.
    50.59s  agent 발화 끝
    50.96s  user  발화 시작: I hadn't really, no. It seems so different.
    50.96s  user  발화 끝
    53.94s  agent 발화 시작: Yeah.
    53.94s  user  발화 끝
    54.31s  agent 발화 시작: It can be, but the core skills – crafting compelling languag
    54.31s  agent 발화 끝
    59.89s  user  발화 시작: …But would I even make a living doing that?
    59.89s  agent 발화 끝
    63.21s  <ret> 발화 (turn18 첫 프레임)
    63.24s  agent 발화 시작: <ret> The median annual wage for writers and authors was $67
    63.24s  user  발화 끝
    63.31s  ⚡SPAN 주입 [d'=0.51s / d_lead=8.18s]: The median annual wage for writers and authors was $67,120 in May 2023
    71.42s  user  발화 시작: Nice.
    71.42s  agent 발화 끝
    71.79s  agent 발화 시작: It’s helpful to have a realistic understanding of the financ
    71.79s  user  발화 끝
    77.75s  user  발화 시작: Those are possibilities. I’m just not sure where to start lo
    77.75s  agent 발화 끝
    81.84s  agent 발화 시작: Yeah.
    81.84s  user  발화 끝
    82.21s  agent 발화 시작: We can explore resources for job boards and skill-building w
    82.21s  agent 발화 끝
    88.53s  user  발화 시작: That sounds really helpful, thank you.
    88.53s  agent 발화 끝
    90.77s  agent 발화 시작: You’re very welcome. Remember, it's okay to try different pa
    90.77s  user  발화 끝
    96.72s  agent 발화 끝

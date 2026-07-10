# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, I was wondering about fla | S2 Okay, well, what about… um, the ca | S3 I just… I get so stressed about ex | S4 Perfect! Thanks, Kiora.

     0.00s  user  발화 시작: Hey, uh, I was wondering about flags… do you know any flags 
     6.27s  <ret> 발화 (turn1 첫 프레임)
     6.44s  user  발화 끝
     6.51s  agent 발화 시작: <ret> The flag of Germany features black, red, and gold—a st
     8.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: The flag of Germany is composed of black, red, and gold bands.
    11.54s  user  발화 시작: Oh, gold? I thought it was yellow. Hmmm.
    11.70s  agent 발화 끝
    15.34s  user  발화 끝
    15.76s  agent 발화 시작: You’re right to question that! Often, the color is described
    18.48s  user  발화 시작: Right.
    19.11s  user  발화 끝
    21.69s  agent 발화 끝
    21.72s  user  발화 시작: Okay, well, what about… um, the capital of Germany?
    25.55s  <ret> 발화 (turn6 첫 프레임)
    25.86s  agent 발화 시작: <ret> Berlin is the capital of Germany, a city of 3.7 millio
    25.98s  user  발화 끝
    27.23s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.11s]: (tool result) Berlin is the capital and largest city of Germany, with 
    31.97s  agent 발화 끝
    32.01s  user  발화 시작: Wow, that's a lot of people. Do you think I could handle stu
    36.73s  user  발화 끝
    36.84s  agent 발화 시작: Studying abroad can be challenging, but also incredibly rewa
    42.53s  agent 발화 끝
    42.58s  user  발화 시작: I just… I get so stressed about exams.
    45.91s  agent 발화 시작: It’s very common to feel stressed during exams. Perhaps we c
    45.95s  user  발화 끝
    52.04s  user  발화 시작: That actually sounds really good. Maybe we can talk about th
    52.11s  agent 발화 끝
    57.13s  agent 발화 시작: [happy] That sounds like a wonderful plan. We definitely can
    57.27s  user  발화 끝
    59.63s  user  발화 시작: Uh-huh.
    60.17s  user  발화 끝
    62.60s  agent 발화 끝
    63.86s  user  발화 시작: Perfect! Thanks, Kiora.
    65.65s  agent 발화 시작: You're very welcome! Take care and remember to be kind to yo
    65.80s  user  발화 끝
    69.62s  agent 발화 끝

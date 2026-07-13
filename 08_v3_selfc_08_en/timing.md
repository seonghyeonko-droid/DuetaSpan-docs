# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Victor",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "home",
#       "text": "User's home address is 479 Oak Avenue."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-12-21",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Are any documentaries playing at t | S2 Wow, that sounds intense. What els | S3 Seven fifteen sounds good. Can you | S4 That sounds nice, actually. What d

     0.00s  user  발화 시작: Are any documentaries playing at the AMC Metreon sixteen in 
     4.47s  <ret> 발화 (turn1 첫 프레임)
     4.84s  agent 발화 시작: <ret> There are a few documentaries showing—
     4.84s  user  발화 끝
     4.98s  ⚡SPAN 주입 [d'=0.51s / d_lead=2.24s]: (tool result) Showing at AMC Metreon 16: “Free Solo” (PG-13) at 1:30 P
     7.08s  user  발화 시작: …is “Free Solo” any good?
     7.08s  agent 발화 끝
     8.94s  agent 발화 시작: “Free Solo” is critically acclaimed, a breathtaking film—
     8.94s  user  발화 끝
    11.93s  user  발화 시작: Wow, that sounds intense. What else is playing there tonight
    11.93s  agent 발화 끝
    15.60s  <ret> 발화 (turn6 첫 프레임)
    15.65s  agent 발화 시작: Yeah.
    15.65s  user  발화 끝
    16.02s  agent 발화 시작: <ret> “Free Solo” is at seven tonight, and “Oppenheimer” has
    16.02s  agent 발화 끝
    16.63s  ⚡SPAN 주입 [d'=1.03s / d_lead=4.10s]: (tool result) “Free Solo” shows at 7:00 PM tonight at AMC Metreon 16. 
    20.12s  user  발화 시작: I think I’d prefer something a little less…stressful. Any co
    20.12s  agent 발화 끝
    23.69s  <ret> 발화 (turn8 첫 프레임)
    23.85s  agent 발화 시작: <ret> “No Hard Feelings” is playing at 1:45, 4:30, and 7:15—
    23.85s  user  발화 끝
    24.16s  ⚡SPAN 주입 [d'=0.94s / d_lead=3.73s]: (tool result) “No Hard Feelings” (R) is playing at AMC Metreon 16 at 1
    27.58s  user  발화 시작: Seven fifteen sounds good. Can you get me two tickets for th
    27.58s  agent 발화 끝
    31.63s  <ret> 발화 (turn10 첫 프레임)
    32.05s  agent 발화 시작: <ret> Two tickets for “No Hard Feelings” at 7:15—
    32.05s  user  발화 끝
    32.48s  ⚡SPAN 주입 [d'=0.86s / d_lead=2.98s]: (tool result) Confirmed: 2 tickets for “No Hard Feelings” at AMC Metre
    35.03s  user  발화 시작: Great, thank you! I'm feeling a bit anxious about work latel
    35.03s  agent 발화 끝
    39.13s  agent 발화 시작: Oh, I’m sorry to hear that. It’s very common to feel stresse
    39.13s  user  발화 끝
    43.60s  user  발화 시작: That sounds nice, actually. What does that involve?
    43.60s  agent 발화 끝
    46.58s  agent 발화 시작: Okay.
    46.58s  user  발화 끝
    46.96s  agent 발화 시작: It's simple. Focus on five things you can see, four you can 
    46.96s  agent 발화 끝
    51.80s  user  발화 시작: Yeah.
    51.80s  agent 발화 끝
    52.17s  agent 발화 시작: —three you can hear, two you can smell, and one you can tast
    52.17s  user  발화 끝
    59.63s  user  발화 시작: That’s… surprisingly calming. Thanks, Junan.
    59.63s  agent 발화 끝
    61.49s  agent 발화 시작: You’re very welcome.
    61.49s  user  발화 끝
    62.61s  agent 발화 끝
